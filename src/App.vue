<template>
  <div id="app">
    <typewriter
      :textColor="'green'"
      :text="'Typewriting Demo!'"
    />
    <typewriter
      :text="'Multiline \n is also supported!'"
      :typeDelay="3000"
    />
  </div>
</template>

<script>
import Typewriter from './components/Typewriter';

export default {
  name: 'App',
  components: {
    Typewriter
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
