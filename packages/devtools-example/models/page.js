import lugiax from "@lugia/lugiax";
import React from "react";
import { Icon } from "@lugia/lugia-web";

const model = "page";
const state = {
  counter: 0,
  breadcrumb: [
    {
      path: "index",
      title: "首页"
    },
    {
      path: "/page1",
      title: "缴税记录查询"
    }
  ],
  currentPage: 1,
  searchInfo: {
    formType: null,
    trusteeshipBank: null,
    taxesTime: null,
    name: null
  },
  formTypeData: [
    {
      value: "A",
      text: "内资企业"
    },
    {
      value: "B",
      text: "企业分支结构"
    },
    {
      value: "C",
      text: "个体工商户"
    },
    {
      value: "D",
      text: "涉外企业"
    },
    {
      value: "E",
      text: "其他单位"
    }
  ],
  stepsData: [
    { title: "Step1", stepStatus: "finish" },
    { title: "Step2", stepStatus: "process" },
    { title: "Step3", stepStatus: "next" },
    { title: "Step4", stepStatus: "wait" }
  ],
  trusteeshipBankData: [
    {
      value: "104",
      text: "中国银行"
    },
    {
      value: "001",
      text: "中国人民银行"
    },
    {
      value: "102",
      text: "中国工商银行"
    },
    {
      value: "103",
      text: "中国农业银行"
    },
    {
      value: "105",
      text: "中国建设银行"
    },
    {
      value: "301",
      text: "交通银行"
    }
  ],
  formData: [
    {
      id: 1,
      name: "Jack",
      age: 28,
      phone: "13590873847",
      address: "北京市",
      job: "工程师",
      createTime: "2017-01-11",
      email: "29329@163.com",
      formType: "A",
      trusteeshipBank: "102"
    }
  ],
  columns: [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime",
      width: 100
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      width: 100
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      width: 100
    },
    {
      title: "职业",
      dataIndex: "job",
      key: "job",
      width: 200
    }
  ]
};

export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      onChangeName(state, inParam) {
        const {
          eventArgs: { newValue }
        } = inParam;
        console.log("inParam", inParam, newValue);
        return state.setIn(["searchInfo", "name"], newValue);
      },
      onChangeFormType(state, inParam) {
        const {
          eventArgs: { newValue }
        } = inParam;
        return state.setIn(["searchInfo", "formType"], newValue);
      },
      onChangeTrusteeshipBank(state, inParam) {
        const {
          eventArgs: { newValue }
        } = inParam;
        console.log("inParam onChangeTrusteeshipBank", inParam, newValue);
        return state.setIn(["searchInfo", "trusteeshipBank"], newValue);
      },
      onChangeTaxesTime(state, inParam) {
        const {
          eventArgs: { newValue }
        } = inParam;
        return state.setIn(["searchInfo", "taxesTime"], newValue);
      },
      doClearSearchInfo(state, inParam) {
        const clearInfo = {
          formType: null,
          trusteeshipBank: null,
          taxesTime: null,
          name: null
        };
        return state.set("searchInfo", clearInfo);
      }
    },
    async: {
      async doRequest(state, delay = 1000, { mutations }) {
        const searchInfo = state.get("searchInfo").toJS();
        const currentPage = state.get("currentPage");
        const limit = state.get("limit");
        const query = { ...searchInfo, currentPage, limit };
        const resp = await fetch("/api/search", {
          method: "Post",
          body: JSON.stringify({ searchInfo: query }),
          headers: new Headers({ "Content-Type": "application/json" })
        })
          .then(response => response.json())
          .then(data => {
            return data;
          });
        const res = await resp;
        console.log("res.data", res.data);
        state = state.set("total", res.total);
        return state.set("formData", res.data);
      },
      async changePage(state, inParam, { mutations }) {
        await mutations.asyncSetPage(inParam);
        mutations.asyncDoRequest();
      },
      async setPage(state, inParam) {
        return state.set("currentPage", inParam);
      },
      async doDelete(state, inParam) {
        const searchInfo = state.get("searchInfo").toJS();
        const currentPage = state.get("currentPage");
        const limit = state.get("limit");
        const query = { ...searchInfo, limit, currentPage, id: inParam };
        const resp = await fetch("/api/delete", {
          method: "Post",
          body: JSON.stringify({ searchInfo: query }),
          headers: new Headers({ "Content-Type": "application/json" })
        })
          .then(response => response.json())
          .then(data => {
            return data;
          });

        const res = await resp;
        state = state.set("total", res.total);
        return state.set("formData", res.data);
      }
    }
  }
});
