<template>
  <div style="display: grid; grid-template-columns: auto auto" >
    <div class="grid"><img alt="Vue logo" src="./assets/logo.png" /></div>
    <div class="grid"><Exercise1 /></div>
    <div class="grid"><Exercise2 /></div>
    <div class="grid"><Exercise3 /></div>
    <div class="grid"><Exercise4 /></div>
    <div class="grid"><Exercise5 /></div>
    <div class="grid"><Exercise6 /></div>
    <div class="grid"><Exercise7 /></div>
    <div class="grid"><Exercise8 /></div>
    <div class="grid"><Exercise9 /></div>
    <div class="grid"><Exercise10 /></div>
    <div class="grid"><Exercise11 /></div>
    <div class="grid"><Exercise12 /></div>
    <div class="grid"><Exercise13 /></div>
    <div class="grid"><Exercise14 /></div>
  </div>
</template>

<script>
import Exercise1 from "./components/Vue01_data.vue";
import Exercise2 from "./components/Vue02_declaritive_rendering.vue";
import Exercise3 from "./components/Vue03_vbind.vue";
import Exercise4 from "./components/Vue04_vonce.vue";
import Exercise5 from "./components/Vue05_vshow.vue";
import Exercise6 from "./components/Vue06_vif.vue";
import Exercise7 from "./components/Vue07_vfor.vue";
import Exercise8 from "./components/Vue08_von.vue";
import Exercise9 from "./components/Vue09_event.vue";
import Exercise10 from "./components/Vue10_keyEvent.vue";
import Exercise11 from "./components/Vue11_mouseEvent.vue";
import Exercise12 from "./components/Vue12_capture_self.vue";
import Exercise13 from "./components/Vue13_checkbox.vue";
import Exercise14 from "./components/Vue14_radio.vue";

export default {
  name: "App",
  components: {
    Exercise1,Exercise2,Exercise3,
    Exercise4,Exercise5,Exercise6,
    Exercise7,Exercise8,Exercise9,
    Exercise10,Exercise11,Exercise12,
    Exercise13,Exercise14,
  },
};
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
.grid{
  margin: 1px;
  padding : 40px 0px;
  border: 1px solid
}
</style>
