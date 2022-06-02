<template>
  <h1>form element binding</h1>
  <form action="">
     <input placeholder="edit me" v-model="msg">
     <p>Message is {{msg}}</p>

     <span>Multiline message : </span>
     <p style="white-space: pre-line">{{multiline}}</p>
     <textarea v-model="multiline" cols="30" rows="10"></textarea>
  </form>
</template>

<script>
export default {
   data(){
      return {msg : "누구인가?", multiline : "누가 기침소리를 내었어!\n\n\n"}
   }
}
</script>

<style>

</style>