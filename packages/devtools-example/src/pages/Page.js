import React from "react";
import styled from "styled-components";
import { Theme } from "@lugia/lugia-web";
import { Card } from "@lugia/lugia-web";
import { BasicElements } from "@lugia/lugia-web";
import { Label } from "@lugia/lugia-web";
import { Icon } from "@lugia/lugia-web";
import { Tabs } from "@lugia/lugia-web";
import { Pagination } from "@lugia/lugia-web";
import LugiadCore from "@lugia/lugiad-core";
import image0 from "../totop.png";
import image1 from "../vertical-align-botto.png";
import image2 from "../vertical-align-botto.png";
import image3 from "../vertical-align-botto.png";
import { DesignResponsive } from "@lugia/lugia-web";
const ResponsiveContext = DesignResponsive.ResponsiveContext;
const { themeHandle } = LugiadCore;
class ChildPadComponent0 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 91.83673469387756 + "%",
            height: 8.16326530612245 + "%",
            zIndex: "0",
            ...{
              left: "4.219240306999631%",
              top: "4.0957785578924%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbGmRn0: themeHandle(
                "wbGmRn0",
                undefined,
                {
                  Container: { normal: { height: 32, width: 540 } },
                  ContentBlock: { normal: { background: "none" } },
                  TabHeader: {
                    DefaultTabPan: {
                      normal: {
                        color: "#737b89",
                        font: {
                          family: "",
                          size: 14,
                          style: "normal",
                          weight: "normal"
                        },
                        height: 28,
                        padding: { bottom: "", left: "", right: "", top: "" },
                        width: 132
                      }
                    },
                    SelectTabPan: {
                      normal: {
                        color: "#0052db",
                        font: {
                          family: "",
                          size: 14,
                          style: "normal",
                          weight: "normal"
                        }
                      }
                    }
                  },
                  WindowContainer: {
                    normal: {
                      background: { color: "#F0F2F5" },
                      padding: { bottom: "2", left: "2", right: "", top: "2" }
                    }
                  }
                },
                true
              )
            }}
          >
            <Tabs
              viewClass="wbGmRn0"
              data={[
                {
                  content: "content",
                  icon: "icon",
                  key: "1",
                  suffixIcon: "suffixIcon",
                  title: "待办事项"
                },
                {
                  content: "content",
                  icon: "icon",
                  key: "2",
                  suffixIcon: "suffixIcon",
                  title: "消息通知"
                },
                {
                  content: "content",
                  icon: "icon",
                  key: "3",
                  suffixIcon: "suffixIcon",
                  title: "我的收藏"
                },
                {
                  content: "content",
                  icon: "icon",
                  key: "4",
                  suffixIcon: "suffixIcon",
                  title: "资源下载"
                }
              ]}
              defaultActivityValue=""
              forceRender=""
              pagedType={`single`}
              showAddBtn=""
              showDeleteBtn=""
              tabPosition={`top`}
              tabType={`window`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 76.0204081632653 + "%",
            height: 9.183673469387756 + "%",
            zIndex: "1",
            ...{
              left: "3.4899906944841392%",
              top: "90.05398352742134%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbR%wn0": themeHandle(
                "wbR%wn0",
                undefined,
                {
                  Container: {
                    normal: {
                      margin: { bottom: "0", left: "0", right: "0", top: "0" },
                      padding: { bottom: "0", left: "0", right: "0", top: "0" }
                    }
                  },
                  MorePageIcon: {
                    normal: {
                      color: "#7ed321",
                      font: {
                        family: "",
                        size: "",
                        style: "normal",
                        weight: "normal"
                      }
                    }
                  },
                  PaginationArrowIconContainer: {
                    normal: {
                      background: "none",
                      border: "none",
                      boxShadow: {
                        blur: "",
                        color: "",
                        spread: "",
                        type: "outset",
                        x: "",
                        y: ""
                      },
                      height: 20,
                      padding: { bottom: "0", left: "0", right: "0", top: "0" },
                      width: 20
                    }
                  },
                  PaginationContainer: {
                    normal: {
                      background: "none",
                      padding: { bottom: "0", left: "0", right: "0", top: "0" }
                    }
                  },
                  PaginationInnerText: {
                    hover: {
                      color: "#2d7cff",
                      font: {
                        family: "",
                        size: 14,
                        style: "normal",
                        weight: "normal"
                      }
                    },
                    normal: {
                      color: "#0052db",
                      font: {
                        family: "",
                        size: 14,
                        style: "normal",
                        weight: "normal"
                      }
                    }
                  },
                  PaginationListItem: {
                    normal: {
                      background: "none",
                      border: "none",
                      lineHeight: ""
                    }
                  },
                  PaginationPageSizeSelect: {
                    InputTag: {
                      SwitchIcon: {
                        normal: {
                          background: "none",
                          color: "#e43030",
                          font: {
                            family: "",
                            size: "",
                            style: "normal",
                            weight: "normal"
                          }
                        }
                      }
                    }
                  },
                  PaginationQuickJumpText: {
                    normal: {
                      color: "#f22e2e",
                      font: {
                        family: "",
                        size: "",
                        style: "normal",
                        weight: "normal"
                      }
                    }
                  },
                  PaginationTotalContainer: {
                    normal: {
                      margin: { bottom: "", left: "180", right: "", top: "" }
                    }
                  },
                  PaginationTotalText: {
                    normal: {
                      color: "#737b89",
                      font: {
                        family: "",
                        size: 14,
                        style: "normal",
                        weight: "normal"
                      }
                    }
                  },
                  QuickJumpInput: {
                    Container: {
                      normal: {
                        margin: {
                          bottom: "",
                          left: "10",
                          right: "10",
                          top: ""
                        },
                        padding: { bottom: "", left: "", right: "", top: "0" },
                        width: 0
                      }
                    },
                    Input: {
                      normal: {
                        background: { color: "#ffffff" },
                        color: "#ef0404",
                        font: {
                          family: "",
                          size: 14,
                          style: "normal",
                          weight: "normal"
                        },
                        height: 30,
                        width: 50
                      }
                    },
                    PaginationText: {
                      normal: {
                        color: "#ff0000",
                        font: {
                          family: "",
                          size: 14,
                          style: "normal",
                          weight: "normal"
                        }
                      }
                    }
                  },
                  SelectedPaginationListItem: {
                    normal: {
                      background: "none",
                      border: "none",
                      height: 20,
                      padding: { bottom: "0", left: "", right: "", top: "" },
                      width: 20
                    }
                  },
                  unSelectedPaginationInnerText: {
                    normal: {
                      color: "",
                      font: {
                        family: "",
                        size: 14,
                        style: "normal",
                        weight: "normal"
                      }
                    }
                  },
                  unSelectedPaginationListItem: {
                    normal: {
                      background: "none",
                      border: "none",
                      height: 20,
                      width: 20
                    }
                  }
                },
                true
              )
            }}
          >
            <Pagination
              viewClass="wbR%wn0"
              current={1}
              defaultCurrent={1}
              defaultPageSize={10}
              hideOnSinglePage=""
              isShowTotalData={true}
              pageSize={6}
              pageSizeOptions={["10", "20", "30", "50"]}
              showQuickJumper=""
              showSizeChanger=""
              simple=""
              total={30}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 26.190476190476193 + "%",
            height: 5.1020408163265305 + "%",
            zIndex: "2",
            ...{
              left: "4.218355640704083%",
              top: "19.082734952086696%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb^AYL41": themeHandle(
                "wb^AYL41",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
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
              viewClass="wb^AYL41"
              prefix={`*`}
              showPrefix=""
              text={`这里是待办事项显示通知`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 91.83673469387756 + "%",
            height: 0.25510204081632654 + "%",
            zIndex: "3",
            ...{
              left: "4.073911986441164%",
              top: "15.828413894647245%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb^Ye$0": themeHandle(
                "wb^Ye$0",
                undefined,
                {
                  Container: {
                    normal: {
                      background: { color: "#E6EAEF" },
                      height: 1,
                      width: 540
                    }
                  }
                },
                true
              )
            }}
          >
            <BasicElements viewClass="wb^Ye$0" shape={`square`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 12.244897959183673 + "%",
            height: 4.081632653061225 + "%",
            zIndex: "4",
            ...{
              left: "83.72582698638685%",
              top: "19.869393227731724%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbcE4)g0": themeHandle(
                "wbcE4)g0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
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
              viewClass="wbcE4)g0"
              prefix={`*`}
              showPrefix=""
              text={`2019-11-15`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 91.83673469387756 + "%",
            height: 0.25510204081632654 + "%",
            zIndex: "5",
            ...{
              left: "4.073911986441164%",
              top: "27.75539699108334%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbc36Mc0: themeHandle(
                "wbc36Mc0",
                undefined,
                {
                  Container: {
                    normal: {
                      background: { color: "#E6EAEF" },
                      height: 1,
                      width: 540
                    }
                  }
                },
                true
              )
            }}
          >
            <BasicElements viewClass="wbc36Mc0" shape={`square`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 26.190476190476193 + "%",
            height: 5.1020408163265305 + "%",
            zIndex: "6",
            ...{
              left: "4.203334086576496%",
              top: "31.262294326558788%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcp6pc0: themeHandle(
                "wbcp6pc0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
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
              viewClass="wbcp6pc0"
              prefix={`*`}
              showPrefix=""
              text={`这里是待办事项显示通知`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 12.244897959183673 + "%",
            height: 4.081632653061225 + "%",
            zIndex: "7",
            ...{
              left: "83.72582698638685%",
              top: "32.04895260220382%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbc)j*x0": themeHandle(
                "wbc)j*x0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
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
              viewClass="wbc)j*x0"
              prefix={`*`}
              showPrefix=""
              text={`2019-11-15`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 12.244897959183673 + "%",
            height: 4.081632653061225 + "%",
            zIndex: "8",
            ...{
              left: "83.72582698638685%",
              top: "44.3310506059189%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcsYmQ0: themeHandle(
                "wbcsYmQ0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
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
              viewClass="wbcsYmQ0"
              prefix={`*`}
              showPrefix=""
              text={`2019-11-15`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 26.190476190476193 + "%",
            height: 5.1020408163265305 + "%",
            zIndex: "9",
            ...{
              left: "4.203334086576496%",
              top: "43.636799937087694%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbchs%$0": themeHandle(
                "wbchs%$0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
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
              viewClass="wbchs%$0"
              prefix={`*`}
              showPrefix=""
              text={`这里是待办事项显示通知`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 91.83673469387756 + "%",
            height: 0.25510204081632654 + "%",
            zIndex: "10",
            ...{
              left: "4.073911986441164%",
              top: "39.91186045084032%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbcn[n@0": themeHandle(
                "wbcn[n@0",
                undefined,
                {
                  Container: {
                    normal: {
                      background: { color: "#E6EAEF" },
                      height: 1,
                      width: 540
                    }
                  }
                },
                true
              )
            }}
          >
            <BasicElements viewClass="wbcn[n@0" shape={`square`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 12.244897959183673 + "%",
            height: 4.081632653061225 + "%",
            zIndex: "11",
            ...{
              left: "83.72582698638685%",
              top: "56.381196077330564%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbc#Wj*0": themeHandle(
                "wbc#Wj*0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
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
              viewClass="wbc#Wj*0"
              prefix={`*`}
              showPrefix=""
              text={`2019-11-15`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 26.190476190476193 + "%",
            height: 5.1020408163265305 + "%",
            zIndex: "12",
            ...{
              left: "4.203334086576496%",
              top: "55.68694540849937%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbc0KmD0: themeHandle(
                "wbc0KmD0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
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
              viewClass="wbc0KmD0"
              prefix={`*`}
              showPrefix=""
              text={`这里是待办事项显示通知`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 91.83673469387756 + "%",
            height: 0.25510204081632654 + "%",
            zIndex: "13",
            ...{
              left: "4.073911986441164%",
              top: "52.17283405515805%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbctG@T0": themeHandle(
                "wbctG@T0",
                undefined,
                {
                  Container: {
                    normal: {
                      background: { color: "#E6EAEF" },
                      height: 1,
                      width: 540
                    }
                  }
                },
                true
              )
            }}
          >
            <BasicElements viewClass="wbctG@T0" shape={`square`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 12.244897959183673 + "%",
            height: 4.081632653061225 + "%",
            zIndex: "14",
            ...{
              left: "83.72582698638685%",
              top: "68.39818848697719%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbcTy^I0": themeHandle(
                "wbcTy^I0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
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
              viewClass="wbcTy^I0"
              prefix={`*`}
              showPrefix=""
              text={`2019-11-15`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 26.190476190476193 + "%",
            height: 5.1020408163265305 + "%",
            zIndex: "15",
            ...{
              left: "4.203334086576496%",
              top: "68.35804561511102%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcblSP0: themeHandle(
                "wbcblSP0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
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
              viewClass="wbcblSP0"
              prefix={`*`}
              showPrefix=""
              text={`这里是待办事项显示通知`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 91.83673469387756 + "%",
            height: 0.25510204081632654 + "%",
            zIndex: "16",
            ...{
              left: "4.073911986441164%",
              top: "64.42227799595747%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbc7l4&0": themeHandle(
                "wbc7l4&0",
                undefined,
                {
                  Container: {
                    normal: {
                      background: { color: "#E6EAEF" },
                      height: 1,
                      width: 540
                    }
                  }
                },
                true
              )
            }}
          >
            <BasicElements viewClass="wbc7l4&0" shape={`square`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 91.83673469387756 + "%",
            height: 0.25510204081632654 + "%",
            zIndex: "17",
            ...{
              left: "4.073911986441164%",
              top: "76.66019227323856%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbc!nwG0": themeHandle(
                "wbc!nwG0",
                undefined,
                {
                  Container: {
                    normal: {
                      background: { color: "#E6EAEF" },
                      borderRadius: {
                        bottomLeft: 0,
                        bottomRight: 0,
                        topLeft: 0,
                        topRight: 0
                      },
                      height: 1,
                      width: 540
                    }
                  }
                },
                true
              )
            }}
          >
            <BasicElements viewClass="wbc!nwG0" shape={`square`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 26.190476190476193 + "%",
            height: 5.1020408163265305 + "%",
            zIndex: "18",
            ...{
              left: "4.203334086576496%",
              top: "80.17430362657998%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbc4bXd0: themeHandle(
                "wbc4bXd0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
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
              viewClass="wbc4bXd0"
              prefix={`*`}
              showPrefix=""
              text={`这里是待办事项显示通知`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 12.244897959183673 + "%",
            height: 4.081632653061225 + "%",
            zIndex: "19",
            ...{
              left: "83.72582698638685%",
              top: "80.86855429541109%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcW2MX0: themeHandle(
                "wbcW2MX0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
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
              viewClass="wbcW2MX0"
              prefix={`*`}
              showPrefix=""
              text={`2019-11-15`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 91.83673469387756 + "%",
            height: 0.25510204081632654 + "%",
            zIndex: "20",
            ...{
              left: "4.073911986441164%",
              top: "88.80422214758498%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcG$9I0: themeHandle(
                "wbcG$9I0",
                undefined,
                {
                  Container: {
                    normal: {
                      background: { color: "#E6EAEF" },
                      height: 1,
                      width: 540
                    }
                  }
                },
                true
              )
            }}
          >
            <BasicElements viewClass="wbcG$9I0" shape={`square`} />
          </Theme>
        </div>
      </React.Fragment>
    );
  }
}
class ChildPadComponent1 extends React.Component {
  render() {
    return <React.Fragment></React.Fragment>;
  }
}
class ChildPadComponent2 extends React.Component {
  render() {
    return <React.Fragment></React.Fragment>;
  }
}
class ChildPadComponent3 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 0.16778523489932887 + "%",
            height: 26.666666666666668 + "%",
            zIndex: "0",
            ...{
              left: "24.81166987300244%",
              top: "36.092216646365074%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbcD%nu1": themeHandle(
                "wbcD%nu1",
                undefined,
                {
                  Container: {
                    normal: {
                      background: { color: "#E6EAEF" },
                      borderRadius: {
                        bottomLeft: 1,
                        bottomRight: 1,
                        topLeft: 1,
                        topRight: 1
                      },
                      height: 32,
                      width: 2
                    }
                  }
                },
                true
              )
            }}
          >
            <BasicElements viewClass="wbcD%nu1" shape={`square`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 0.33557046979865773 + "%",
            height: 11.666666666666666 + "%",
            zIndex: "1",
            ...{
              left: "2.0141665699707%",
              top: "11.66935419818003%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcyvuZ2: themeHandle(
                "wbcyvuZ2",
                undefined,
                {
                  Container: {
                    normal: {
                      background: { color: "#0052DB" },
                      borderRadius: {
                        bottomLeft: 1,
                        bottomRight: 1,
                        topLeft: 1,
                        topRight: 1
                      },
                      height: 14,
                      width: 4
                    }
                  }
                },
                true
              )
            }}
          >
            <BasicElements viewClass="wbcyvuZ2" shape={`square`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 7.2147651006711415 + "%",
            height: 28.333333333333332 + "%",
            zIndex: "2",
            ...{
              left: "8.21513819167902%",
              top: "34.994818128664676%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcV2tZ3: themeHandle(
                "wbcV2tZ3",
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
                      color: "#3680ff",
                      font: {
                        family: "",
                        size: 28,
                        style: "normal",
                        weight: "bold"
                      }
                    }
                  }
                },
                true
              )
            }}
          >
            <Label
              viewClass="wbcV2tZ3"
              prefix={`*`}
              showPrefix=""
              text={`666.88`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 4.697986577181208 + "%",
            height: 16.666666666666664 + "%",
            zIndex: "3",
            ...{
              left: "3.008010212044759%",
              top: "9.078147639196127%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcde154: themeHandle(
                "wbcde154",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
                      font: {
                        family: "",
                        size: 14,
                        style: "normal",
                        weight: "bold"
                      }
                    }
                  }
                },
                true
              )
            }}
          >
            <Label
              viewClass="wbcde154"
              prefix={`*`}
              showPrefix=""
              text={`期末规模`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 1.006711409395973 + "%",
            height: 14.166666666666666 + "%",
            zIndex: "4",
            ...{
              left: "15.902173889104626%",
              top: "42.66797830182483%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbc^M!15": themeHandle(
                "wbc^M!15",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#3680ff",
                      font: {
                        family: "",
                        size: 12,
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
              viewClass="wbc^M!15"
              prefix={`*`}
              showPrefix=""
              text={`亿`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 5.033557046979865 + "%",
            height: 14.166666666666666 + "%",
            zIndex: "5",
            ...{
              left: "7.51603304626517%",
              top: "79.97211376448826%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbcrQi)6": themeHandle(
                "wbcrQi)6",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#737b89",
                      font: {
                        family: "",
                        size: 12,
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
              viewClass="wbcrQi)6"
              prefix={`*`}
              showPrefix=""
              text={`较年初波动`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 2.684563758389262 + "%",
            height: 11.666666666666666 + "%",
            zIndex: "6",
            ...{
              left: "15.085654275918847%",
              top: "79.97211376448826%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbc5niF7: themeHandle(
                "wbc5niF7",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#fc2f0f",
                      font: {
                        family: "",
                        size: 12,
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
              viewClass="wbc5niF7"
              prefix={`*`}
              showPrefix=""
              text={`+15%`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 1.174496644295302 + "%",
            height: 11.666666666666666 + "%",
            zIndex: "7",
            ...{
              left: "13.373432127165788%",
              top: "79.5554470978216%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbcHG)d8": themeHandle(
                "wbcHG)d8",
                undefined,
                {
                  Icon: {
                    normal: {
                      color: "#fc2f0f",
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
            <Icon
              viewClass="wbcHG)d8"
              disabled=""
              iconClass={`lugia-icon-financial_upload`}
              src={image0}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 2.7684563758389262 + "%",
            height: 11.666666666666666 + "%",
            zIndex: "8",
            ...{
              left: "40.10495700205764%",
              top: "79.97211376448826%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbcq#Hm9": themeHandle(
                "wbcq#Hm9",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#59d4a5",
                      font: {
                        family: "",
                        size: 12,
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
              viewClass="wbcq#Hm9"
              prefix={`*`}
              showPrefix=""
              text={`+15%`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 1.174496644295302 + "%",
            height: 11.666666666666666 + "%",
            zIndex: "9",
            ...{
              left: "38.39273485330458%",
              top: "79.5554470978216%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbcwz]w10": themeHandle(
                "wbcwz]w10",
                undefined,
                {
                  Icon: {
                    normal: {
                      color: "#59d4a5",
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
            <Icon
              viewClass="wbcwz]w10"
              disabled=""
              iconClass={`lugia-icon-financial_upload`}
              src={image1}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 5.033557046979865 + "%",
            height: 14.166666666666666 + "%",
            zIndex: "10",
            ...{
              left: "32.53533577240395%",
              top: "79.97211376448826%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbck8qD11: themeHandle(
                "wbck8qD11",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#737b89",
                      font: {
                        family: "",
                        size: 12,
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
              viewClass="wbck8qD11"
              prefix={`*`}
              showPrefix=""
              text={`较年初波动`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 7.2147651006711415 + "%",
            height: 28.333333333333332 + "%",
            zIndex: "11",
            ...{
              left: "33.234440917817786%",
              top: "34.994818128664676%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcpmQn12: themeHandle(
                "wbcpmQn12",
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
                      color: "#3680ff",
                      font: {
                        family: "",
                        size: 28,
                        style: "normal",
                        weight: "bold"
                      }
                    }
                  }
                },
                true
              )
            }}
          >
            <Label
              viewClass="wbcpmQn12"
              prefix={`*`}
              showPrefix=""
              text={`666.88`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 1.006711409395973 + "%",
            height: 14.166666666666666 + "%",
            zIndex: "12",
            ...{
              left: "40.92147661524342%",
              top: "42.66797830182483%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbc(^g813": themeHandle(
                "wbc(^g813",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#3680ff",
                      font: {
                        family: "",
                        size: 12,
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
              viewClass="wbc(^g813"
              prefix={`*`}
              showPrefix=""
              text={`亿`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 4.697986577181208 + "%",
            height: 16.666666666666664 + "%",
            zIndex: "13",
            ...{
              left: "28.02731293818354%",
              top: "9.078147639196127%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbceBeh14: themeHandle(
                "wbceBeh14",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
                      font: {
                        family: "",
                        size: 14,
                        style: "normal",
                        weight: "bold"
                      }
                    }
                  }
                },
                true
              )
            }}
          >
            <Label
              viewClass="wbceBeh14"
              prefix={`*`}
              showPrefix=""
              text={`浮动盈亏`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 0.33557046979865773 + "%",
            height: 11.666666666666666 + "%",
            zIndex: "14",
            ...{
              left: "27.03346929610948%",
              top: "11.66935419818003%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbcq@e415": themeHandle(
                "wbcq@e415",
                undefined,
                {
                  Container: {
                    normal: {
                      background: { color: "#0052DB" },
                      borderRadius: {
                        bottomLeft: 1,
                        bottomRight: 1,
                        topLeft: 1,
                        topRight: 1
                      },
                      height: 14,
                      width: 4
                    }
                  }
                },
                true
              )
            }}
          >
            <BasicElements viewClass="wbcq@e415" shape={`square`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 0.16778523489932887 + "%",
            height: 26.666666666666668 + "%",
            zIndex: "15",
            ...{
              left: "49.83097259914132%",
              top: "36.092216646365074%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcehIc16: themeHandle(
                "wbcehIc16",
                undefined,
                {
                  Container: {
                    normal: {
                      background: { color: "#E6EAEF" },
                      borderRadius: {
                        bottomLeft: 1,
                        bottomRight: 1,
                        topLeft: 1,
                        topRight: 1
                      },
                      height: 32,
                      width: 2
                    }
                  }
                },
                true
              )
            }}
          >
            <BasicElements viewClass="wbcehIc16" shape={`square`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 1.174496644295302 + "%",
            height: 11.666666666666666 + "%",
            zIndex: "16",
            ...{
              left: "63.366052366562464%",
              top: "79.5554470978216%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcJuOI17: themeHandle(
                "wbcJuOI17",
                undefined,
                {
                  Icon: {
                    normal: {
                      color: "#59d4a5",
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
            <Icon
              viewClass="wbcJuOI17"
              disabled=""
              iconClass={`lugia-icon-financial_upload`}
              src={image2}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 2.684563758389262 + "%",
            height: 11.666666666666666 + "%",
            zIndex: "17",
            ...{
              left: "65.07827451531553%",
              top: "79.97211376448826%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcyPPf18: themeHandle(
                "wbcyPPf18",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#59d4a5",
                      font: {
                        family: "",
                        size: 12,
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
              viewClass="wbcyPPf18"
              prefix={`*`}
              showPrefix=""
              text={`+15%`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 5.033557046979865 + "%",
            height: 14.166666666666666 + "%",
            zIndex: "18",
            ...{
              left: "57.50865328566183%",
              top: "79.97211376448826%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbc4(kQ19": themeHandle(
                "wbc4(kQ19",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#737b89",
                      font: {
                        family: "",
                        size: 12,
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
              viewClass="wbc4(kQ19"
              prefix={`*`}
              showPrefix=""
              text={`较年初波动`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 7.130872483221476 + "%",
            height: 28.333333333333332 + "%",
            zIndex: "19",
            ...{
              left: "58.207758431075675%",
              top: "35.773634328041624%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbc^BLq20": themeHandle(
                "wbc^BLq20",
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
                      color: "#3680ff",
                      font: {
                        family: "",
                        size: 28,
                        style: "normal",
                        weight: "bold"
                      }
                    }
                  }
                },
                true
              )
            }}
          >
            <Label
              viewClass="wbc^BLq20"
              prefix={`*`}
              showPrefix=""
              text={`666.88`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 1.006711409395973 + "%",
            height: 14.166666666666666 + "%",
            zIndex: "20",
            ...{
              left: "66.03056745512357%",
              top: "41.10084814454183%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbc7^4121": themeHandle(
                "wbc7^4121",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#3680ff",
                      font: {
                        family: "",
                        size: 12,
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
              viewClass="wbc7^4121"
              prefix={`*`}
              showPrefix=""
              text={`亿`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 4.697986577181208 + "%",
            height: 16.666666666666664 + "%",
            zIndex: "21",
            ...{
              left: "53.000630451441424%",
              top: "9.078147639196127%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcJLqT22: themeHandle(
                "wbcJLqT22",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
                      font: {
                        family: "",
                        size: 14,
                        style: "normal",
                        weight: "bold"
                      }
                    }
                  }
                },
                true
              )
            }}
          >
            <Label
              viewClass="wbcJLqT22"
              prefix={`*`}
              showPrefix=""
              text={`实现收益`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 0.33557046979865773 + "%",
            height: 11.666666666666666 + "%",
            zIndex: "22",
            ...{
              left: "52.00678680936737%",
              top: "11.66935419818003%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbczqGN23: themeHandle(
                "wbczqGN23",
                undefined,
                {
                  Container: {
                    normal: {
                      background: { color: "#0052DB" },
                      borderRadius: {
                        bottomLeft: 1,
                        bottomRight: 1,
                        topLeft: 1,
                        topRight: 1
                      },
                      height: 14,
                      width: 4
                    }
                  }
                },
                true
              )
            }}
          >
            <BasicElements viewClass="wbczqGN23" shape={`square`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 0.16778523489932887 + "%",
            height: 26.666666666666668 + "%",
            zIndex: "23",
            ...{
              left: "74.80365872369262%",
              top: "36.092216646365074%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcZ5yG0: themeHandle(
                "wbcZ5yG0",
                undefined,
                {
                  Container: {
                    normal: {
                      background: { color: "#E6EAEF" },
                      borderRadius: {
                        bottomLeft: 1,
                        bottomRight: 1,
                        topLeft: 1,
                        topRight: 1
                      },
                      height: 32,
                      width: 2
                    }
                  }
                },
                true
              )
            }}
          >
            <BasicElements viewClass="wbcZ5yG0" shape={`square`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 2.7684563758389262 + "%",
            height: 11.666666666666666 + "%",
            zIndex: "24",
            ...{
              left: "90.0177805190591%",
              top: "79.97211376448826%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbcFO!(0": themeHandle(
                "wbcFO!(0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#59d4a5",
                      font: {
                        family: "",
                        size: 12,
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
              viewClass="wbcFO!(0"
              prefix={`*`}
              showPrefix=""
              text={`+15%`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 1.174496644295302 + "%",
            height: 11.666666666666666 + "%",
            zIndex: "25",
            ...{
              left: "88.30555837030603%",
              top: "79.5554470978216%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbc%0rq0": themeHandle(
                "wbc%0rq0",
                undefined,
                {
                  Icon: {
                    normal: {
                      color: "#59d4a5",
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
            <Icon
              viewClass="wbc%0rq0"
              disabled=""
              iconClass={`lugia-icon-financial_upload`}
              src={image3}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 5.033557046979865 + "%",
            height: 14.166666666666666 + "%",
            zIndex: "26",
            ...{
              left: "82.4481592894057%",
              top: "79.97211376448826%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcZuUP0: themeHandle(
                "wbcZuUP0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#737b89",
                      font: {
                        family: "",
                        size: 12,
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
              viewClass="wbcZuUP0"
              prefix={`*`}
              showPrefix=""
              text={`较年初波动`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 2.6006711409395975 + "%",
            height: 28.333333333333332 + "%",
            zIndex: "27",
            ...{
              left: "85.33395330744897%",
              top: "34.994818128664676%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbcBX[V0": themeHandle(
                "wbcBX[V0",
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
                      color: "#3680ff",
                      font: {
                        family: "",
                        size: 28,
                        style: "normal",
                        weight: "bold"
                      }
                    }
                  }
                },
                true
              )
            }}
          >
            <Label
              viewClass="wbcBX[V0"
              prefix={`*`}
              showPrefix=""
              text={`95`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 1.006711409395973 + "%",
            height: 11.666666666666666 + "%",
            zIndex: "28",
            ...{
              left: "88.54768173256019%",
              top: "44.626852760699286%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbc$TsB0: themeHandle(
                "wbc$TsB0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#3680ff",
                      font: {
                        family: "",
                        size: 12,
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
            <Label viewClass="wbc$TsB0" prefix={`*`} showPrefix="" text={`%`} />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 5.87248322147651 + "%",
            height: 16.666666666666664 + "%",
            zIndex: "29",
            ...{
              left: "77.94013645518531%",
              top: "9.078147639196127%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcLzEH0: themeHandle(
                "wbcLzEH0",
                undefined,
                {
                  Container: {
                    normal: {
                      color: "#384254",
                      font: {
                        family: "",
                        size: 14,
                        style: "normal",
                        weight: "bold"
                      }
                    }
                  }
                },
                true
              )
            }}
          >
            <Label
              viewClass="wbcLzEH0"
              prefix={`*`}
              showPrefix=""
              text={`实现收益率`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 0.33557046979865773 + "%",
            height: 11.666666666666666 + "%",
            zIndex: "30",
            ...{
              left: "76.94629281311126%",
              top: "11.66935419818003%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbch*Qy0": themeHandle(
                "wbch*Qy0",
                undefined,
                {
                  Container: {
                    normal: {
                      background: { color: "#0052DB" },
                      borderRadius: {
                        bottomLeft: 1,
                        bottomRight: 1,
                        topLeft: 1,
                        topRight: 1
                      },
                      height: 14,
                      width: 4
                    }
                  }
                },
                true
              )
            }}
          >
            <BasicElements viewClass="wbch*Qy0" shape={`square`} />
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
          height: "808px",
          width: "100%",
          zIndex: "4000",
          position: "relative",
          backgroundColor: "#F5F7Fa"
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 96.12903225806451 + "%",
            height: 14.85148514851485 + "%",
            zIndex: "0",
            ...{
              left: "2.0479539945067873%",
              top: "2.2206610580333503%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbcpYHV0: themeHandle(
                "wbcpYHV0",
                undefined,
                {
                  CardTitle: {
                    normal: {
                      color: "#384254",
                      font: {
                        family: "",
                        size: 14,
                        style: "normal",
                        weight: "normal"
                      },
                      margin: { bottom: "", left: "0", right: "", top: "0" },
                      padding: { bottom: "", left: "8", right: "", top: "15" }
                    }
                  },
                  CardTitleTipLine: {
                    normal: {
                      background: { color: "#0052db" },
                      borderRadius: {
                        bottomLeft: 1,
                        bottomRight: 1,
                        topLeft: 1,
                        topRight: 1
                      },
                      height: 14,
                      margin: { bottom: "", left: "24", right: "", top: "16" },
                      padding: { bottom: "", left: "8", right: "", top: "12" },
                      width: 4
                    }
                  },
                  Container: {
                    normal: {
                      border: "none",
                      borderRadius: {
                        bottomLeft: 2,
                        bottomRight: 2,
                        topLeft: 2,
                        topRight: 2
                      },
                      height: 120,
                      width: 1192
                    }
                  }
                },
                true
              )
            }}
          >
            <Card
              height={130}
              title=""
              type={`simple`}
              width={350}
              viewClass="wbcpYHV0"
            >
              <ChildPadComponent3
                height={130}
                title=""
                type={`simple`}
                width={350}
              />
            </Card>
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 47.41935483870968 + "%",
            height: 48.51485148514851 + "%",
            zIndex: "1",
            ...{
              left: "50.6203336548424%",
              top: "18.834764057118473%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wbcw4]Y0": themeHandle(
                "wbcw4]Y0",
                undefined,
                {
                  CardTitle: {
                    normal: {
                      color: "#384254",
                      font: {
                        family: "",
                        size: 14,
                        style: "normal",
                        weight: "normal"
                      },
                      margin: { bottom: "", left: "0", right: "", top: "0" },
                      padding: { bottom: "", left: "8", right: "", top: "15" }
                    }
                  },
                  CardTitleTipLine: {
                    normal: {
                      background: { color: "#0052db" },
                      borderRadius: {
                        bottomLeft: 1,
                        bottomRight: 1,
                        topLeft: 1,
                        topRight: 1
                      },
                      height: 14,
                      margin: { bottom: "", left: "24", right: "", top: "16" },
                      padding: { bottom: "", left: "8", right: "", top: "12" },
                      width: 4
                    }
                  },
                  Container: {
                    normal: {
                      border: "none",
                      borderRadius: {
                        bottomLeft: 2,
                        bottomRight: 2,
                        topLeft: 2,
                        topRight: 2
                      },
                      height: 392,
                      width: 588
                    }
                  }
                },
                true
              )
            }}
          >
            <Card
              height={130}
              title=""
              type={`simple`}
              width={350}
              viewClass="wbcw4]Y0"
            >
              <ChildPadComponent0
                height={130}
                title=""
                type={`simple`}
                width={350}
              />
            </Card>
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 96.12903225806451 + "%",
            height: 28.71287128712871 + "%",
            zIndex: "2",
            ...{
              left: "1.9162826420892083%",
              top: "69.21302982252907%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbclRYo0: themeHandle(
                "wbclRYo0",
                undefined,
                {
                  CardTitle: {
                    normal: {
                      color: "#384254",
                      font: {
                        family: "",
                        size: 14,
                        style: "normal",
                        weight: "normal"
                      },
                      margin: { bottom: "", left: "0", right: "", top: "0" },
                      padding: { bottom: "", left: "8", right: "", top: "13" }
                    }
                  },
                  CardTitleTipLine: {
                    normal: {
                      background: { color: "#0052db" },
                      borderRadius: {
                        bottomLeft: 1,
                        bottomRight: 1,
                        topLeft: 1,
                        topRight: 1
                      },
                      height: 14,
                      margin: { bottom: "", left: "24", right: "", top: "16" },
                      padding: { bottom: "", left: "8", right: "", top: "12" },
                      width: 4
                    }
                  },
                  Container: {
                    normal: {
                      border: "none",
                      borderRadius: {
                        bottomLeft: 2,
                        bottomRight: 2,
                        topLeft: 2,
                        topRight: 2
                      },
                      height: 232,
                      width: 1192
                    }
                  }
                },
                true
              )
            }}
          >
            <Card
              height={130}
              title={`期末规模`}
              type={`tip`}
              width={350}
              viewClass="wbclRYo0"
            >
              <ChildPadComponent2
                height={130}
                title={`期末规模`}
                type={`tip`}
                width={350}
              />
            </Card>
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 47.41935483870968 + "%",
            height: 48.51485148514851 + "%",
            zIndex: "3",
            ...{
              left: "1.9519165505663307%",
              top: "18.834764057118473%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wb$eew43: themeHandle(
                "wb$eew43",
                undefined,
                {
                  CardTitle: {
                    normal: {
                      color: "#384254",
                      font: {
                        family: "",
                        size: 14,
                        style: "normal",
                        weight: "normal"
                      },
                      margin: { bottom: "", left: "0", right: "", top: "0" },
                      padding: { bottom: "", left: "8", right: "", top: "13" }
                    }
                  },
                  CardTitleTipLine: {
                    normal: {
                      background: { color: "#0052db" },
                      borderRadius: {
                        bottomLeft: 1,
                        bottomRight: 1,
                        topLeft: 1,
                        topRight: 1
                      },
                      height: 14,
                      margin: { bottom: "", left: "24", right: "", top: "16" },
                      padding: { bottom: "", left: "8", right: "", top: "12" },
                      width: 4
                    }
                  },
                  Container: {
                    normal: {
                      border: "none",
                      borderRadius: {
                        bottomLeft: 2,
                        bottomRight: 2,
                        topLeft: 2,
                        topRight: 2
                      },
                      height: 392,
                      width: 588
                    }
                  },
                  SrcAvatar: {
                    normal: {
                      borderRadius: {
                        bottomLeft: 4,
                        bottomRight: 4,
                        topLeft: 4,
                        topRight: 4
                      }
                    }
                  }
                },
                true
              )
            }}
          >
            <Card
              height={130}
              title={`期末规模`}
              type={`tip`}
              width={350}
              viewClass="wb$eew43"
            >
              <ChildPadComponent1
                height={130}
                title={`期末规模`}
                type={`tip`}
                width={350}
              />
            </Card>
          </Theme>
        </div>
      </div>
    );
  }
}
