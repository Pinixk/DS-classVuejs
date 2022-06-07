<template>
  <!-- <div v-bind:class="classCard" v-for="(component, i) in arrList" :key="i">
    <component v-bind:is="component"></component>
  </div> -->
  <div class="vueImg"><img alt="Vue logo" src="./assets/logo.png" /></div>
  <div style="display: grid; grid-template-columns: auto">
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
    <div class="grid"><Exercise15 /></div>
    <div class="grid"><Exercise16 /></div>
    <div class="grid"><Exercise17 /></div>
    <div class="grid"><Exercise18 /></div>
    <div class="grid"><Exercise19 /></div>
    <div class="grid"><Exercise20 /></div>
    <div class="grid"><Exercise21 /></div>
    <div class="grid"><Exercise22 /></div>
    <div class="grid"><Exercise23 /></div>
    <div class="grid"><Exercise24 /></div>

    <!-- <div class="grid"><Footer /></div> -->
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
import Exercise14 from "./components/Vue14_checkbox_bind.vue";
import Exercise15 from "./components/Vue15_radio.vue";
import Exercise16 from "./components/Vue16_radio_bind.vue";
import Exercise17 from "./components/Vue17_select.vue";
import Exercise18 from "./components/Vue18_select_bind_V2.vue";
import Exercise19 from "./components/Vue19_select_bind_V3.vue";
import Exercise20 from "./components/Vue20_V2_V3_ref_reactive.vue";
import Exercise21 from "./components/Vue21_element_join.vue";
import Exercise22 from "./components/Vue22_scriptSetup.vue";
import Exercise23 from "./components/Vue23_vpre.vue";
import Exercise24 from "./components/Vue24_computed.vue";

// import Footer from "./components/Vue_Footer.vue"
export default {
  name: "App",
  components: {
    Exercise1,
    Exercise2,
    Exercise3,
    Exercise4,
    Exercise5,
    Exercise6,
    Exercise7,
    Exercise8,
    Exercise9,
    Exercise10,
    Exercise11,
    Exercise12,
    Exercise13,
    Exercise14,
    Exercise15,
    Exercise16,
    Exercise17,
    Exercise18,
    Exercise19,
    Exercise20,
    Exercise21,
    Exercise22,
    Exercise23,
    Exercise24,
    
    // Footer,
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
  padding: 5px;
  background: rgb(214,230,245);
  border-radius: 20px;
}
.grid {
  margin: 5px;
  padding: 40px;
  border: 1px solid;
  border-radius: 25px;
  background: rgb(255, 255, 255);
}
.vueImg{
  width: auto;
  background:white;
  border: 1px solid;
  border-radius: 25px;
  margin : 5px;
}
</style>
