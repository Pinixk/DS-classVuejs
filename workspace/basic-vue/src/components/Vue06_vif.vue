<template>
  <h1>v-if</h1>
  <div v-if="Math.floor(Math.random() * 45) + 1 > 23">번호가 큽니다</div>
  <div v-else>번호가 작습니다</div>
</template>

<script>
export default {};
</script>

<style>
</style>