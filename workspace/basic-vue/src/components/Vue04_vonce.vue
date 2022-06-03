<template>
  <h1>04 v-once</h1>
  <span v-once v-text="'안 바뀌지롱' + msg"></span><br />
  <span>아니 난 바뀌는데{{msg}}</span><br>
  <input type="text" size="15" v-model="msg">
</template>

<script>
export default {
  data() {
    return {"msg":" v-once이거든" };
  }, 
};
</script>

<style></style>
 