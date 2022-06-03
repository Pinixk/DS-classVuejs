<template>
  <h1>17 form - select</h1>
  <select v-model="selected" name="" id="">
    <!-- select의 option에 value값을 넣지 않으면 text값이 value가 됨 -->
    <option value="" disabled>Please select one</option>
    <option value="One">A</option>
    <option value="Two">B</option>
    <option value="Three">C</option>
    <option value="Four">D</option>
  </select>
  <br />
  <span><h2>{{ selected }}</h2></span><br />
  <select v-model="arrSelect" name="" id="">
    <option value="">Please select one</option>
    <option v-for="(item, idx) in arrObj" :key="idx" :value="item.value">
      {{ item.text }}
    </option>
  </select>
  <span><h2>{{ arrSelect }}</h2></span><br />

</template>

<script>
export default {
  data() {
    return {
      selected: "",
      arrSelect: "",
      arrObj:[{text:'A',value:"One"},{text:"B",value:"Two"},{text:"C",value:"Three"},{text:"D",value:"Four"}],
      // arrStr:["A","B","C","D"],
    };
  },
};
</script>

<style>
</style>