import React from "react";
import styled from "styled-components";
import lugiax, { bindTo, connect, bind } from "@lugia/lugiax";
import { deepMerge } from "@lugia/object-utils";
import { Theme, DesignResponsive } from "@lugia/lugia-web";
import { Avatar } from "@lugia/lugia-web";
const getData = (state, propsName, modelName, fieldName) => {
  if (!modelName) {
    return {};
  }
  const paths = fieldName.split(".");
  const data = modelName.getState().getIn(paths);
  return {
    [propsName]:
      typeof data !== "object"
        ? data
        : data
        ? data.toJS
          ? data.toJS()
          : data
        : null
  };
};
const ResponsiveContext = DesignResponsive.ResponsiveContext;
function bindHandleEvent(e) {
  if (!e) {
    return;
  }

  if (e.newValue || e.newValue === 0) {
    return e.newValue;
  }

  if (e.value || e.value === 0) {
    return e.value;
  }

  if (e.target && (e.target.value || e.target.value === 0)) {
    return e.target.value;
  }
}

function themeHandle(id, context, dTh) {
  if (context) {
    return context.getLayout(id).theme || {};
  }
  return dTh || {};
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
            width: 640 + "px",
            height: 427 + "px",
            zIndex: "0",
            left: 533 + "px",
            top: 436 + "px"
          }}
        >
          <Theme
            config={{ "wb(Aqu71": themeHandle("wb(Aqu71", undefined, {}) }}
          >
            <Avatar
              icon={`lugia-icon-financial_user`}
              name={`Lugia`}
              shape={`circle`}
              size={`default`}
              src={`http:/9f2f070828381f30cfb1ff8e74179c0c6e06f00c.jpeg`}
              type={`img`}
            />
          </Theme>
        </div>
      </div>
    );
  }
}
