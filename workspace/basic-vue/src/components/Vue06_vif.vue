<template>
  <h1>06 v-if</h1>
  <div v-if="Math.floor(Math.random() * 45) + 1 > 23">번호가 큽니다</div>
  <div v-else>번호가 작습니다</div>
  <br />

  <div>당신의 학점은</div>
  <input type="text" size="15" v-model="score">
  <div v-if="score >= 90"><h1>A</h1></div>
  <div v-else-if="score >= 80"><h1>B</h1></div>
  <div v-else-if="score >= 70"><h1>C</h1></div>
  <div v-else><h1>F</h1></div>
</template>

<script>
export default {
  data:()=>{
    return {score:0}
  }
};
</script>

<style>
</style>