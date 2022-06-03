<template>
  <h1>form element select binding</h1>
  select는 바인딩을 할 때 option의 value에 binding을 한다.
  <select name="selItem" ref="selItem" id="selItem" v-model="selected" v-on:change="selChange">
    <option value="반지">ring</option>
    <option value="목걸이">necklace</option>
    <option value="귀걸이">earring</option>
    <option value="시계">watch</option>
    <option value="팔찌">bracelet</option>
  </select>
  <span>{{selected}} / {{selectText}}</span>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
export default {
  data: ()=>({selected: '반지',selectText: ''}),
  methods: {
    selChange(e){
      const sel = e.target;
      console.log(sel.value);
      console.log(sel.options[sel.selectedIndex].text);
      this.selectText = sel.options[sel.selectedIndex].text;
    },
    // getSelText() {
    //   const selItem = this.$refs.selItem;
    //   this.selectText = selItem.options[selItem.selectedIndex].text;
    //   console.log(this.selectText);
    // }
  },
  setup() {
    const start = (function() {this.getSelText()});
    const getSelText= (function() {
      console.log('hello');
    })
    onMounted(() =>{
      getSelText()
    })
    return {
      start, getSelText
    }
    
  }, 
}
</script>

<style>

</style>