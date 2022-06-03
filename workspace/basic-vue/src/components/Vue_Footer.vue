<template>
  <div v-bind:class="footer"></div>
</template>

<script>
export default {
   data(){
      return{
         footer:"footer"
      }
   }
}
</script>

<style>
.footer{
   height:100px;
   magin : 0;
   background: rgb(34, 227, 111);
   line-height:90px;
   padding-left:50px;
   font-weight: bold;
}
</style>