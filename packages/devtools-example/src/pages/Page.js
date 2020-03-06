import React from "react";
import styled from "styled-components";
import { Theme } from "@lugia/lugia-web";
import { Label } from "@lugia/lugia-web";
import { Breadcrumb } from "@lugia/lugia-web";
import { Card } from "@lugia/lugia-web";
import { Pagination } from "@lugia/lugia-web";
import { Button } from "@lugia/lugia-web";
import { Table } from "@lugia/lugia-web";
import { Divider } from "@lugia/lugia-web";
import { Input } from "@lugia/lugia-web";
import lugiax, { bindTo, connect, bind, LugiaxData } from "@lugia/lugiax";
import LugiadCore from "@lugia/lugiad-core";
import hello from "../models/hello";
import $__data__onExpand from "../ue/onExpand";
import $__data__onInit from "../ue/onInit";
const { themeHandle, bindHandleEvent, getData } = LugiadCore;
const $__data__ = LugiaxData.createData({
  model: "0e58d3c7-396c-4587-b47b-15c03257e2ff",
  state: {
    btnHidden: false,
    direction: -1,
    ExpandButton: { icon: "lugia-icon-direction_up", text: "收起" },
    theme: {
      QueryForm: { Container: { normal: { height: 56, overflow: "hidden" } } },
      MainCard: { Container: { normal: { height: 621 } } }
    }
  }
});

