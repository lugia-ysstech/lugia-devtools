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
import $__data__onExpand from "./onExpand";
import $__data__onInit from "./onInit";
const { themeHandle, bindHandleEvent, getData } = LugiadCore;
const $__data__ = LugiaxData.createData({
  model: "0e58d3c7-396c-4587-b47b-15c03257e2ff",
  state: {
    direction: -1,
    ExpandButton: { icon: "lugia-icon-direction_up", text: "收起" },
    theme: {
      QueryForm: { Container: { normal: { height: 448, overflow: "hidden" } } },
      MainCard: { Container: { normal: { height: 1013 } } }
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
const Hello08 = bindTo(
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
const Hello010 = bindTo(
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
const Hello012 = bindTo(
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
const Hello014 = bindTo(
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
const Hello016 = bindTo(
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
const Hello018 = bindTo(
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
const Hello020 = bindTo(
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
const Hello022 = bindTo(
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
const Hello024 = bindTo(
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
const Hello026 = bindTo(
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
const Hello028 = bindTo(
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
const Hello030 = bindTo(
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
const Hello032 = bindTo(
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
const Hello034 = bindTo(
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
const Hello036 = bindTo(
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
const Hello038 = bindTo(
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
const Hello040 = bindTo(
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
const Hello042 = bindTo(
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
const Hello044 = bindTo(
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
const Hello046 = bindTo(
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
const Hello048 = bindTo(
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
              wbqbCH0: themeHandle(
                "wbqbCH0",
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
            <Label viewClass="wbqbCH0" text={`姓名 : `} />
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
              wbXTi21: themeHandle(
                "wbXTi21",
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
            <Hello02 viewClass="wbXTi21" placeholder={`请输入姓名`} />
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
              "wbF*y12": themeHandle(
                "wbF*y12",
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
            <Label viewClass="wbF*y12" text={`姓名 : `} />
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
              "wb**2I3": themeHandle(
                "wb**2I3",
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
            <Hello04 viewClass="wb**2I3" placeholder={`请输入姓名`} />
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
              "wbY6#^4": themeHandle(
                "wbY6#^4",
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
            <Label viewClass="wbY6#^4" text={`姓名 : `} />
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
              wbL2AX5: themeHandle(
                "wbL2AX5",
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
            <Hello06 viewClass="wbL2AX5" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "7",
            ...{ left: "0%", top: "80px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              wbY1G66: themeHandle(
                "wbY1G66",
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
            <Label viewClass="wbY1G66" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "8",
            ...{
              left: "8.855526544821583%",
              top: "80px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wb8nuF7: themeHandle(
                "wb8nuF7",
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
            <Hello08 viewClass="wb8nuF7" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "9",
            ...{
              left: "33.33333333333333%",
              top: "80px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb41#G8": themeHandle(
                "wb41#G8",
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
            <Label viewClass="wb41#G8" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "10",
            ...{
              left: "42.188859878154915%",
              top: "80px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb]2z59": themeHandle(
                "wb]2z59",
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
            <Hello010 viewClass="wb]2z59" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "11",
            ...{
              left: "66.66666666666666%",
              top: "80px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbigCU10: themeHandle(
                "wbigCU10",
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
            <Label viewClass="wbigCU10" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "12",
            ...{
              left: "75.52219321148826%",
              top: "80px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbd3Up11: themeHandle(
                "wbd3Up11",
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
            <Hello012 viewClass="wbd3Up11" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "13",
            ...{ left: "0%", top: "136px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              "wb(j^A12": themeHandle(
                "wb(j^A12",
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
            <Label viewClass="wb(j^A12" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "14",
            ...{
              left: "8.855526544821583%",
              top: "136px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbM@f613": themeHandle(
                "wbM@f613",
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
            <Hello014 viewClass="wbM@f613" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "15",
            ...{
              left: "33.33333333333333%",
              top: "136px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbv&Vp14": themeHandle(
                "wbv&Vp14",
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
            <Label viewClass="wbv&Vp14" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "16",
            ...{
              left: "42.188859878154915%",
              top: "136px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb9]pK15": themeHandle(
                "wb9]pK15",
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
            <Hello016 viewClass="wb9]pK15" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "17",
            ...{
              left: "66.66666666666666%",
              top: "136px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbK%Bv16": themeHandle(
                "wbK%Bv16",
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
            <Label viewClass="wbK%Bv16" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "18",
            ...{
              left: "75.52219321148826%",
              top: "136px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb^9vX17": themeHandle(
                "wb^9vX17",
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
            <Hello018 viewClass="wb^9vX17" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "19",
            ...{ left: "0%", top: "192px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              "wb$(Bg18": themeHandle(
                "wb$(Bg18",
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
            <Label viewClass="wb$(Bg18" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "20",
            ...{
              left: "8.855526544821583%",
              top: "192px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb1v%M19": themeHandle(
                "wb1v%M19",
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
            <Hello020 viewClass="wb1v%M19" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "21",
            ...{
              left: "33.33333333333333%",
              top: "192px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbSuIk20: themeHandle(
                "wbSuIk20",
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
            <Label viewClass="wbSuIk20" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "22",
            ...{
              left: "42.188859878154915%",
              top: "192px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbVbHO21: themeHandle(
                "wbVbHO21",
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
            <Hello022 viewClass="wbVbHO21" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "23",
            ...{
              left: "66.66666666666666%",
              top: "192px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbeaf$22: themeHandle(
                "wbeaf$22",
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
            <Label viewClass="wbeaf$22" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "24",
            ...{
              left: "75.52219321148826%",
              top: "192px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wb0hMa23: themeHandle(
                "wb0hMa23",
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
            <Hello024 viewClass="wb0hMa23" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "25",
            ...{ left: "0%", top: "248px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              "wb]2%q24": themeHandle(
                "wb]2%q24",
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
            <Label viewClass="wb]2%q24" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "26",
            ...{
              left: "8.855526544821583%",
              top: "248px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb))gN25": themeHandle(
                "wb))gN25",
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
            <Hello026 viewClass="wb))gN25" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "27",
            ...{
              left: "33.33333333333333%",
              top: "248px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbhDqX26: themeHandle(
                "wbhDqX26",
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
            <Label viewClass="wbhDqX26" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "28",
            ...{
              left: "42.188859878154915%",
              top: "248px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wb4Kte27: themeHandle(
                "wb4Kte27",
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
            <Hello028 viewClass="wb4Kte27" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "29",
            ...{
              left: "66.66666666666666%",
              top: "248px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb#cL]28": themeHandle(
                "wb#cL]28",
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
            <Label viewClass="wb#cL]28" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "30",
            ...{
              left: "75.52219321148826%",
              top: "248px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb^Xg&29": themeHandle(
                "wb^Xg&29",
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
            <Hello030 viewClass="wb^Xg&29" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "31",
            ...{ left: "0%", top: "304px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              "wbSx#!30": themeHandle(
                "wbSx#!30",
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
            <Label viewClass="wbSx#!30" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "32",
            ...{
              left: "8.855526544821583%",
              top: "304px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbpdFb31: themeHandle(
                "wbpdFb31",
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
            <Hello032 viewClass="wbpdFb31" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "33",
            ...{
              left: "33.33333333333333%",
              top: "304px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb(kI&32": themeHandle(
                "wb(kI&32",
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
            <Label viewClass="wb(kI&32" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "34",
            ...{
              left: "42.188859878154915%",
              top: "304px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbUFGx33: themeHandle(
                "wbUFGx33",
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
            <Hello034 viewClass="wbUFGx33" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "35",
            ...{
              left: "66.66666666666666%",
              top: "304px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbuBDg34: themeHandle(
                "wbuBDg34",
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
            <Label viewClass="wbuBDg34" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "36",
            ...{
              left: "75.52219321148826%",
              top: "304px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbq7tp35: themeHandle(
                "wbq7tp35",
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
            <Hello036 viewClass="wbq7tp35" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "37",
            ...{ left: "0%", top: "360px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              "wb[wHp36": themeHandle(
                "wb[wHp36",
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
            <Label viewClass="wb[wHp36" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "38",
            ...{
              left: "8.855526544821583%",
              top: "360px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbgxPM37: themeHandle(
                "wbgxPM37",
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
            <Hello038 viewClass="wbgxPM37" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "39",
            ...{
              left: "33.33333333333333%",
              top: "360px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb2G[K38": themeHandle(
                "wb2G[K38",
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
            <Label viewClass="wb2G[K38" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "40",
            ...{
              left: "42.188859878154915%",
              top: "360px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbBMX^39": themeHandle(
                "wbBMX^39",
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
            <Hello040 viewClass="wbBMX^39" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "41",
            ...{
              left: "66.66666666666666%",
              top: "360px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbrTan40: themeHandle(
                "wbrTan40",
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
            <Label viewClass="wbrTan40" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "42",
            ...{
              left: "75.52219321148826%",
              top: "360px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbB@Dw41": themeHandle(
                "wbB@Dw41",
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
            <Hello042 viewClass="wbB@Dw41" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "43",
            ...{ left: "0%", top: "416px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              "wbch]242": themeHandle(
                "wbch]242",
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
            <Label viewClass="wbch]242" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "44",
            ...{
              left: "8.855526544821583%",
              top: "416px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbT!Zd43": themeHandle(
                "wbT!Zd43",
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
            <Hello044 viewClass="wbT!Zd43" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "45",
            ...{
              left: "33.33333333333333%",
              top: "416px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbNOee44: themeHandle(
                "wbNOee44",
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
            <Label viewClass="wbNOee44" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "46",
            ...{
              left: "42.188859878154915%",
              top: "416px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wb9vOd45: themeHandle(
                "wb9vOd45",
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
            <Hello046 viewClass="wb9vOd45" placeholder={`请输入姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.355091383812011 + "%",
            zIndex: "47",
            ...{
              left: "66.66666666666666%",
              top: "416px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbI$wI46: themeHandle(
                "wbI$wI46",
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
            <Label viewClass="wbI$wI46" text={`姓名 : `} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.93385552654482 + "%",
            zIndex: "48",
            ...{
              left: "75.52219321148826%",
              top: "416px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbfgxT47: themeHandle(
                "wbfgxT47",
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
            <Hello048 viewClass="wbfgxT47" placeholder={`请输入姓名`} />
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

      ...getData(state, "text", $__data__.model, "ExpandButton.text")
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
            width: 9.576271186440678 + "%",
            zIndex: "0",
            ...{
              right: "44.33152958153005px",
              bottom: "11.457431457439895px",
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
                  "53": "}"
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
            width: 7.118644067796611 + "%",
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
            width: 6.101694915254238 + "%",
            zIndex: "3",
            ...{
              right: "163.6230158730159px",
              bottom: "11.457431457439895px",
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
                      }
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
            width: 44.57627118644068 + "%",
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
                { Container: { normal: { height: 448, width: 1149 } } },
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
            width: 7.118644067796611 + "%",
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
            width: 8.305084745762711 + "%",
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
            width: 7.118644067796611 + "%",
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
            width: 6.774193548387098 + "%",
            zIndex: "0",
            ...{
              left: "2.080411407199636%",
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
            width: 5.161290322580645 + "%",
            zIndex: "1",
            ...{
              left: "2.080411407199652%",
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
            width: 9.032258064516128 + "%",
            zIndex: "2",
            ...{
              left: "2.0804114071996427%",
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
                { Container: { normal: { height: 1013, width: 1180 } } },
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
