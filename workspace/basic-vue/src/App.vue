<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Exercise />
</template>

<script>
// import Exercise from './components/Vue01_data.vue'
// import Exercise from './components/Vue02_declaritive_rendering.vuevue'
// import Exercise from './components/Vue03_vbind.vue'
// import Exercise from './components/Vue04_vonce.vue'
// import Exercise from './components/Vue05_vshow.vue'
// import Exercise from './components/Vue06_vif.vue'
import Exercise from './components/Vue07_vfor.vue'

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
  list-style-type : none;
}
</style>
