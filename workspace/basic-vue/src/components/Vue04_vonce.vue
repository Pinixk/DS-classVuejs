<template>
  <h1>v-once</h1>
  <span v-once v-text="'다시는 변경되지 않습니다' + msg"></span><br />
  <span>변경이 잘 됩니다.{{msg}}</span><br>
  <input type="text" v-model="msg">
</template>

<script>

const data = { msg: "v-once 이기 때문이다" };
export default {
  data() {
    return data;
  }, 
};
</script>

<style></style>
 