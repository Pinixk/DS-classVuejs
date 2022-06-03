<template>
  <h1>form element join</h1>
  <form action="Vue20_memberList.vue">
    <fieldset>
      <legend>회원가입</legend>
      <div>
        <label for="id" class="title">ID : </label>
        <input type="text" ref="id" id="id">
      </div>
      <div>
        <label for="name" class="title">Name : </label>
        <input type="text" ref="name" id="name">
      </div>
      <div>
        <label for="pw" class="title">Password : </label>
        <input type="password" ref="pw" id="pw">
      </div>
      <div>
        <label for="repw" class="title">Re Password : </label>
        <input type="password" ref="repw" id="repw">
      </div>
      <div> 
        <label for="" class="title">Hobby : </label>
        <label :for="item" v-for="(item,idx) in hobLi" :key="idx">{{item}}
        <input type="checkbox" name="hob" :id="item" :value="item">
        </label>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  data(){
    return{
      hob:['농구'],
      hobLi:['축구','농구','배구'],

    }
  }
}
</script>

<style>
  .title{
    display:inline-block;
    width:105px;
    margin:3px;
    text-align: left;
  }
  /* fieldset div{width:100%; text-align: left;} */
</style>