/**
 * Created by liguoxin on 2017/3/14.
 * @flow
 */
import type { RegisterResult, } from '@lugia/lugiax-core';
import React from 'react';

declare module '@lugia/devtools-conversion' {
  declare type HeaderType = {
    packages: string,
    styledComponentCode: string
  };
}
