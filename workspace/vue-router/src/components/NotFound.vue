<template>
  <h1>{{title}}</h1>
  <H2 class="noti" ref="notFound" v-text="notice"></H2>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
   name: 'NotFound',
   setup(){
      const title = ref('NotFound');
      const notice = getURL(window.location.href)

      function getURL(str){
         return `The requested URL ${str.substring(str.substring(str.indexOF('/',2)))} was not found on this server. That's all we know`
      }
      return {title, notice}
   }
}
</script>

<style>

</style>