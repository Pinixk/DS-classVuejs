<template>
  <h1>check box</h1>
  <form action="">
    <p>Message is {{ msg }}</p>
    <input placeholder="edit me" v-model="msg" />
    <br />
    <span>Multiline message : </span>
    <p style="white-space: pre-line">{{ multiline }}</p>
    <textarea v-model="multiline" cols="30" rows="10"></textarea>
    <br />
    <label for="checkbox">동의 유무{{ state }}</label>
    <input type="checkbox" id="checkbox" v-model="checked" v-on:change="checkIt">
    <br>
    <label for="checkbox">바나나</label>
    <input type="checkbox" id="banana" value="banana" v-model="selFruit" />
    <label for="checkbox">사과</label>
    <input type="checkbox" id="apple" value="apple" v-model="selFruit" />
    <label for="checkbox">복숭아</label>
    <input type="checkbox" id="peach" value="peach" v-model="selFruit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      msg: "누구인가?",
      multiline: "누가 기침소리를 내었어!",
      checked: true,
      state: "",
      selFruit: ["banana","peach"],
    };
  },
  methods: {
    checkIt() {
      this.state = this.checked ? "O" : "X";
    },
  },
};
</script>

<style>
</style>