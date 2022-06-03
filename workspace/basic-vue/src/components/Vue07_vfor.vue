<template>
  <h1>07 v-for</h1>
  <ul>
    <li v-for="(item, idx) in list" :key="idx">{{ idx + 1 }}:{{ item }}</li>
    <br />

    <li style="font-size: 20px; font-weight: bold">구구단</li>
    <li v-for="(item, idx) in multi" :key="idx">
      {{ `2*${item}` }}={{ item * 2 }}
    </li>
    <br />

    <!-- <li v-for="(item, idx) in result" :key="idx">
      {{ item }}
    </li> -->
  </ul>

  <!-- <span v-for="i in 8" :key="i">
    <span v-for="j in 9" :key="j">
      {{ i + 1 }}*{{ j }}={{ (i + 1) * j }}<br /> </span
    ><br/>
  </span> -->
</template>

<script>
export default {
  data() {
    return {
      list: ["Busan", "Seoul", "Changwon", "Pohang", "Incheon"],
      multi: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      result,
    };
  },
};

let result = [];
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    result.push(i * j);
  }
}
</script>

<style>
li {
  list-style: none;
}
</style>