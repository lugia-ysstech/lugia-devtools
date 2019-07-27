/**
 *
 * create by ligx
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';

export default lugiax.register({
  model: 'hello',
  state: {},
  mutations: {
    sync: {
      load(state: any, param: Object) {
        console.info(param);
        return state;
      },
    },
  },
});
