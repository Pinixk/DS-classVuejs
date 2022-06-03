<template>
  <h1>form - checkbox binding</h1>
  <label for="single">
    <!-- 단일 checkbox는 체크 여부에 따라 다른 상태값을 설정 -->
    <input
      type="checkbox"
      name=""
      id="single"
      v-model="toggle"
      v-bind:true-value="T"
      v-bind:false-value="F"
    />
    <span>{{ toggle }}</span></label
  >
</template>

<script>
export default {
  data() {
    return {
      toggle: "OFF",
      T: "ON",
      F: "OFF",
    };
  },
};
</script>

<style>
</style>