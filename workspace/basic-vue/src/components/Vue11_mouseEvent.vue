<template>
  <h1>11 v-on mouse event</h1>
  <!-- 키 수식어 -->
  <input type="button" value="click"
    v-on:click.left="mou_left"
    v-on:click.right="mou_right"
    v-on:click.middle="mou_mid"
    v-on:contextmenu="contextmenu"
  />
  <!-- 시스템 키 수식어 -->
  <input type="button" value="onMeta" v-on:click.meta="onMeta" />
  <input type="button" value="onMix" 
    v-on:click.alt="onMix_Alt" 
    v-on:click.ctrl="onMix_Ctrl" 
   />
</template>

<script>
export default {
  methods: {
    mou_left() {console.log("마우스 왼쪽 클릭");},
    mou_right() {console.log("마우스 오른쪽 클릭");},
    mou_mid() {console.log("마우스 휠 클릭");},
    
    contextmenu() {console.log("마우스 오른쪽 클릭만 유효");},
    onMeta() {console.log("왼도우 + 마우스 왼쪽 클릭");},
    onMix_Alt() {console.log("Alt");},
    onMix_Ctrl() {console.log("Ctrl");},
  },
};
</script>

<style>
</style>