<template>
  <h1>form - select binding</h1>
  <!-- select는 바인딩 시 option의 value에 binding 해야함 -->
  <select name="selItem" id="selItem" v-model="selected" v-on:change="selChg">
    <option value="" disabled>Select One</option>
    <option value="시계">Watch</option>
    <option value="반지">Ring</option>
    <option value="목걸이">Necklace</option>
    <option value="팔찌">Bracelet</option>
    <option value="귀걸이">Ear ring</option></select
  ><br />
  <span
    ><h2>{{ selected }}</h2></span
  >
</template>

<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    selChg(e) {
      const sel = e.target;
      console.log(sel.value);
      console.log(sel.options[sel.selectedIndex].text);
    },
  },
};
</script>

<style>
</style>