import React from 'react';
import styled from 'styled-components';
import { Theme } from '@lugia/lugia-web';
import { Card } from '@lugia/lugia-web';
import { Label } from '@lugia/lugia-web';
import { Input } from '@lugia/lugia-web';
import { NumberInput } from '@lugia/lugia-web';
import { Button } from '@lugia/lugia-web';
import { Table } from '@lugia/lugia-web';
import lugiax, { bindTo, connect, bind } from '@lugia/lugiax';
import LugiadCore from '@lugia/lugiad-core';
import user from '../models/hello';
const { themeHandle, bindHandleEvent, getData } = LugiadCore;
const ConnectTable00 = connect(
  [ user ],
  state => {
    return {
      ...getData(state, 'value', user, 'table'),
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
            position: 'absolute',
            width: 94.60916442048517 + '%',
            height: 78.11816192560175 + '%',
            zIndex: '0',
            ...{
              left: '2.6954177897574128%',
              top: '10.940919037199125%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              'wb&Bnm0': themeHandle(
                'wb&Bnm0',
                undefined,
                { Container: { normal: { width: 1755, height: 357 } } },
                true
              ),
            }}
          >
            <ConnectTable00
              viewClass="wb&Bnm0"
              columns={[
                { title: 'Name', dataIndex: 'name', key: 'name' },
                { title: 'Age', dataIndex: 'age', key: 'age' },
                { title: 'Address', dataIndex: 'address', key: 'address' },
                { title: 'Operations', dataIndex: '', key: 'operations' },
              ]}
              data={[
                { name: 'Jack', age: 28, address: 'some where', key: '1' },
                { name: 'Rose', age: 36, address: 'some where', key: '2' },
                { name: 'Uzi', age: 36, address: 'some where', key: '3' },
                { name: 'ClearLove', age: 36, address: 'some where', key: '4' },
                { name: 'Rookie', age: 36, address: 'some where', key: '5' },
                { name: 'TheShy', age: 36, address: 'some where', key: '6' },
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
            position: 'absolute',
            width: 44.285714285714285 + '%',
            height: 96.96969696969697 + '%',
            zIndex: '0',
            ...{ left: '0%', top: '0%', right: '', bottom: '' },
          }}
        >
          <Theme
            config={{
              wbjY7B0: themeHandle(
                'wbjY7B0',
                undefined,
                { Container: { normal: { width: 155, height: 32 } } },
                true
              ),
            }}
          >
            <Button viewClass="wbjY7B0" text={'查询'} />
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 44.285714285714285 + '%',
            height: 96.96969696969697 + '%',
            zIndex: '1',
            ...{ left: '50%', top: '0%', right: '', bottom: '' },
          }}
        >
          <Theme
            config={{
              wbe2CC1: themeHandle(
                'wbe2CC1',
                undefined,
                { Container: { normal: { width: 155, height: 32 } } },
                true
              ),
            }}
          >
            <Button viewClass="wbe2CC1" text={'重置'} />
          </Theme>
        </div>
      </React.Fragment>
    );
  }
}
const User22 = bindTo(
  user,
  {
    sfzh: 'value',
  },
  {
    onChange: {
      sfzh(e) {
        return bindHandleEvent(e);
      },
    },
  }
)(Input);
const User24 = bindTo(
  user,
  {
    xm: 'value',
  },
  {
    onChange: {
      xm(e) {
        return bindHandleEvent(e);
      },
    },
  }
)(Input);
const User26 = bindTo(
  user,
  {
    age: 'value',
  },
  {
    onChange: {
      age(e) {
        return bindHandleEvent(e);
      },
    },
  }
)(NumberInput);
const User28 = bindTo(
  user,
  {
    sex: 'value',
  },
  {
    onChange: {
      sex(e) {
        return bindHandleEvent(e);
      },
    },
  }
)(NumberInput);
const User210 = bindTo(
  user,
  {
    sex: 'value',
  },
  {
    onChange: {
      sex(e) {
        return bindHandleEvent(e);
      },
    },
  }
)(NumberInput);
const User212 = bindTo(
  user,
  {
    sex: 'value',
  },
  {
    onChange: {
      sex(e) {
        return bindHandleEvent(e);
      },
    },
  }
)(NumberInput);
const User214 = bindTo(
  user,
  {
    sex: 'value',
  },
  {
    onChange: {
      sex(e) {
        return bindHandleEvent(e);
      },
    },
  }
)(NumberInput);
class ChildPadComponent2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            position: 'absolute',
            width: 18.867924528301888 + '%',
            height: 12.177121771217712 + '%',
            zIndex: '0',
            ...{
              right: '5.566037735849057%',
              bottom: '17.066420664206642%',
              left: '',
              top: '',
            },
          }}
        >
          <Theme
            config={{
              wbIKqG71: themeHandle(
                'wbIKqG71',
                undefined,
                { Container: { normal: { width: 350, height: 33 } } },
                true
              ),
            }}
          >
            <Card
              width={350}
              height={130}
              type={'transparent'}
              viewClass="wbIKqG71"
            >
              <ChildPadComponent1
                width={350}
                height={130}
                type={'transparent'}
              />
            </Card>
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 8.679245283018867 + '%',
            height: 8.118081180811808 + '%',
            zIndex: '1',
            ...{
              left: '3.7735849056603774%',
              top: '18.45018450184502%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              'wbU@jV0': themeHandle(
                'wbU@jV0',
                undefined,
                {
                  Container: {
                    normal: {
                      textAlign: 'right',
                      width: 160.49999999999997,
                      height: 22,
                    },
                  },
                },
                true
              ),
            }}
          >
            <Label viewClass="wbU@jV0" text={'身份证号'} />
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 20.539083557951482 + '%',
            height: 11.808118081180812 + '%',
            zIndex: '2',
            ...{
              left: '13.504043126684634%',
              top: '18.45018450184502%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              'wb(S5Q1': themeHandle(
                'wb(S5Q1',
                undefined,
                {
                  Container: {
                    normal: { width: 381.16666666666663, height: 32 },
                  },
                },
                true
              ),
            }}
          >
            <User22 viewClass="wb(S5Q1" disabled={true} />
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 8.62533692722372 + '%',
            height: 8.118081180811808 + '%',
            zIndex: '3',
            ...{
              left: '36.2084456424079%',
              top: '18.45018450184502%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              wbRhjl2: themeHandle(
                'wbRhjl2',
                undefined,
                {
                  Container: {
                    normal: {
                      textAlign: 'right',
                      width: 160.49999999999997,
                      height: 22,
                    },
                  },
                },
                true
              ),
            }}
          >
            <Label viewClass="wbRhjl2" text={'姓名'} />
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 20.539083557951482 + '%',
            height: 11.808118081180812 + '%',
            zIndex: '4',
            ...{
              left: '45.93890386343216%',
              top: '18.45018450184502%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              'wb5a@x3': themeHandle(
                'wb5a@x3',
                undefined,
                {
                  Container: {
                    normal: { width: 381.16666666666663, height: 32 },
                  },
                },
                true
              ),
            }}
          >
            <User24 viewClass="wb5a@x3" disabled={true} />
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 8.679245283018867 + '%',
            height: 8.118081180811808 + '%',
            zIndex: '5',
            ...{
              left: '68.64330637915543%',
              top: '18.45018450184502%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              'wbLl(34': themeHandle(
                'wbLl(34',
                undefined,
                {
                  Container: {
                    normal: {
                      textAlign: 'right',
                      width: 160.49999999999997,
                      height: 22,
                    },
                  },
                },
                true
              ),
            }}
          >
            <Label viewClass="wbLl(34" text={'年龄'} />
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 20.539083557951482 + '%',
            height: 11.808118081180812 + '%',
            zIndex: '6',
            ...{
              left: '78.37376460017968%',
              top: '18.45018450184502%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              wbwQye5: themeHandle(
                'wbwQye5',
                undefined,
                {
                  Container: {
                    normal: { width: 381.16666666666663, height: 32 },
                  },
                },
                true
              ),
            }}
          >
            <User26 viewClass="wbwQye5" disabled={true} />
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 8.679245283018867 + '%',
            height: 8.118081180811808 + '%',
            zIndex: '7',
            ...{
              left: '3.7735849056603774%',
              top: '39.48339483394834%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              wbt9sb6: themeHandle(
                'wbt9sb6',
                undefined,
                {
                  Container: {
                    normal: {
                      textAlign: 'right',
                      width: 160.49999999999997,
                      height: 22,
                    },
                  },
                },
                true
              ),
            }}
          >
            <Label viewClass="wbt9sb6" text={'性别'} />
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 20.539083557951482 + '%',
            height: 11.808118081180812 + '%',
            zIndex: '8',
            ...{
              left: '13.504043126684634%',
              top: '39.48339483394834%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              'wbzOM&7': themeHandle(
                'wbzOM&7',
                undefined,
                {
                  Container: {
                    normal: { width: 381.16666666666663, height: 32 },
                  },
                },
                true
              ),
            }}
          >
            <User28 viewClass="wbzOM&7" disabled={true} />
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 8.62533692722372 + '%',
            height: 8.118081180811808 + '%',
            zIndex: '9',
            ...{
              left: '36.2084456424079%',
              top: '39.48339483394834%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              wbSux$8: themeHandle(
                'wbSux$8',
                undefined,
                {
                  Container: {
                    normal: {
                      textAlign: 'right',
                      width: 160.49999999999997,
                      height: 22,
                    },
                  },
                },
                true
              ),
            }}
          >
            <Label viewClass="wbSux$8" text={'性别'} />
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 20.539083557951482 + '%',
            height: 11.808118081180812 + '%',
            zIndex: '10',
            ...{
              left: '45.93890386343216%',
              top: '39.48339483394834%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              'wb)k9F9': themeHandle(
                'wb)k9F9',
                undefined,
                {
                  Container: {
                    normal: { width: 381.16666666666663, height: 32 },
                  },
                },
                true
              ),
            }}
          >
            <User210 viewClass="wb)k9F9" disabled={true} />
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 8.679245283018867 + '%',
            height: 8.118081180811808 + '%',
            zIndex: '11',
            ...{
              left: '68.64330637915543%',
              top: '39.48339483394834%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              'wbau*E10': themeHandle(
                'wbau*E10',
                undefined,
                {
                  Container: {
                    normal: {
                      textAlign: 'right',
                      width: 160.49999999999997,
                      height: 22,
                    },
                  },
                },
                true
              ),
            }}
          >
            <Label viewClass="wbau*E10" text={'性别'} />
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 20.539083557951482 + '%',
            height: 11.808118081180812 + '%',
            zIndex: '12',
            ...{
              left: '78.37376460017968%',
              top: '39.48339483394834%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              wbD78T11: themeHandle(
                'wbD78T11',
                undefined,
                {
                  Container: {
                    normal: { width: 381.16666666666663, height: 32 },
                  },
                },
                true
              ),
            }}
          >
            <User212 viewClass="wbD78T11" disabled={true} />
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 8.679245283018867 + '%',
            height: 8.118081180811808 + '%',
            zIndex: '13',
            ...{
              left: '3.7735849056603774%',
              top: '60.51660516605166%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              'wbR5%&12': themeHandle(
                'wbR5%&12',
                undefined,
                {
                  Container: {
                    normal: {
                      textAlign: 'right',
                      width: 160.49999999999997,
                      height: 22,
                    },
                  },
                },
                true
              ),
            }}
          >
            <Label viewClass="wbR5%&12" text={'性别'} />
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 20.539083557951482 + '%',
            height: 11.808118081180812 + '%',
            zIndex: '14',
            ...{
              left: '13.504043126684634%',
              top: '60.51660516605166%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              'wb6#Bv13': themeHandle(
                'wb6#Bv13',
                undefined,
                {
                  Container: {
                    normal: { width: 381.16666666666663, height: 32 },
                  },
                },
                true
              ),
            }}
          >
            <User214 viewClass="wb6#Bv13" disabled={true} />
          </Theme>
        </div>
      </React.Fragment>
    );
  }
}
export default class Page extends React.Component {
  render() {
    return (
      <div style={{ height: '1080px', zIndex: '4000', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            width: 96.61458333333334 + '%',
            height: 42.31481481481482 + '%',
            zIndex: '0',
            ...{
              left: '1.4713541666666667%',
              top: '43.344907407407405%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              wbcgWjF0: themeHandle(
                'wbcgWjF0',
                undefined,
                { Container: { normal: { width: 1855, height: 457 } } },
                true
              ),
            }}
          >
            <Card width={350} height={130} viewClass="wbcgWjF0">
              <ChildPadComponent0 width={350} height={130} />
            </Card>
          </Theme>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 96.61458333333334 + '%',
            height: 25.092592592592595 + '%',
            zIndex: '1',
            ...{
              left: '1.6666666666666667%',
              top: '2.025462962962963%',
              right: '',
              bottom: '',
            },
          }}
        >
          <Theme
            config={{
              wb1Mkl71: themeHandle(
                'wb1Mkl71',
                undefined,
                { Container: { normal: { width: 1855, height: 271 } } },
                true
              ),
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
