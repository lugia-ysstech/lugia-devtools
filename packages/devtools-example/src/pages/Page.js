import React from "react";
import styled from "styled-components";
import { Theme } from "@lugia/lugia-web";
import { Tree } from "@lugia/lugia-web";
import { Button } from "@lugia/lugia-web";
import LugiadCore from "@lugia/lugiad-core";
const { themeHandle } = LugiadCore;
export default class Page extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "808px",
          width: "1240px",
          zIndex: "4000",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 20.161290322580644 + "%",
            height: 30.94059405940594 + "%",
            zIndex: "0",
            ...{
              left: "35.84229390681006%",
              top: "28.27282728272829%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              "wb*W&A42": themeHandle(
                "wb*W&A42",
                undefined,
                { Container: { normal: {} } },
                true
              )
            }}
          >
            <Tree
              viewClass="wb*W&A42"
              limitCount={999999}
              expandAll={true}
              onlySelectLeaf=""
              valueField={`value`}
              displayField={`text`}
              parentIsHighlight=""
              data={[
                {
                  children: [
                    { text: "二级树节点-1", value: "二级树节点-1" },
                    { text: "一级树节点-2", value: "二级树节点-2" },
                    { text: "一级树节点-3", value: "二级树节点-3" }
                  ],
                  text: "一级树节点",
                  value: "一级树节点"
                }
              ]}
              igronSelectField={`disabled`}
              pathSeparator={`/`}
              searchType={`include`}
              shpale={`default`}
              switchAtEnd=""
              showSwitch={true}
              translateTreeData={true}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 6.290322580645161 + "%",
            height: 3.9603960396039604 + "%",
            zIndex: "1",
            ...{
              left: "24.37275985663083%",
              top: "29.235423542354223%",
              right: "",
              bottom: ""
            }
          }}
        >
          <Theme
            config={{
              wbhoH841: themeHandle(
                "wbhoH841",
                undefined,
                { Container: { normal: { background: "none" } } },
                true
              )
            }}
          >
            <Button
              viewClass="wbhoH841"
              disabled=""
              shape={`default`}
              type={`primary`}
              size={`default`}
              text={`Button`}
              block=""
            />
          </Theme>
        </div>
      </div>
    );
  }
}
