<template>
  <h1>18 form element select binding</h1>
  <select
    name="selItem"
    ref="selItem"
    id="selItem"
    v-model="selected"
    v-on:change="selChange"
  >
    <option value="반지">ring</option>
    <option value="목걸이">necklace</option>
    <option value="귀걸이">earring</option>
    <option value="시계">watch</option>
    <option value="팔찌">bracelet</option></select><br /><br>
  <span>{{ selected }}/{{ selText }}</span><br />
  <span>{{ selected }} / <span id="selText" ref="selText"></span></span>
</template>

<script>
export default {
  // Options API 방식 :: Vue 2.x
  data: () => ({ selected: "반지", selText: "" }),
  methods: {
    selChange(e) {
      const sel = e.target;
      const selText = this.$refs.selText;
      this.selectText = sel.options[sel.selectedIndex].text;
      selText.textContent = sel.options[sel.selectedIndex].text;
    },
    getSelText() {
      // $refs로 접근
      // const selItem = this.$refs.selItem;
      // const selText = this.$refs.selText;
      // this.selText = selItem.options[selItem.selectedIndex].text;
      // selText.textContent = selItem.options[selItem.selectedIndex].text;

      // dom으로 접근
      const selItem = document.querySelector('#selItem')
      const selText = document.querySelector('#selText')
      this.selText = selItem.options[selItem.selectedIndex].text;
      selText.textContent = selItem.options[selItem.selectedIndex].text;
    },
  },
  mounted: function () {
    this.getSelText();
  },
};
</script>

<style>
</style>