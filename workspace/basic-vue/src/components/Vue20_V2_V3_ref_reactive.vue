<!-- <template>
  <h1>Options API data</h1>
  <button @click="count++">count is : {{ count }}</button>
</template>

<script>
export default {
   data(){
      return{
         count : 0
         }
   }
}
</script> -->

<template>
  <h1>Options API data, methods</h1>
  <button @click="addOne">Add</button>
  <span ref="result">count is : {{count}}</span>
</template>

<script>
export default {
   data(){
      return{
         count : 0
      };
   },
   methods: {
      addOne : function(){
         this.count ++
      }
   },
}
</script>
