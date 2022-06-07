<template>
  <h1>22 &lt; Script Setup &gt; tag</h1>
  <!-- script setup을 사용하면 
  component 옵션도 필요 없고 
  setup함수를 만들 필요도 없으며, 
  명시적으로 변수를 반환하지 않아도 됨 -->

  <input type="text" v-model="title" ref="msg">
  <button v-on:click="change">Change</button>
</template>

<script setup>
const { ref }=require("@vue/reactivity");

   let title = ref('old title')
   const msg = ref(null)
   function change(){
      msg.value.value = "new title"
   }
</script>