import lugiax from '@lugia/lugiax';

const model = 'page3';
const state = {
  counter: 0,
};

export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      addCount(state) {
        const newCounter = state.get('counter') + 1;
        return state.set('counter', newCounter);
      },
      delCount(state) {
        const newCounter = state.get('counter') - 1;
        return state.set('counter', newCounter);
      },
    },
    async: {
      async incrementAsync(state, delay = 1000, { mutations }) {
        await mutations.decrement();
        setTimeout(() => {
          mutations.increment();
        }, delay);
      },
    },
  },
});
