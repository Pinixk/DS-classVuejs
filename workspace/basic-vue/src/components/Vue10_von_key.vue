<template>
  <h1>v-on key event</h1>
  <!-- <input type="submit" id="send" value="Send" v-on:keyup.enter="send" /> -->
  <input type="submit" id="send" value="Send" v-on="{'keyup.enter':send, click:send}" />
  <!-- <input type="text" v-on:keyup.space="keyPressed($event)"> -->
  <!-- <input type="text" v-on="{'keyup.page-up:keyPressed'($event,'page-up'),'keyup.space:keyPressed'($event,'space')}"> -->
</template>

<script>
export default {
  methods: {
    send() {alert("enter key가 눌러졌습니다.");},
    keyPressed(e,k) {
       if(k) alert(`${k}${e.keyCode} is pressed`)
       else alert(`${e.keyCode} is pressed`)
       }
  },
};
</script>

<style>
</style>