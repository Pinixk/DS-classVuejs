<template>
  <h1>v-on mouse event</h1>
  <input type="button" value="click"
    v-on:click.left="mou_left"
    v-on:click.right="mou_right"
    v-on:click.middle="mou_mid"
    v-on:contextmenu="contextmenu"
  />
  <input type="button" value="onMeta" v-on:click.meta="onMeta" />
  <input type="button" value="onAlt" v-on:click.alt="onAlt" />
  <input type="button" value="onCtrl" v-on:click.ctrl="onCtrl" />
</template>

<script>
export default {
  methods: {
    mou_left() {
      console.log("마우스 왼쪽 클릭");
    },
    mou_right() {
      console.log("마우스 오른쪽 클릭");
    },
    mou_mid() {
      console.log("마우스 휠 클릭");
    },
    contextmenu() {
      console.log("마우스 오른쪽 클릭만 유효");
    },
    onMeta() {
      console.log("왼도우 + 마우스 왼쪽 클릭");
    },
    onAlt() {
      console.log("Alt + 마우스 왼쪽 클릭");
    },
    onCtrl() {
      console.log("Ctrl + 마우스 왼쪽 클릭");
    },
  },
};
</script>

<style>
</style>