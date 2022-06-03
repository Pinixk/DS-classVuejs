<template>
  <h1>form - radio</h1>
  <label for="one">One</label>
  <input type="radio" name="radio" id="one" value="one" v-model="picked"/><br />
  <label for="two">Two</label>
  <input type="radio" name="radio" id="two" value="two" v-model="picked"/><br /><br />
  <!-- radio에서 value값은 v-model에 선택되었을 때 활용됨 -->
  <span>Picked: {{ picked }}</span>
</template>

<script>
export default {
  data() {
    return {
      picked: "one", // 라디오는 한 개만 선택되기 때문에 문자열로 표기
    };
  },
};
</script>
   
<style>
</style>