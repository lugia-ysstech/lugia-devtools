import React from "react";
import styled from "styled-components";
import { Theme } from "@lugia/lugia-web";
import { Card } from "@lugia/lugia-web";
import { Label } from "@lugia/lugia-web";
import { Input } from "@lugia/lugia-web";
import { NumberInput } from "@lugia/lugia-web";
import { Button } from "@lugia/lugia-web";
import { Table } from "@lugia/lugia-web";
import lugiax, { bindTo, connect, bind } from "@lugia/lugiax";
import { LugiadCore } from "@lugia/lugia-web";
import user from "../models/hello";
const { themeHandle, bindHandleEvent, getData } = LugiadCore;
const ConnectTable00 = connect(
  [user],
  state => {
    return {
      ...getData(state, "value", user, "table")
    };
  },
  mutations => {
    return {};
  }
)(Table);
class ChildPadComponent0 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            width: 94.60916442048517 + "%",
            height: 63.1858407079646 + "%",
            zIndex: "0",
            ...{ left: "50px", top: "50px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              "wb!Y@E0": themeHandle("wb!Y@E0", undefined, {
                Container: { normal: { width: 1755, height: 357 } }
              })
            }}
          >
            <ConnectTable00
              viewClass="wb!Y@E0"
              columns={[
                { title: "Name", dataIndex: "name", key: "name" },
                { title: "Age", dataIndex: "age", key: "age" },
                { title: "Address", dataIndex: "address", key: "address" },
                { title: "Operations", dataIndex: "", key: "operations" }
              ]}
              data={[
                { name: "Jack", age: 28, address: "some where", key: "1" },
                { name: "Rose", age: 36, address: "some where", key: "2" },
                { name: "Uzi", age: 36, address: "some where", key: "3" },
                { name: "ClearLove", age: 36, address: "some where", key: "4" },
                { name: "Rookie", age: 36, address: "some where", key: "5" },
                { name: "TheShy", age: 36, address: "some where", key: "6" }
              ]}
            />
          </Theme>
        </div>
      </React.Fragment>
    );
  }
}
class ChildPadComponent1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            width: 44.285714285714285 + "%",
            height: 82.05128205128204 + "%",
            zIndex: "0",
            ...{ left: "0px", top: "0px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              wbkDGX0: themeHandle("wbkDGX0", undefined, {
                Container: { normal: { width: 155, height: 32 } }
              })
            }}
          >
            <Button viewClass="wbkDGX0" text={`查询`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 44.285714285714285 + "%",
            height: 82.05128205128204 + "%",
            zIndex: "1",
            ...{ left: "175px", top: "0px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              wb$D061: themeHandle("wb$D061", undefined, {
                Container: { normal: { width: 155, height: 32 } }
              })
            }}
          >
            <Button viewClass="wb$D061" text={`重置`} />
          </Theme>
        </div>
      </React.Fragment>
    );
  }
}
const User22 = bindTo(
  user,
  {
    sfzh: "value"
  },
  {
    onChange: {
      ["sfzh"](e) {
        return bindHandleEvent(e);
      }
    }
  }
)(Input);
const User24 = bindTo(
  user,
  {
    xm: "value"
  },
  {
    onChange: {
      ["xm"](e) {
        return bindHandleEvent(e);
      }
    }
  }
)(Input);
const User26 = bindTo(
  user,
  {
    age: "value"
  },
  {
    onChange: {
      ["age"](e) {
        return bindHandleEvent(e);
      }
    }
  }
)(NumberInput);
const User28 = bindTo(
  user,
  {
    sex: "value"
  },
  {
    onChange: {
      ["sex"](e) {
        return bindHandleEvent(e);
      }
    }
  }
)(NumberInput);
const User210 = bindTo(
  user,
  {
    sex: "value"
  },
  {
    onChange: {
      ["sex"](e) {
        return bindHandleEvent(e);
      }
    }
  }
)(NumberInput);
const User212 = bindTo(
  user,
  {
    sex: "value"
  },
  {
    onChange: {
      ["sex"](e) {
        return bindHandleEvent(e);
      }
    }
  }
)(NumberInput);
const User214 = bindTo(
  user,
  {
    sex: "value"
  },
  {
    onChange: {
      ["sex"](e) {
        return bindHandleEvent(e);
      }
    }
  }
)(NumberInput);
class ChildPadComponent2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            width: 18.867924528301888 + "%",
            height: 12.177121771217712 + "%",
            zIndex: "0",
            ...{ right: "49.5px", bottom: "27.5px", left: "", top: "" }
          }}
        >
          <Theme
            config={{
              wbIKqG71: themeHandle("wbIKqG71", undefined, {
                Container: { normal: { width: 350, height: 33 } }
              })
            }}
          >
            <Card
              width={350}
              height={130}
              type={`transparent`}
              viewClass="wbIKqG71"
            >
              <ChildPadComponent1
                width={350}
                height={130}
                type={`transparent`}
              />
            </Card>
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 8.652291105121291 + "%",
            height: 8 + "%",
            zIndex: "1",
            ...{ left: "70px", top: "50px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              "wbX)Q)0": themeHandle("wbX)Q)0", undefined, {
                Container: {
                  normal: {
                    textAlign: "right",
                    width: 160.49999999999997,
                    height: 22
                  }
                }
              })
            }}
          >
            <Label viewClass="wbX)Q)0" text={`身份证号`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 20.54806828391734 + "%",
            height: 11.636363636363637 + "%",
            zIndex: "2",
            ...{
              left: "250.49999999999997px",
              top: "50px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbP8U41: themeHandle("wbP8U41", undefined, {
                Container: { normal: { width: 381.16666666666663, height: 32 } }
              })
            }}
          >
            <User22 viewClass="wbP8U41" disabled={true} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 8.652291105121291 + "%",
            height: 8 + "%",
            zIndex: "3",
            ...{
              left: "671.6666666666666px",
              top: "50px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb@r1j2": themeHandle("wb@r1j2", undefined, {
                Container: {
                  normal: {
                    textAlign: "right",
                    width: 160.49999999999997,
                    height: 22
                  }
                }
              })
            }}
          >
            <Label viewClass="wb@r1j2" text={`姓名`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 20.54806828391734 + "%",
            height: 11.636363636363637 + "%",
            zIndex: "4",
            ...{
              left: "852.1666666666666px",
              top: "50px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbbxNP3: themeHandle("wbbxNP3", undefined, {
                Container: { normal: { width: 381.16666666666663, height: 32 } }
              })
            }}
          >
            <User24 viewClass="wbbxNP3" disabled={true} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 8.652291105121291 + "%",
            height: 8 + "%",
            zIndex: "5",
            ...{
              left: "1273.3333333333333px",
              top: "50px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb1!AK4": themeHandle("wb1!AK4", undefined, {
                Container: {
                  normal: {
                    textAlign: "right",
                    width: 160.49999999999997,
                    height: 22
                  }
                }
              })
            }}
          >
            <Label viewClass="wb1!AK4" text={`年龄`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 20.54806828391734 + "%",
            height: 11.636363636363637 + "%",
            zIndex: "6",
            ...{
              left: "1453.8333333333333px",
              top: "50px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb@zYi5": themeHandle("wb@zYi5", undefined, {
                Container: { normal: { width: 381.16666666666663, height: 32 } }
              })
            }}
          >
            <User26 viewClass="wb@zYi5" disabled={true} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 8.652291105121291 + "%",
            height: 8 + "%",
            zIndex: "7",
            ...{ left: "70px", top: "107px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              wbrn8z6: themeHandle("wbrn8z6", undefined, {
                Container: {
                  normal: {
                    textAlign: "right",
                    width: 160.49999999999997,
                    height: 22
                  }
                }
              })
            }}
          >
            <Label viewClass="wbrn8z6" text={`性别`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 20.54806828391734 + "%",
            height: 11.636363636363637 + "%",
            zIndex: "8",
            ...{
              left: "250.49999999999997px",
              top: "107px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbu!)h7": themeHandle("wbu!)h7", undefined, {
                Container: { normal: { width: 381.16666666666663, height: 32 } }
              })
            }}
          >
            <User28 viewClass="wbu!)h7" disabled={true} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 8.652291105121291 + "%",
            height: 8 + "%",
            zIndex: "9",
            ...{
              left: "671.6666666666666px",
              top: "107px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbCuDc8: themeHandle("wbCuDc8", undefined, {
                Container: {
                  normal: {
                    textAlign: "right",
                    width: 160.49999999999997,
                    height: 22
                  }
                }
              })
            }}
          >
            <Label viewClass="wbCuDc8" text={`性别`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 20.54806828391734 + "%",
            height: 11.636363636363637 + "%",
            zIndex: "10",
            ...{
              left: "852.1666666666666px",
              top: "107px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbphK&9": themeHandle("wbphK&9", undefined, {
                Container: { normal: { width: 381.16666666666663, height: 32 } }
              })
            }}
          >
            <User210 viewClass="wbphK&9" disabled={true} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 8.652291105121291 + "%",
            height: 8 + "%",
            zIndex: "11",
            ...{
              left: "1273.3333333333333px",
              top: "107px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbyU&G10": themeHandle("wbyU&G10", undefined, {
                Container: {
                  normal: {
                    textAlign: "right",
                    width: 160.49999999999997,
                    height: 22
                  }
                }
              })
            }}
          >
            <Label viewClass="wbyU&G10" text={`性别`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 20.54806828391734 + "%",
            height: 11.636363636363637 + "%",
            zIndex: "12",
            ...{
              left: "1453.8333333333333px",
              top: "107px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbMJ#u11": themeHandle("wbMJ#u11", undefined, {
                Container: { normal: { width: 381.16666666666663, height: 32 } }
              })
            }}
          >
            <User212 viewClass="wbMJ#u11" disabled={true} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 8.652291105121291 + "%",
            height: 8 + "%",
            zIndex: "13",
            ...{ left: "70px", top: "164px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              wbofVF12: themeHandle("wbofVF12", undefined, {
                Container: {
                  normal: {
                    textAlign: "right",
                    width: 160.49999999999997,
                    height: 22
                  }
                }
              })
            }}
          >
            <Label viewClass="wbofVF12" text={`性别`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 20.54806828391734 + "%",
            height: 11.636363636363637 + "%",
            zIndex: "14",
            ...{
              left: "250.49999999999997px",
              top: "164px",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb(82M13": themeHandle("wb(82M13", undefined, {
                Container: { normal: { width: 381.16666666666663, height: 32 } }
              })
            }}
          >
            <User214 viewClass="wb(82M13" disabled={true} />
          </Theme>
        </div>
      </React.Fragment>
    );
  }
}
export default class Page extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "1920px",
          height: "1080px",
          zIndex: "4000",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 96.61458333333334 + "%",
            height: 4.62962962962963 + "%",
            zIndex: "0",
            ...{ left: "28.25px", top: "468.125px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              wbcgWjF0: themeHandle("wbcgWjF0", undefined, {
                Container: { normal: { width: 1855, height: 457 } }
              })
            }}
          >
            <Card width={350} height={130} viewClass="wbcgWjF0">
              <ChildPadComponent0 width={350} height={130} />
            </Card>
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 96.61458333333334 + "%",
            height: 25.462962962962965 + "%",
            zIndex: "1",
            ...{ left: "32px", top: "21.875px", right: "", bottom: "" }
          }}
        >
          <Theme
            config={{
              wb1Mkl71: themeHandle("wb1Mkl71", undefined, {
                Container: { normal: { width: 1855, height: 271 } }
              })
            }}
          >
            <Card width={350} height={130} viewClass="wb1Mkl71">
              <ChildPadComponent2 width={350} height={130} />
            </Card>
          </Theme>
        </div>
      </div>
    );
  }
}
