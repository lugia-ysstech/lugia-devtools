import React from "react";
import styled from "styled-components";
import { Theme } from "@lugia/lugia-web";
import { Card } from "@lugia/lugia-web";
import { AutoComplete } from "@lugia/lugia-web";
import { Button } from "@lugia/lugia-web";
import { Alert } from "@lugia/lugia-web";
import lugiax, { bindTo, connect, bind, LugiaxData } from "@lugia/lugiax";
import LugiadCore from "@lugia/lugiad-core";
import hello from "../models/hello";
import $__data__onClick from "./onClick";
const { themeHandle, bindHandleEvent, getData } = LugiadCore;
const $__data__ = LugiaxData.createData({
  model: "ligx",
  state: {
    direction: -1,
    text: "world",
    theme: {
      ChildCard: { Container: { normal: { width: 1000, height: 200 } } },
      FatherCard: { Container: { normal: { width: 1000, height: 500 } } }
    }
  }
});

class ChildPadComponent0 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 6.751054852320674 + "%",
            height: 13.91304347826087 + "%",
            zIndex: "0",
            ...{ right: "5.69620253164557%", bottom: "7.5%", left: "", top: "" }
          }}
        >
          <Theme
            config={{ OkButton: themeHandle("OkButton", undefined, {}, true) }}
          >
            <Button
              text={`点击`}
              disabled=""
              shape={`default`}
              type={`primary`}
              size={`default`}
              block=""
              onClick={(...events) => {
                return $__data__onClick({
                  events,
                  pageData: $__data__.data,
                  models: [hello]
                });
              }}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 26.371308016877638 + "%",
            height: 13.91304347826087 + "%",
            zIndex: "1",
            ...{
              left: "14.899789029535865%",
              top: "33.69565217391305%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbq41M2: themeHandle(
                "wbq41M2",
                undefined,
                { Container: { normal: { width: 250, height: 32 } } },
                true
              )
            }}
          >
            <AutoComplete
              viewClass="wbq41M2"
              data={["西瓜", "桔子", "苹果"]}
              createPortal={true}
              disabled=""
              showOldValue={true}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 26.371308016877638 + "%",
            height: 13.91304347826087 + "%",
            zIndex: "2",
            ...{
              left: "6.460970464135022%",
              top: "70.65217391304348%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbuyhQ1: themeHandle(
                "wbuyhQ1",
                undefined,
                { Container: { normal: { width: 250, height: 32 } } },
                true
              )
            }}
          >
            <AutoComplete
              viewClass="wbuyhQ1"
              data={["西瓜", "桔子", "苹果"]}
              createPortal={true}
              disabled=""
              showOldValue={true}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8.438818565400844 + "%",
            height: 46.08695652173913 + "%",
            zIndex: "3",
            ...{
              left: "2.3734177215189876%",
              top: "10.869565217391305%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbKW)m71": themeHandle(
                "wbKW)m71",
                undefined,
                { Container: { normal: { width: 80, height: 105 } } },
                true
              )
            }}
          >
            <Alert viewClass="wbKW)m71" type="" showIcon="" closable="" />
          </Theme>
        </div>
      </React.Fragment>
    );
  }
}
const ConnectCard10 = connect(
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
class ChildPadComponent1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 90.28571428571428 + "%",
            height: 36.507936507936506 + "%",
            zIndex: "0",
            ...{
              left: "3.6904761904761907%",
              top: "5.555555555555555%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              ChildCard: themeHandle(
                "ChildCard",
                undefined,
                { Container: { normal: { width: 948, height: 230 } } },
                true
              )
            }}
          >
            <ConnectCard10
              type={`tip`}
              showTipBottomLine=""
              width={350}
              height={130}
              viewClass="ChildCard"
            >
              <ChildPadComponent0
                type={`tip`}
                showTipBottomLine=""
                width={350}
                height={130}
              />
            </ConnectCard10>
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.809523809523807 + "%",
            height: 4.920634920634921 + "%",
            zIndex: "1",
            ...{
              left: "4.880952380952381%",
              bottom: "5.595238095238096%",
              right: "",
              top: ""
            }
          }}
        >
          <Theme
            config={{
              "wb9@MO0": themeHandle(
                "wb9@MO0",
                undefined,
                { Container: { normal: { width: 250, height: 32 } } },
                true
              )
            }}
          >
            <AutoComplete
              viewClass="wb9@MO0"
              data={["西瓜", "桔子", "苹果"]}
              createPortal={true}
              disabled=""
              showOldValue={true}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 23.809523809523807 + "%",
            height: 5.079365079365079 + "%",
            zIndex: "2",
            ...{
              left: "5.476190476190476%",
              bottom: "22.896825396825395%",
              right: "",
              top: ""
            }
          }}
        >
          <Theme
            config={{
              wbjfQB3: themeHandle(
                "wbjfQB3",
                undefined,
                { Container: { normal: { width: 250, height: 32 } } },
                true
              )
            }}
          >
            <AutoComplete
              viewClass="wbjfQB3"
              data={["西瓜", "桔子", "苹果"]}
              createPortal={true}
              disabled=""
              showOldValue={true}
            />
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
export default class Page extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "1080px",
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
            width: 54.6875 + "%",
            height: 58.333333333333336 + "%",
            zIndex: "0",
            ...{
              right: "23.958333333333336%",
              bottom: "36.8641040943287%",
              left: "",
              top: ""
            }
          }}
        >
          <Theme
            config={{
              FatherCard: themeHandle(
                "FatherCard",
                undefined,
                { Container: { normal: { width: 1050, height: 630 } } },
                true
              )
            }}
          >
            <ConnectCardMainPad0
              type={`tip`}
              showTipBottomLine=""
              width={350}
              height={130}
              viewClass="FatherCard"
            >
              <ChildPadComponent1
                type={`tip`}
                showTipBottomLine=""
                width={350}
                height={130}
              />
            </ConnectCardMainPad0>
          </Theme>
        </div>
      </div>
    );
  }
}
