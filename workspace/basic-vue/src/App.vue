<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Exercise msg="Welcome to Your Vue.js App"/>
</template>

<script>
// import Exercise from './components/Vue01_data.vue'
// import Exercise from './components/Vue02_declaritive_rendering.vuevue'
import Exercise from './components/Vue03_vbind.vue'

export default {
  name: 'App',
  components: {
    Exercise
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
