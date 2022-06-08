<template>
  <h1>{{title}}</h1>
  <button ref="btnHome" @click.prevent="Home" onclick="location.href='#/'">Home</button>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: "ToAbout",
     setup(){
      const title = ref('About')

      return {title}
   }
}
</script>

<style>

</style>