import Typewriter from './Typewriter.vue';

export default {
  install: Vue => {
    Vue.component(Typewriter.name, Typewriter);
  }
};
