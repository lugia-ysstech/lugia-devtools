import React from "react";import styled from "styled-components";import { Theme } from "@lugia/lugia-web";import { Button } from '@lugia/lugia-web'; import LugiadCore from '@lugia/lugiad-core';     const {themeHandle} = LugiadCore;    export default class Page extends React.Component{
  
      render(){
        return (
            <div style={{height: '1080px', width: '1920px', zIndex: '4000', position: 'relative'}}><div style={{position: 'absolute',width: 4.010416666666667 +  '%',
        height: 2.9629629629629632 +  '%', zIndex: '0', 
         ...{"left":"21.744791666666664%","top":"15.277777777777779%","right":"","bottom":""} }}
        ><Theme config={{'wb0ohu41':themeHandle('wb0ohu41',undefined, {}, true)}}><Button  disabled="" shape={  `default` } type={  `primary` } size={  `default` } text={  `Button` } block="" /></Theme></div><div style={{position: 'absolute',width: 5.416666666666667 +  '%',
        height: 2.9629629629629632 +  '%', zIndex: '1', 
         ...{"left":"11.979166666666668%","top":"30.555555555555557%","right":"","bottom":""} }}
        ><Theme config={{'wbNTVS71':themeHandle('wbNTVS71',undefined, {}, true)}}><Button  disabled="" shape={  `default` } type={  `primary` } plain={ true } size={  `default` } icon={  `lugia-icon-logo_lugia` } text={  `Button` } block="" /></Theme></div></div>
        );
      }  
  }