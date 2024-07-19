<template>
  <NavBanner />
  <div class="flex-col p-4 text-left">
    <h2 class="m-2">Translation Assistant</h2>
    <TranslateSteps />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBanner from './components/NavBanner.vue';
import TranslateSteps from './components/TranslateSteps.vue';

@Options({
  components: {
    NavBanner,
    TranslateSteps,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