const Hello02 = bindTo(
  hello,
  {
    name: "value"
  },
  {
    onChange: {
      ["name"](e) {
        return bindHandleEvent(e);
      }
    }
  }
)(Input);
const Hello04 = bindTo(
  hello,
  {
    name: "value"
  },
  {
    onChange: {
      ["name"](e) {
        return bindHandleEvent(e);
      }
    }
  }
)(Input);
const Hello06 = bindTo(
  hello,
  {
    name: "value"
  },
  {
    onChange: {
      ["name"](e) {
        return bindHandleEvent(e);
      }
    }
  }
)(Input);
class ChildPadComponent0 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 0.6962576153176675 + "%",
            zIndex: "0",
            ...{
              left: "1.8019694259902592%",
              top: "239.8704628704623px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbc!ALf6": themeHandle(
                "wbc!ALf6",
                undefined,
                {
                  Container: { normal: { height: 23, width: 3232 } },
                  HorizontalDivider: {
                    normal: { background: { color: "#e8e8e8" }, width: 1130 }
                  }
                },
                true
              )
            }}
          >
            <Divider viewClass="wbc!ALf6" dashed="" type={`horizontal`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "1",
            ...{ left: "0%", top: "24px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              "wb)NwL0": themeHandle(
                "wb)NwL0",
                undefined,
                {
                  Container: {
                    normal: {
                      textAlign: "right",
                      font: { size: 14 },
                      color: "#333",
                      height: 30,
                      lineHeight: 30,
                      width: 95.75
                    }
                  }
                },
                true
              )
            }}
          >
            <Label viewClass="wb)NwL0" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "2",
            ...{
              left: "8.855526544821583%",
              top: "24px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbxBZw1: themeHandle(
                "wbxBZw1",
                undefined,
                {
                  Placeholder: {
                    normal: { font: { size: 14 }, color: "#ccc" }
                  },
                  Container: { normal: { width: 275.25, height: 32 } }
                },
                true
              )
            }}
          >
            <Hello02 viewClass="wbxBZw1" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "3",
            ...{
              left: "33.33333333333333%",
              top: "24px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbMjRj2: themeHandle(
                "wbMjRj2",
                undefined,
                {
                  Container: {
                    normal: {
                      textAlign: "right",
                      font: { size: 14 },
                      color: "#333",
                      height: 30,
                      lineHeight: 30,
                      width: 95.75
                    }
                  }
                },
                true
              )
            }}
          >
            <Label viewClass="wbMjRj2" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "4",
            ...{
              left: "42.188859878154915%",
              top: "24px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbZh*33": themeHandle(
                "wbZh*33",
                undefined,
                {
                  Placeholder: {
                    normal: { font: { size: 14 }, color: "#ccc" }
                  },
                  Container: { normal: { width: 275.25, height: 32 } }
                },
                true
              )
            }}
          >
            <Hello04 viewClass="wbZh*33" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "5",
            ...{
              left: "66.66666666666666%",
              top: "24px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbIIdV4: themeHandle(
                "wbIIdV4",
                undefined,
                {
                  Container: {
                    normal: {
                      textAlign: "right",
                      font: { size: 14 },
                      color: "#333",
                      height: 30,
                      lineHeight: 30,
                      width: 95.75
                    }
                  }
                },
                true
              )
            }}
          >
            <Label viewClass="wbIIdV4" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "6",
            ...{
              left: "75.52219321148826%",
              top: "24px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbTV6R5: themeHandle(
                "wbTV6R5",
                undefined,
                {
                  Placeholder: {
                    normal: { font: { size: 14 }, color: "#ccc" }
                  },
                  Container: { normal: { width: 275.25, height: 32 } }
                },
                true
              )
            }}
          >
            <Hello06 viewClass="wbTV6R5" placeholder={`请输入姓名`} />
          </Theme>
        </div>
      </React.Fragment>
    );
  }
}
const ConnectPagination10 = connect(
  [hello],
  state => {
    return {
      ...getData(state, "current", hello, "current"),

      ...getData(state, "total", hello, "total"),

      ...getData(state, "pageSize", hello, "pageSize")
    };
  },
  mutations => {
    return {
      onChange: event =>
        hello.mutations.onChangePage({ eventArgs: { ...event } })
    };
  }
)(Pagination);
const ConnectButton11 = connect(
  [hello],
  state => {
    return {};
  },
  mutations => {
    return {
      onClick: event => hello.mutations.asyncQuery({ eventArgs: { ...event } })
    };
  }
)(Button);
const ConnectButton12 = connect(
  [$__data__.model],
  state => {
    return {
      ...getData(state, "icon", $__data__.model, "ExpandButton.icon"),

      ...getData(state, "text", $__data__.model, "ExpandButton.text"),

      ...getData(state, "lugiaHidden", $__data__.model, "btnHidden")
    };
  },
  mutations => {
    return {};
  }
)(Button);
const ConnectLabel13 = connect(
  [hello],
  state => {
    return {
      ...getData(state, "text", hello, "totalText")
    };
  },
  mutations => {
    return {};
  }
)(Label);
const ConnectPagination14 = connect(
  [hello],
  state => {
    return {
      ...getData(state, "current", hello, "current"),

      ...getData(state, "total", hello, "total"),

      ...getData(state, "pageSize", hello, "pageSize")
    };
  },
  mutations => {
    return {
      onChange: event =>
        hello.mutations.onChangePage({ eventArgs: { ...event } })
    };
  }
)(Pagination);
const ConnectButton15 = connect(
  [hello],
  state => {
    return {};
  },
  mutations => {
    return {
      onClick: event => hello.mutations.add({ eventArgs: { ...event } })
    };
  }
)(Button);
const ConnectCard16 = connect(
  [$__data__.model],
  state => {
    return {
      ...getData(state, "theme", $__data__.model, "theme")
    };
  },
  mutations => {
    return {};
  }
)(Card);
const ConnectTable17 = connect(
  [hello],
  state => {
    return {
      ...getData(state, "data", hello, "table")
    };
  },
  mutations => {
    return {};
  }
)(Table);
class ChildPadComponent1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 133,
            zIndex: "0",
            ...{
              right: "16.33152958153005px",
              bottom: "10.957431457439952px",
              left: "",
              top: ""
            }
          }}
        >
          <Theme
            config={{
              SimplePage: themeHandle(
                "SimplePage",
                undefined,
                {
                  "0": "r",
                  "1": "e",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "n",
                  "6": " ",
                  "7": "{",
                  "8": "P",
                  "9": "a",
                  "10": "g",
                  "11": "i",
                  "12": "n",
                  "13": "a",
                  "14": "t",
                  "15": "i",
                  "16": "o",
                  "17": "n",
                  "18": "C",
                  "19": "o",
                  "20": "n",
                  "21": "t",
                  "22": "a",
                  "23": "i",
                  "24": "n",
                  "25": "e",
                  "26": "r",
                  "27": ":",
                  "28": " ",
                  "29": "{",
                  "30": "n",
                  "31": "o",
                  "32": "r",
                  "33": "m",
                  "34": "a",
                  "35": "l",
                  "36": ":",
                  "37": " ",
                  "38": "{",
                  "39": " ",
                  "40": "w",
                  "41": "i",
                  "42": "d",
                  "43": "t",
                  "44": "h",
                  "45": ":",
                  "46": " ",
                  "47": "1",
                  "48": "0",
                  "49": "0",
                  "50": "0",
                  "51": "}",
                  "52": "}",
                  "53": "}",
                  Container: { normal: { width: 133, height: 28 } }
                },
                true
              )
            }}
          >
            <ConnectPagination10
              viewClass="SimplePage"
              defaultCurrent={1}
              defaultPageSize={10}
              hideOnSinglePage=""
              pageSizeOptions={["10", "20", "30", "50"]}
              showQuickJumper=""
              showSizeChanger=""
              simple={true}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 5.932203389830509 + "%",
            zIndex: "1",
            ...{
              right: "57.265023112480826%",
              bottom: "500.1341991341991px",
              left: "",
              top: ""
            }
          }}
        >
          <Theme
            config={{
              SearchButton: themeHandle(
                "SearchButton",
                undefined,
                {
                  Container: {
                    normal: {
                      borderRadius: {
                        bottomLeft: "",
                        bottomRight: "",
                        topLeft: "",
                        topRight: ""
                      },
                      height: 32,
                      width: 70
                    }
                  }
                },
                true
              )
            }}
          >
            <ConnectButton11
              viewClass="SearchButton"
              block=""
              disabled=""
              shape={`default`}
              size={`default`}
              text={`搜索`}
              type={`primary`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 7.457627118644068 + "%",
            zIndex: "2",
            ...{
              right: "48.44265903587944%",
              bottom: "499.27705627705643px",
              left: "",
              top: ""
            }
          }}
        >
          <Theme
            config={{
              ExpandButton: themeHandle(
                "ExpandButton",
                undefined,
                {
                  Container: { normal: { background: "none", border: "none" } }
                },
                true
              )
            }}
          >
            <ConnectButton12
              viewClass="ExpandButton"
              block=""
              disabled=""
              plain={true}
              shape={`default`}
              size={`default`}
              type={`primary`}
              onClick={(...events) => {
                return $__data__onExpand({
                  events,
                  pageData: $__data__.data,
                  models: []
                });
              }}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 93,
            zIndex: "3",
            ...{
              right: "166.1230158730159px",
              bottom: "4.957431457439952px",
              left: "",
              top: ""
            }
          }}
        >
          <Theme
            config={{
              TotalCount: themeHandle(
                "TotalCount",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#666666",
                      font: {
                        family: "",
                        size: 14,
                        style: "normal",
                        weight: "normal"
                      },
                      width: 93,
                      height: 29
                    }
                  }
                },
                true
              )
            }}
          >
            <ConnectLabel13 viewClass="TotalCount" prefix={`*`} showPrefix="" />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 262,
            zIndex: "4",
            ...{
              left: "21.999999999999773px",
              bottom: "11.457431457439895px",
              right: "",
              top: ""
            }
          }}
        >
          <Theme
            config={{
              Page: themeHandle(
                "Page",
                undefined,
                {
                  "0": "r",
                  "1": "e",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "n",
                  "6": " ",
                  "7": "{",
                  "8": "P",
                  "9": "a",
                  "10": "g",
                  "11": "i",
                  "12": "n",
                  "13": "a",
                  "14": "t",
                  "15": "i",
                  "16": "o",
                  "17": "n",
                  "18": "C",
                  "19": "o",
                  "20": "n",
                  "21": "t",
                  "22": "a",
                  "23": "i",
                  "24": "n",
                  "25": "e",
                  "26": "r",
                  "27": ":",
                  "28": " ",
                  "29": "{",
                  "30": "n",
                  "31": "o",
                  "32": "r",
                  "33": "m",
                  "34": "a",
                  "35": "l",
                  "36": ":",
                  "37": " ",
                  "38": "{",
                  "39": " ",
                  "40": "w",
                  "41": "i",
                  "42": "d",
                  "43": "t",
                  "44": "h",
                  "45": ":",
                  "46": " ",
                  "47": "1",
                  "48": "0",
                  "49": "0",
                  "50": "0",
                  "51": "}",
                  "52": "}",
                  "53": "}",
                  PaginationContainer: { normal: { width: 800 } }
                },
                true
              )
            }}
          >
            <ConnectPagination14
              viewClass="Page"
              defaultCurrent={1}
              defaultPageSize={10}
              hideOnSinglePage=""
              pageSizeOptions={["10", "20", "30", "50"]}
              showQuickJumper={true}
              showSizeChanger=""
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 6.186440677966102 + "%",
            zIndex: "5",
            ...{
              left: "2.0101649762666267%",
              bottom: "436.92551892551927px",
              right: "",
              top: ""
            }
          }}
        >
          <Theme
            config={{
              AddButton: themeHandle(
                "AddButton",
                undefined,
                {
                  Container: {
                    normal: {
                      background: "none",
                      border: {
                        all: { color: "#4d63ff", style: "solid", width: "" },
                        bottom: { color: "#4d63ff", style: "solid", width: "" },
                        left: { color: "#4d63ff", style: "solid", width: "" },
                        right: { color: "#4d63ff", style: "solid", width: "" },
                        top: { color: "#4d63ff", style: "solid", width: "" }
                      }
                    }
                  }
                },
                true
              )
            }}
          >
            <ConnectButton15
              viewClass="AddButton"
              block=""
              disabled=""
              plain={true}
              shape={`default`}
              size={`default`}
              text={`+新增`}
              type={`primary`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 97.37288135593221 + "%",
            zIndex: "6",
            ...{
              left: "1.2733876293197843%",
              top: "1.675324675324532px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              QueryForm: themeHandle(
                "QueryForm",
                undefined,
                { Container: { normal: { height: 56, width: 1149 } } },
                true
              )
            }}
          >
            <ConnectCard16
              height={130}
              width={350}
              type={`transparent`}
              viewClass="QueryForm"
            >
              <ChildPadComponent0
                height={130}
                width={350}
                type={`transparent`}
              />
            </ConnectCard16>
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 96.1864406779661 + "%",
            zIndex: "7",
            ...{
              left: "1.8017575644694046%",
              bottom: "60.076923076922185px",
              right: "",
              top: ""
            }
          }}
        >
          <Theme
            config={{
              Table: themeHandle(
                "Table",
                undefined,
                {
                  Container: { normal: { height: 358, width: 1135 } },
                  getValue: {
                    Container: { normal: { width: 1149, height: 360 } }
                  }
                },
                true
              )
            }}
          >
            <ConnectTable17
              viewClass="Table"
              indentSize={15}
              rowKey={`key`}
              showHeader={true}
              tableStyle={`bordered`}
              columns={[
                {
                  columnType: "",
                  dataIndex: "title",
                  editType: "string",
                  key: "title",
                  mark: 1582790476195,
                  title: "用户ID"
                },
                {
                  columnType: "",
                  dataIndex: "key",
                  key: "key",
                  mark: 1582790475399,
                  title: "用户名"
                },
                {
                  columnType: "",
                  dataIndex: "dataIndex",
                  key: "dataIndex",
                  mark: 1582790476023,
                  title: "邮箱"
                },
                {
                  columnType: "",
                  dataIndex: "width",
                  editType: "number",
                  key: "width",
                  mark: 1582790475507,
                  title: "手机号"
                },
                { dataIndex: null, key: null, title: "创建时间", width: null },
                { dataIndex: null, key: null, title: "状态", width: null }
              ]}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 0.6779661016949152 + "%",
            zIndex: "8",
            ...{
              left: "1.7546295512396677%",
              top: "239.8704628704623px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbUp^f44": themeHandle(
                "wbUp^f44",
                undefined,
                {
                  Container: { normal: { height: 23, width: 3232 } },
                  HorizontalDivider: {
                    normal: { background: { color: "#e8e8e8" }, width: 1130 }
                  }
                },
                true
              )
            }}
          >
            <Divider viewClass="wbUp^f44" dashed="" type={`horizontal`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 7.457627118644068 + "%",
            zIndex: "9",
            ...{
              right: "17.520838944377314%",
              bottom: "436.92551892551927px",
              left: "",
              top: ""
            }
          }}
        >
          <Theme
            config={{
              "wbc*G2W0": themeHandle(
                "wbc*G2W0",
                undefined,
                {
                  Container: { normal: { background: "none", border: "none" } }
                },
                true
              )
            }}
          >
            <Button
              viewClass="wbc*G2W0"
              block=""
              disabled=""
              icon={`lugia-icon-financial_monitoring`}
              plain={true}
              shape={`default`}
              size={`default`}
              text={`审核`}
              type={`primary`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.64406779661017 + "%",
            zIndex: "10",
            ...{
              right: "9.675046910811844%",
              bottom: "436.92551892551927px",
              left: "",
              top: ""
            }
          }}
        >
          <Theme
            config={{
              wbc50c50: themeHandle(
                "wbc50c50",
                undefined,
                {
                  Container: { normal: { background: "none", border: "none" } }
                },
                true
              )
            }}
          >
            <Button
              viewClass="wbc50c50"
              block=""
              disabled=""
              icon={`lugia-icon-financial_questionnaire`}
              plain={true}
              shape={`default`}
              size={`default`}
              text={`反审核`}
              type={`primary`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 7.457627118644068 + "%",
            zIndex: "11",
            ...{
              right: "2.968705261603923%",
              bottom: "436.92551892551927px",
              left: "",
              top: ""
            }
          }}
        >
          <Theme
            config={{
              wbcTVKb0: themeHandle(
                "wbcTVKb0",
                undefined,
                {
                  Container: { normal: { background: "none", border: "none" } }
                },
                true
              )
            }}
          >
            <Button
              viewClass="wbcTVKb0"
              block=""
              disabled=""
              icon={`lugia-icon-reminder_minus_circle_o`}
              plain={true}
              shape={`default`}
              size={`default`}
              text={`删除`}
              type={`primary`}
            />
          </Theme>
        </div>
      </React.Fragment>
    );
  }
}
const ConnectCardMainPad3 = connect(
  [$__data__.model],
  state => {
    return {
      ...getData(state, "theme", $__data__.model, "theme")
    };
  },
  mutations => {
    return {};
  }
)(Card);
export default class Page extends React.Component {
  componentDidMount() {
    document.body.style.background = "#f8f8f8";
  }
  componentWillUnmount() {
    document.body.style.background = "";
  }
  constructor(props) {
    super(props);
    $__data__onInit({ events: [], pageData: $__data__.data, models: [] });
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          zIndex: "4000",
          position: "relative",
          backgroundColor: "#f8f8f8"
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 84,
            zIndex: "0",
            ...{
              left: "25.797101449275488px",
              top: "77.46376811594246px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              Desc: themeHandle(
                "Desc",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#666666",
                      font: {
                        family: "",
                        size: 14,
                        style: "normal",
                        weight: "normal"
                      }
                    }
                  }
                },
                true
              )
            }}
          >
            <Label
              viewClass="Desc"
              prefix={`*`}
              showPrefix=""
              text={`管理用户信息`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 64,
            zIndex: "1",
            ...{
              left: "25.797101449275686px",
              top: "51.376811594202934px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              Title: themeHandle(
                "Title",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#333333",
                      font: {
                        family: "",
                        size: 16,
                        style: "normal",
                        weight: "500"
                      }
                    }
                  }
                },
                true
              )
            }}
          >
            <Label
              viewClass="Title"
              prefix={`*`}
              showPrefix=""
              text={`用户管理`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 112,
            zIndex: "2",
            ...{
              left: "25.797101449275573px",
              top: "13.695652173913487px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              Router: themeHandle(
                "Router",
                undefined,
                {
                  BreadcrumbItem: {
                    Text: {
                      normal: {
                        last: {
                          color: "#666666",
                          font: {
                            family: "",
                            size: "",
                            style: "normal",
                            weight: "normal"
                          }
                        }
                      }
                    }
                  }
                },
                true
              )
            }}
          >
            <Breadcrumb
              viewClass="Router"
              lastSeparator=""
              routes={[
                { path: "/", title: "首页" },
                { path: "/", title: "用户管理" }
              ]}
              separator={`/`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 95.16129032258065 + "%",
            zIndex: "3",
            ...{
              left: "2.123655913978523%",
              top: "105.00000000000017px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              MainCard: themeHandle(
                "MainCard",
                undefined,
                { Container: { normal: { height: 621, width: 1180 } } },
                true
              )
            }}
          >
            <ConnectCardMainPad3 height={130} width={350} viewClass="MainCard">
              <ChildPadComponent1 height={130} width={350} />
            </ConnectCardMainPad3>
          </Theme>
        </div>
      </div>
    );
  }
}
