import React from 'react';
import styled from 'styled-components';
import { Theme } from '@lugia/lugia-web';
import { Button } from '@lugia/lugia-web';
import { themeHandle } from '@lugia/lugia-web/dist/common/lugiadCore';
import hello from '../models/hello';
export default class Page extends React.Component {
  componentDidMount() {
    hello.mutations.load({ eventName: 'componentDidMount' });
  }
  componentWillUnmount() {
    hello.mutations.load({ eventName: 'componentWillUnmount' });
  }
  render() {
    return (
      <div
        style={{
          width: '1920px',
          height: '1080px',
          zIndex: '4000',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 38 + 'px',
            height: 35 + 'px',
            zIndex: '0',
            left: 603 + 'px',
            top: 448 + 'px',
          }}
        >
          <Theme
            config={{
              wbZbwA72: themeHandle('wbZbwA72', undefined, {
                Container: { normal: { background: { color: 'yellow' } } },
              }),
            }}
          >
            <Button viewClass="wbZbwA72" />
          </Theme>
        </div>
      </div>
    );
  }
}
