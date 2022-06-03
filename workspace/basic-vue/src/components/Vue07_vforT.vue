<template>
  <h1>07 v-for</h1>
  Which of the following cities is your favourite?
  <ul>
    <li v-for="(item, idx) in list" :key="idx">{{ idx + 1 }}. {{ item }}</li>
  </ul>

  <span v-for="(dan, i) in dans" :key="i">
    <span v-for="(num, j) in nums" :key="j">
      {{ dan }} * {{ num }} = {{ dan * num }}<br>
    </span><br> 
  </span><br>

  <ul>
    <li v-for="(dan, i) in dans" :key="i">
      <ul>
        <li v-for="(num, j) in nums" :key="j">
          {{ dan }} * {{ num }} = {{ dan * num }}
        </li><br>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: ["Busan", "Seoul", "Changwon", "Pohang", "Incheon"],
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      dans: [2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
};
</script>

<style>
</style>