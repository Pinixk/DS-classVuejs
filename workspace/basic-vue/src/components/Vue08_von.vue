<template>
  <h1>v-on</h1>
  <!-- <button v-on:click="count++">Add</button> -->
  <!-- <button v-on:click="doThis">Add</button> -->
  <button @click="doThis">Add</button>
  <p>위 버튼을 클릭한 횟수는 {{ count }}</p>

  <input
    type="text"
    name="txt"
    id="txt"
    @mouseout="reverse"
    @mouseenter="reverse"
    v-bind:value="msg"
  />
  <form action="http://127.0.0.1:8080" method="post">
    <!-- ref : 엘리먼트나 자식 컴포넌트에 대한 참조를 등록할 때 사용 -->
    <input type="text" name="name" ref="yourName" />
    <button @click.prevent="isName" type="submit">확인</button>
  </form>
</template>

<script>
export default {
  data() {
    return { count: 0, msg: "Hello Vue3", nameStr: "" };
  },
  methods: {
    doThis() {
      this.count++;
    },
    reverse() {
      this.msg = this.msg.split("").reverse().join("");
    },
    isName() {
      const name = this.$refs.yourName;
      if (name.value === "") {
        alert("name을 입력해주세요");
        name.focus();
        return;
      }
    },
  },
};
</script>

<style>
</style>