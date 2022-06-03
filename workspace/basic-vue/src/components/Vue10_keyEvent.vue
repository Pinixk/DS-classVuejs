<template>
  <h1>10 v-on key event</h1>
  <!-- <input type="submit" id="send" value="Send" v-on:keyup.enter="send" /> -->
  <input type="submit" id="send" value="Send" v-on="{'keyup.enter':send, click:send}" />
  <input type="text" size="10" v-on:keyup="keyPressed1($event)">
  <input type="text" size="10" v-on:keyup.page-down='keyPressed2($event,"Page Down")'>
</template>

<script>
export default {
  methods: {
    send() {console.log("Enter key is pressed");},
    keyPressed1(e) {console.log(String.fromCharCode(e.keyCode)+' is pressed')},
    keyPressed2(e, caption){console.log(caption+"("+(e.keyCode)+') is pressed')}
  },
};
</script>

<style>
</style>