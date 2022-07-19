<template>
  <h1>05 v-show</h1>
  <span>표현식 값의 참-거짓을 기반으로 엘리먼트의 display CSS 속성을 전환</span><br><br>
  <span v-show="flag" v-text="msg"></span>
</template>

<script>
const vn = {
  data : function(){return {msg:"Notice!!!", flag:1}},
  methods:{
    toggle(){
      this.flag ^= 1
    }
  },
  mounted(){
    setInterval(()=>{
      this.toggle()
    }, 1000);
  }
}
  export default {vn} // 사용시 중괄호 지워야 함
</script>

<style></style>