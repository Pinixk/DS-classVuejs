<template>
  <h1>{{title}}</h1>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
   name : 'ToLogin',
   setup(){
      const title = ref('Login')

      return {title}
   }
}
</script>

<style>

</style>