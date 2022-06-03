<template>
  <h1>02 선언적 렌더링</h1>
  {{ message }}                 <!-- <a>Vue3 Programming</a> -->
  <h3 v-text="message"></h3>    <!-- <a>Vue3 Programming</a> -->
  <h3 v-html="message"></h3>    <!-- Vue3 Programming -->
</template>

<script>
export default {
  data() {
    return { message: "<a>Vue3 Programming</a>" };
  }
};
</script>

<style></style>
