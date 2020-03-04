/**
 *
 * create by ligx
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';

export default lugiax.register({
  model: 'hello',
  mutations: {
    sync: {
      add() {},
      onChangePage() {},
    },
    async: {
      async query(state) {
        console.info(state.name);
        return state.set('table', []);
      },
    },
  },
  state: {
    total: 100,
    table: [
      {
        dataIndex: '382918374@qq.com',
        key: '李彦斌',
        null: null,
        title: '00031',
        width: 15784902934,
      },
      {
        dataIndex: '31348372812@qq.com',
        key: '张翠霞',
        null: null,
        title: '00032',
        width: 13984782719,
      },
      {
        dataIndex: '18371982837@qq.com',
        key: '李宇萌',
        null: null,
        title: '00033',
        width: 15683791029,
      },
      {
        dataIndex: '123837192834@qq.com',
        key: '张软软',
        null: null,
        title: '00034',
        width: 18732178391,
      },
      {
        dataIndex: '382918374@qq.com',
        key: '李彦斌',
        null: null,
        title: '00031',
        width: 15784902934,
      },
      {
        dataIndex: '31348372812@qq.com',
        key: '张翠霞',
        null: null,
        title: '00032',
        width: 13984782719,
      },
      {
        dataIndex: '18371982837@qq.com',
        key: '李宇萌',
        null: null,
        title: '00033',
        width: 15683791029,
      },
      {
        dataIndex: '123837192834@qq.com',
        key: '张软软',
        null: null,
        title: '00034',
        width: 18732178391,
      },
      {
        dataIndex: '382918374@qq.com',
        key: '李彦斌',
        null: null,
        title: '00031',
        width: 15784902934,
      },
      {
        dataIndex: '31348372812@qq.com',
        key: '张翠霞',
        null: null,
        title: '00032',
        width: 13984782719,
      },
      {
        dataIndex: '18371982837@qq.com',
        key: '李宇萌',
        null: null,
        title: '00033',
        width: 15683791029,
      },
      {
        dataIndex: '123837192834@qq.com',
        key: '张软软',
        null: null,
        title: '00034',
        width: 18732178391,
      },
      {
        dataIndex: '382918374@qq.com',
        key: '李彦斌',
        null: null,
        title: '00031',
        width: 15784902934,
      },
      {
        dataIndex: '31348372812@qq.com',
        key: '张翠霞',
        null: null,
        title: '00032',
        width: 13984782719,
      },
      {
        dataIndex: '18371982837@qq.com',
        key: '李宇萌',
        null: null,
        title: '00033',
        width: 15683791029,
      },
      {
        dataIndex: '123837192834@qq.com',
        key: '张软软',
        null: null,
        title: '00034',
        width: 18732178391,
      },
    ],

    pageSize: 10,
    current: 3,
    totalText: '共计1000条',
  },
});
