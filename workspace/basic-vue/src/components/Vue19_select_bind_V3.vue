<template>
  <h1>19 select Composition API</h1>
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
    <option value="팔찌">bracelet</option></select><br /><br />
  <span><h2>{{ selected }}/{{ selectText }}</h2></span><br />
  <span><h2>{{ selected }} / <span id="selText" ref="selText"></span></h2></span>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
export default {
  // composition API
  setup() {
    const selItem = ref(null);
    const selText = ref(null);
    const selected = "반지";
    const selectText = ref("");

    const getSelText = function () {
      // console.log(selItem);

      const tmp = selItem.value.options[selItem.value.selectedIndex].text;
      selectText.value = tmp
      selText.value.textContent = tmp
    };
    const selChange = () => {
      getSelText()
    };

    onMounted(() => {
      getSelText();
    });

    return {
      selItem,selText,selected,selectText,getSelText,selChange,
    };
  },
};
</script>

<style>
</style>