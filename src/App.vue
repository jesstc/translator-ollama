<template>
  <NavBanner />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBanner from './components/NavBanner.vue';

@Options({
  components: {
    NavBanner,
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
