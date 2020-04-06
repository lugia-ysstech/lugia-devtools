import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Theme } from "@lugia/lugia-web";
import { Card } from "@lugia/lugia-web";
import { Breadcrumb } from "@lugia/lugia-web";
import { Label } from "@lugia/lugia-web";
import { SmartTable } from "@/components";
import { Button } from "@lugia/lugia-web";
import { Pagination } from "@lugia/lugia-web";
import { BasicElements } from "@lugia/lugia-web";
import { Input } from "@lugia/lugia-web";
import lugiax, { bindTo, connect, bind, LugiaxData } from "@lugia/lugiax";
import LugiadCore from "@lugia/lugiad-core";
import hello from "../models/hello";
import $__data__onQuery from "../ue/lugia/smart/query/hello/onQuery.js";
import $__data__onValidate from "../ue/lugia/smart/query/hello/validate";
import $__data__onExpand from "../ue/lugia/smart/query/onExpand";
import $__data__onInit from "../ue/lugia/smart/query/onInit";
import $__data__onDelete from "../ue/lugia/smart/query/onDelete";
import $__data__onView from "../ue/lugia/smart/query/onViewRecord";

function create () {
  const { themeHandle, bindHandleEvent, getData } = LugiadCore;
  const $__data__ = LugiaxData.createData({
    model: "0e58d3c7-396c-4587-b47b-15c03257e2ff",
    state: {
      text: "保存",
      sexError: "",
      sexHelp: "",
      nameError: "",
      nameHelp: "",
      ageError: "",
      ageHelp: "",
      btnHidden: false,
      direction: -1,
      ExpandButton: { icon: "lugia-icon-direction_up", text: "收起" },
      theme: {
        QueryForm: {
          Container: { normal: { height: 102, overflow: "hidden" } }
        },
        MainCard: { Container: { normal: { height: 732 } } },
        MainBoxCard: {
          Container: {
            normal: { height: 732, border: "none", boxShadow: "none" }
          }
        }
      }
    }
  });

  const Hello01 = bindTo(
    hello,
    {
      sex: "value"
    },
    {
      onChange: {
        [ "sex" ] (e) {
          return bindHandleEvent(e);
        }
      }
    }
  )(Input);
  const ConnectHello0101 = connect(
    [$__data__.model],
    state => {
      return {
        ...getData(state, "validateStatus", $__data__.model, "sexError"),

        ...getData(state, "help", $__data__.model, "sexHelp")
      };
    },
    mutations => {
      return {};
    }
  )(Hello01);
  const Hello03 = bindTo(
    hello,
    {
      name: "value"
    },
    {
      onChange: {
        [ "name" ] (e) {
          return bindHandleEvent(e);
        }
      }
    }
  )(Input);
  const ConnectHello0303 = connect(
    [$__data__.model],
    state => {
      return {
        ...getData(state, "validateStatus", $__data__.model, "nameError"),

        ...getData(state, "help", $__data__.model, "nameHelp")
      };
    },
    mutations => {
      return {};
    }
  )(Hello03);
  const Hello05 = bindTo(
    hello,
    {
      age: "value"
    },
    {
      onChange: {
        [ "age" ] (e) {
          return bindHandleEvent(e);
        }
      }
    }
  )(Input);
  const ConnectHello0505 = connect(
    [$__data__.model],
    state => {
      return {
        ...getData(state, "validateStatus", $__data__.model, "ageError"),

        ...getData(state, "help", $__data__.model, "ageHelp")
      };
    },
    mutations => {
      return {};
    }
  )(Hello05);
  const Hello07 = bindTo(
    hello,
    {
      sex: "value"
    },
    {
      onChange: {
        [ "sex" ] (e) {
          return bindHandleEvent(e);
        }
      }
    }
  )(Input);
  const ConnectHello0707 = connect(
    [$__data__.model],
    state => {
      return {
        ...getData(state, "validateStatus", $__data__.model, "sexError"),

        ...getData(state, "help", $__data__.model, "sexHelp")
      };
    },
    mutations => {
      return {};
    }
  )(Hello07);

  class ChildPadComponent0 extends React.Component {
    render () {
      return (
        <React.Fragment>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 8.355091383812011 + "%",
              zIndex: "0",
              ...{ left: "0%", top: "30px", right: "", bottom: "" }
            }}
          >
            <Theme
              config={{
                "wb%YAv0": themeHandle(
                  "wb%YAv0",
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
                    },
                    LabelPrefix: {
                      normal: { color: "red", font: { size: 14 } }
                    }
                  },
                  true
                )
              }}
            >
              <Label viewClass="wb%YAv0" text={`性别 : `} prefix={`*`}/>
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 23.93385552654482 + "%",
              zIndex: "1",
              ...{
                left: "8.855526544821583%",
                top: "30px",
                right: "",
                bottom: ""
              }
            }}
          >
            <Theme
              config={{
                "wb#KnZ1": themeHandle(
                  "wb#KnZ1",
                  undefined,
                  {
                    Placeholder: { normal: { fontSize: 14, color: "#ccc" } },
                    Container: {
                      normal: {
                        borderRadius: {
                          bottomLeft: 4,
                          bottomRight: 4,
                          topLeft: 4,
                          topRight: 4
                        },
                        border: {
                          top: { color: "#d8d8d8", width: 1, style: "solid" },
                          left: { color: "#d8d8d8", width: 1, style: "solid" },
                          right: { color: "#d8d8d8", width: 1, style: "solid" },
                          bottom: { color: "#d8d8d8", width: 1, style: "solid" }
                        },
                        width: 275.25,
                        height: 32
                      }
                    }
                  },
                  true
                )
              }}
            >
              <ConnectHello0101
                viewClass="wb#KnZ1"
                field={`sex`}
                placeholder={`请输入性别`}
                validateType={`top`}
                onChange={(...events) => {
                  return $__data__onValidate({
                    events,
                    pageData: $__data__.data,
                    models: [hello],
                    props: {
                      ...{
                        field: "sex",
                        placeholder: "请输入性别",
                        validateType: "top"
                      }
                    }
                  });
                }}
              />
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 8.355091383812011 + "%",
              zIndex: "2",
              ...{
                left: "33.33333333333333%",
                top: "30px",
                right: "",
                bottom: ""
              }
            }}
          >
            <Theme
              config={{
                "wbVtH%2": themeHandle(
                  "wbVtH%2",
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
                    },
                    LabelPrefix: {
                      normal: { color: "red", font: { size: 14 } }
                    }
                  },
                  true
                )
              }}
            >
              <Label viewClass="wbVtH%2" text={`姓名 : `} prefix={`*`}/>
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 23.93385552654482 + "%",
              zIndex: "3",
              ...{
                left: "42.188859878154915%",
                top: "30px",
                right: "",
                bottom: ""
              }
            }}
          >
            <Theme
              config={{
                wbcUhP3: themeHandle(
                  "wbcUhP3",
                  undefined,
                  {
                    Placeholder: { normal: { fontSize: 14, color: "#ccc" } },
                    Container: {
                      normal: {
                        borderRadius: {
                          bottomLeft: 4,
                          bottomRight: 4,
                          topLeft: 4,
                          topRight: 4
                        },
                        border: {
                          top: { color: "#d8d8d8", width: 1, style: "solid" },
                          left: { color: "#d8d8d8", width: 1, style: "solid" },
                          right: { color: "#d8d8d8", width: 1, style: "solid" },
                          bottom: { color: "#d8d8d8", width: 1, style: "solid" }
                        },
                        width: 275.25,
                        height: 32
                      }
                    }
                  },
                  true
                )
              }}
            >
              <ConnectHello0303
                viewClass="wbcUhP3"
                field={`name`}
                placeholder={`请输入姓名`}
                validateType={`top`}
                onChange={(...events) => {
                  return $__data__onValidate({
                    events,
                    pageData: $__data__.data,
                    models: [hello],
                    props: {
                      ...{
                        field: "name",
                        placeholder: "请输入姓名",
                        validateType: "top"
                      }
                    }
                  });
                }}
              />
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 8.355091383812011 + "%",
              zIndex: "4",
              ...{
                left: "66.66666666666666%",
                top: "30px",
                right: "",
                bottom: ""
              }
            }}
          >
            <Theme
              config={{
                "wb3*7R4": themeHandle(
                  "wb3*7R4",
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
                    },
                    LabelPrefix: {
                      normal: { color: "red", font: { size: 14 } }
                    }
                  },
                  true
                )
              }}
            >
              <Label viewClass="wb3*7R4" text={`年龄 : `} prefix={`*`}/>
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 23.93385552654482 + "%",
              zIndex: "5",
              ...{
                left: "75.52219321148826%",
                top: "30px",
                right: "",
                bottom: ""
              }
            }}
          >
            <Theme
              config={{
                wb7V7S5: themeHandle(
                  "wb7V7S5",
                  undefined,
                  {
                    Placeholder: { normal: { fontSize: 14, color: "#ccc" } },
                    Container: {
                      normal: {
                        borderRadius: {
                          bottomLeft: 4,
                          bottomRight: 4,
                          topLeft: 4,
                          topRight: 4
                        },
                        border: {
                          top: { color: "#d8d8d8", width: 1, style: "solid" },
                          left: { color: "#d8d8d8", width: 1, style: "solid" },
                          right: { color: "#d8d8d8", width: 1, style: "solid" },
                          bottom: { color: "#d8d8d8", width: 1, style: "solid" }
                        },
                        width: 275.25,
                        height: 32
                      }
                    }
                  },
                  true
                )
              }}
            >
              <ConnectHello0505
                viewClass="wb7V7S5"
                field={`age`}
                placeholder={`请输入年龄`}
                validateType={`top`}
                onChange={(...events) => {
                  return $__data__onValidate({
                    events,
                    pageData: $__data__.data,
                    models: [hello],
                    props: {
                      ...{
                        field: "age",
                        placeholder: "请输入年龄",
                        validateType: "top"
                      }
                    }
                  });
                }}
              />
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 8.355091383812011 + "%",
              zIndex: "6",
              ...{ left: "0%", top: "70px", right: "", bottom: "" }
            }}
          >
            <Theme
              config={{
                "wbuSt^6": themeHandle(
                  "wbuSt^6",
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
                    },
                    LabelPrefix: {
                      normal: { color: "red", font: { size: 14 } }
                    }
                  },
                  true
                )
              }}
            >
              <Label viewClass="wbuSt^6" text={`性别 : `} prefix={`*`}/>
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 23.93385552654482 + "%",
              zIndex: "7",
              ...{
                left: "8.855526544821583%",
                top: "70px",
                right: "",
                bottom: ""
              }
            }}
          >
            <Theme
              config={{
                "wbmi)j7": themeHandle(
                  "wbmi)j7",
                  undefined,
                  {
                    Placeholder: { normal: { fontSize: 14, color: "#ccc" } },
                    Container: {
                      normal: {
                        borderRadius: {
                          bottomLeft: 4,
                          bottomRight: 4,
                          topLeft: 4,
                          topRight: 4
                        },
                        border: {
                          top: { color: "#d8d8d8", width: 1, style: "solid" },
                          left: { color: "#d8d8d8", width: 1, style: "solid" },
                          right: { color: "#d8d8d8", width: 1, style: "solid" },
                          bottom: { color: "#d8d8d8", width: 1, style: "solid" }
                        },
                        width: 275.25,
                        height: 32
                      }
                    }
                  },
                  true
                )
              }}
            >
              <ConnectHello0707
                viewClass="wbmi)j7"
                field={`sex`}
                placeholder={`请输入性别`}
                validateType={`top`}
                onChange={(...events) => {
                  return $__data__onValidate({
                    events,
                    pageData: $__data__.data,
                    models: [hello],
                    props: {
                      ...{
                        field: "sex",
                        placeholder: "请输入性别",
                        validateType: "top"
                      }
                    }
                  });
                }}
              />
            </Theme>
          </div>
        </React.Fragment>
      );
    }
  }

  const ConnectSmartTable10 = connect(
    [hello],
    state => {
      return {
        ...getData(state, "data", hello, "table"),

        ...getData(state, "selectRowKeys", hello, "selected")
      };
    },
    mutations => {
      return {
        onChange: (...event) => hello.mutations.onSelected({ events: event }),
        onEdit: (...event) => hello.mutations.asyncOnEdit({ events: event })
      };
    }
  )(SmartTable);
  const ConnectButton11 = connect(
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
  const ConnectPagination12 = connect(
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
        onChange: (...event) =>
          hello.mutations.asyncOnChangePage({ events: event })
      };
    }
  )(Pagination);
  const ConnectCard13 = connect(
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
  const ConnectButton14 = connect(
    [hello],
    state => {
      return {};
    },
    mutations => {
      return { onClick: (...event) => hello.mutations.add({ events: event }) };
    }
  )(Button);
  const ConnectButton18 = connect(
    [hello],
    state => {
      return {};
    },
    mutations => {
      return {
        onClick: (...event) => hello.mutations.resetQuery({ events: event })
      };
    }
  )(Button);

  class ChildPadComponent1 extends React.Component {
    render () {
      return (
        <React.Fragment>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 95.9322033898305 + "%",
              zIndex: "0",
              ...{
                left: "2.0148844176759777%",
                bottom: "76.53987189281008px",
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
                    Container: { normal: { height: 440, width: 1132 } },
                    getValue: {
                      Container: { normal: { width: 1149, height: 360 } }
                    }
                  },
                  true
                )
              }}
            >
              <ConnectSmartTable10
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
                  {
                    dataIndex: null,
                    key: null,
                    title: "创建时间",
                    width: null
                  },
                  { dataIndex: null, key: null, title: "状态", width: null }
                ]}
                onView={(...events) => {
                  return $__data__onView({
                    events,
                    pageData: $__data__.data,
                    models: [hello],
                    props: {
                      ...{
                        indentSize: 15,
                        rowKey: "key",
                        showHeader: true,
                        tableStyle: "bordered",
                        columns: [
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
                          {
                            dataIndex: null,
                            key: null,
                            title: "创建时间",
                            width: null
                          },
                          {
                            dataIndex: null,
                            key: null,
                            title: "状态",
                            width: null
                          }
                        ]
                      }
                    }
                  });
                }}
                onDelete={(...events) => {
                  return $__data__onDelete({
                    events,
                    pageData: $__data__.data,
                    models: [hello],
                    props: {
                      ...{
                        indentSize: 15,
                        rowKey: "key",
                        showHeader: true,
                        tableStyle: "bordered",
                        columns: [
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
                          {
                            dataIndex: null,
                            key: null,
                            title: "创建时间",
                            width: null
                          },
                          {
                            dataIndex: null,
                            key: null,
                            title: "状态",
                            width: null
                          }
                        ]
                      }
                    }
                  });
                }}
              />
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 4.576271186440678 + "%",
              zIndex: "1",
              ...{
                left: "59.461809377063645%",
                bottom: "588.3947033358795px",
                right: "",
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
                    Container: {
                      normal: {
                        background: "none",
                        border: "none",
                        height: 18,
                        width: 54
                      },
                      hover: { background: "none", border: "none" },
                      active: { background: "none", border: "none" },
                      focus: { background: "none", border: "none" }
                    },
                    ButtonText: {
                      active: { color: "#8C9DFF" },
                      hover: { color: "#8C9DFF" },
                      focus: { color: "#4d63f" }
                    },
                    ButtonIcon: {
                      normal: { margin: { right: 8 } },
                      active: { color: "#8C9DFF" },
                      hover: { color: "#8C9DFF" },
                      focus: { color: "#4d63f" }
                    }
                  },
                  true
                )
              }}
            >
              <ConnectButton11
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
                    models: [hello],
                    props: {
                      ...{
                        block: false,
                        disabled: false,
                        plain: true,
                        shape: "default",
                        size: "default",
                        type: "primary"
                      }
                    }
                  });
                }}
              />
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 95.9322033898305 + "%",
              zIndex: "2",
              ...{
                left: "2.0638085742771413%",
                bottom: "32.52236652237514px",
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
                    Container: { normal: { width: 1132, height: 28 } },
                    PaginationListItem: {
                      normal: {
                        height: 28,
                        width: 28,
                        borderRadius: {
                          bottomLeft: 4,
                          bottomRight: 4,
                          topLeft: 4,
                          topRight: 4
                        }
                      }
                    },
                    PaginationArrowIconContainer: {
                      normal: {
                        height: 28,
                        width: 28,
                        borderRadius: {
                          bottomLeft: 4,
                          bottomRight: 4,
                          topLeft: 4,
                          topRight: 4
                        }
                      }
                    },
                    QuickJumpInput: {
                      Container: {
                        normal: {
                          height: 28,
                          borderRadius: {
                            bottomLeft: 4,
                            bottomRight: 4,
                            topLeft: 4,
                            topRight: 4
                          }
                        }
                      }
                    }
                  },
                  true
                )
              }}
            >
              <ConnectPagination12
                viewClass="Page"
                blockList={["Total", "Page", "PageInput"]}
                align={`Right`}
                defaultCurrent={1}
                defaultPageSize={10}
                hideOnSinglePage=""
                pageSizeOptions={["10", "20", "30", "50"]}
                showQuickJumper={true}
                isShowTotalData={true}
              />
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 97.37288135593221 + "%",
              zIndex: "3",
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
                  { Container: { normal: { height: 102, width: 1149 } } },
                  true
                )
              }}
            >
              <ConnectCard13
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
              </ConnectCard13>
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 54,
              zIndex: "4",
              ...{
                right: "91.1371961372015px",
                bottom: "530.397635044694px",
                left: "",
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
                        border: "none",
                        height: 18,
                        width: 54
                      },
                      hover: { background: "none", border: "none" },
                      active: { background: "none", border: "none" },
                      focus: { background: "none", border: "none" }
                    },
                    ButtonText: {
                      active: { color: "#8C9DFF" },
                      hover: { color: "#8C9DFF" },
                      focus: { color: "#4d63f" }
                    },
                    ButtonIcon: {
                      normal: { margin: { right: 8 } },
                      active: { color: "#8C9DFF" },
                      hover: { color: "#8C9DFF" },
                      focus: { color: "#4d63f" }
                    }
                  },
                  true
                )
              }}
            >
              <ConnectButton14
                viewClass="AddButton"
                icon={`lugia-icon-reminder_plus_circle_o`}
                block=""
                disabled=""
                plain={true}
                shape={`default`}
                size={`default`}
                text={`新增`}
                type={`primary`}
              />
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 54,
              zIndex: "5",
              ...{
                right: "23.584415584414728px",
                bottom: "530.397635044694px",
                left: "",
                top: ""
              }
            }}
          >
            <Theme
              config={{
                DeleteButton: themeHandle(
                  "DeleteButton",
                  undefined,
                  {
                    Container: {
                      normal: {
                        background: "none",
                        border: "none",
                        height: 18,
                        width: 54
                      },
                      hover: { background: "none", border: "none" },
                      active: { background: "none", border: "none" },
                      focus: { background: "none", border: "none" }
                    },
                    ButtonText: {
                      active: { color: "#8C9DFF" },
                      hover: { color: "#8C9DFF" },
                      focus: { color: "#4d63f" }
                    },
                    ButtonIcon: {
                      normal: { margin: { right: 8 } },
                      active: { color: "#8C9DFF" },
                      hover: { color: "#8C9DFF" },
                      focus: { color: "#4d63f" }
                    }
                  },
                  true
                )
              }}
            >
              <Button
                viewClass="DeleteButton"
                block=""
                disabled=""
                icon={`lugia-icon-reminder_minus_circle_o`}
                plain={true}
                shape={`default`}
                size={`default`}
                text={`删除`}
                type={`primary`}
                onClick={(...events) => {
                  return $__data__onDelete({
                    events,
                    pageData: $__data__.data,
                    models: [hello],
                    props: {
                      ...{
                        block: false,
                        disabled: false,
                        icon: "lugia-icon-reminder_minus_circle_o",
                        plain: true,
                        shape: "default",
                        size: "default",
                        text: "删除",
                        type: "primary"
                      }
                    }
                  });
                }}
              />
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 7.457627118644068 + "%",
              zIndex: "6",
              ...{
                left: "41.82588597842812%",
                bottom: "583.8492487904256px",
                right: "",
                top: ""
              }
            }}
          >
            <Theme
              config={{
                SaveButton: themeHandle(
                  "SaveButton",
                  undefined,
                  {
                    Container: {
                      normal: {
                        borderRadius: {
                          bottomLeft: 4,
                          bottomRight: 4,
                          topLeft: 4,
                          topRight: 4
                        },
                        height: 28,
                        width: 88
                      }
                    }
                  },
                  true
                )
              }}
            >
              <Button
                viewClass="SaveButton"
                block=""
                disabled=""
                shape={`default`}
                size={`default`}
                text={`查询`}
                type={`primary`}
                onClick={(...events) => {
                  return $__data__onQuery({
                    events,
                    pageData: $__data__.data,
                    models: [hello],
                    props: {
                      ...{
                        block: false,
                        disabled: false,
                        shape: "default",
                        size: "default",
                        text: "查询",
                        type: "primary"
                      }
                    }
                  });
                }}
              />
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 95.9322033898305 + "%",
              zIndex: "7",
              ...{
                right: "1.9986792868147907%",
                bottom: "562.6363636363635px",
                left: "",
                top: ""
              }
            }}
          >
            <Theme
              config={{
                SplitLine: themeHandle(
                  "SplitLine",
                  undefined,
                  {
                    Container: {
                      normal: {
                        width: 1132,
                        height: 1,
                        background: { color: "#e8e8e8" }
                      }
                    }
                  },
                  true
                )
              }}
            >
              <BasicElements viewClass="SplitLine" shape={`square`}/>
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 7.457627118644068 + "%",
              zIndex: "8",
              ...{
                left: "50.60862865947602%",
                bottom: "584.0310669722437px",
                right: "",
                top: ""
              }
            }}
          >
            <Theme
              config={{
                ResetButton: themeHandle(
                  "ResetButton",
                  undefined,
                  {
                    Container: {
                      normal: {
                        borderRadius: {
                          bottomLeft: 4,
                          bottomRight: 4,
                          topLeft: 4,
                          topRight: 4
                        },
                        height: 28,
                        width: 88
                      }
                    }
                  },
                  true
                )
              }}
            >
              <ConnectButton18
                viewClass="ResetButton"
                block=""
                disabled=""
                shape={`default`}
                size={`default`}
                text={`重置`}
                type={`primary`}
                plain={true}
              />
            </Theme>
          </div>
        </React.Fragment>
      );
    }
  }

  const ConnectCard21 = connect(
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

  class ChildPadComponent2 extends React.Component {
    render () {
      return (
        <React.Fragment>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 20.423728813559322 + "%",
              zIndex: "0",
              ...{
                right: "1.4299165994081273%",
                bottom: "7.707431457439952px",
                left: "",
                top: ""
              }
            }}
          >
            <Theme
              config={{
                "wbc&ywn2": themeHandle(
                  "wbc&ywn2",
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
                        width: 241,
                        height: 30,
                        textAlign: "right"
                      }
                    }
                  },
                  true
                )
              }}
            >
              <Label viewClass="wbc&ywn2" prefix={`*`} showPrefix=""/>
            </Theme>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 100 + "%",
              zIndex: "1",
              ...{
                left: "0.00660356592386959%",
                top: "1.818181818199463px",
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
                  { Container: { normal: { height: 732, width: 1180 } } },
                  true
                )
              }}
            >
              <ConnectCard21
                height={130}
                width={350}
                type={`transparent`}
                viewClass="MainCard"
              >
                <ChildPadComponent1
                  height={130}
                  width={350}
                  type={`transparent`}
                />
              </ConnectCard21>
            </Theme>
          </div>
        </React.Fragment>
      );
    }
  }

  const ConnectCardMainPad0 = connect(
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
  return {
    destroy () {
      if (typeof $__data__ !== "undefined") {
        $__data__ &&
        $__data__.model &&
        $__data__.model.destroy &&
        $__data__.model.destroy();
      }
    },
    Component: class Page extends React.Component {
      constructor (props) {
        super("props");
        hello.mutations.init({ eventName: "constructor" });
        $__data__onInit({
          events: [],
          props: this.props,
          pageData: $__data__.data,
          models: [hello]
        });
      }

      componentDidMount (props, state) {
        hello.mutations.didMount({ eventName: "componentDidMount" });
        $__data__onInit({
          events: [],
          props: this.props,
          pageData: $__data__.data,
          models: [hello]
        });
        document.body.style.background = "#f8f8f8";
      }

      componentWillUnmount (props, state) {
        hello.mutations.unMount({ eventName: "componentWillUnmount" });
        $__data__onInit({
          events: [],
          props: this.props,
          pageData: $__data__.data,
          models: [hello]
        });
        document.body.style.background = "";
      }

      render () {
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
                width: 95.16129032258065 + "%",
                zIndex: "0",
                ...{
                  left: "2.419354838711254%",
                  top: "41.99999999998127px",
                  right: "",
                  bottom: ""
                }
              }}
            >
              <Theme
                config={{
                  MainBoxCard: themeHandle(
                    "MainBoxCard",
                    undefined,
                    {
                      Container: {
                        normal: {
                          height: 732,
                          width: 1180,
                          border: "none",
                          boxShadow: "none"
                        }
                      }
                    },
                    true
                  )
                }}
              >
                <ConnectCardMainPad0
                  height={130}
                  width={350}
                  viewClass="MainBoxCard"
                >
                  <ChildPadComponent2 height={130} width={350}/>
                </ConnectCardMainPad0>
              </Theme>
            </div>
            <div
              style={{
                position: "absolute",
                display: "flex",
                width: 95.16129032258065 + "%",
                zIndex: "1",
                ...{
                  left: "2.4193548387096775%",
                  top: "14px",
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
                            },
                            fontSize: 14
                          }
                        }
                      },
                      Container: { normal: { width: 1180, height: 18 } }
                    },
                    true
                  )
                }}
              >
                <Breadcrumb
                  viewClass="Router"
                  lastSeparator=""
                  separator={`/`}
                  routes={[{ title: "首页" }, { path: "/", title: "用户管理" }]}
                />
              </Theme>
            </div>
          </div>
        );
      }
    }
  };
}

export default props => {
  const TargetRef = useRef(null);
  useEffect(() => {
    return () => {
      if (TargetRef.current) {
        TargetRef.current.destroy();
      }
    };
  }, []);
  let Target = TargetRef.current;
  if (!Target) {
    Target = TargetRef.current = create();
  }
  return <Target.Component {...props} />;
};
