<!-- <template>
  <h1>Options API data, methods</h1>
  <button @click="addOne">Add</button>
  <span ref="result">count is</span>
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
         this.$refs.result.textContent = `conut is : ${++this.count}`
      }
   },
}
</script>  -->

<!-- <template>
  <h1>Composition API ref</h1>
  <button @click="addOne">Add</button>
  <span ref="result">count is</span>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
   setup(){
      // state data
      const count = ref(0)       // count 변수를 0으로 초기화
      // refs
      const result = ref(null)   // span태그를 null로 초기화

      // methods
      function addOne(){
         result.value.textContent = `count is : ${++count.value}`
      }
      
      return{
         count, result, addOne
      }
   }
}
</script> -->

<template>
  <h1> 20 Composition API reactive</h1>
  <button @click="addOne">Add</button>
  <span ref="result">count is</span>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
export default {
   setup(){
      // reactive 하나로 복수의 변수를 retrun 가능
      const state = reactive({
         count : 0
      })
      const result = ref(null)   // span태그를 null로 초기화

      function addOne(){
         result.value.textContent = `count is : ${++state.count}`
      }
      
      return{
         state, result, addOne
      }
   }
}
</script>