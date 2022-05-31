<template>
  <h1>v-for</h1>
  <ul>
      <li  v-for="(item,idx) in list" :key="idx"> {{idx+1}}:{{item}}</li><br>
      <li>구구단</li><br>
      <li  v-for="(item,idx) in multi" :key="idx"> {{`2*${item}`}}={{item*2}}</li><br>
      <!-- <li  v-for="(item,idx) in multi" :key="idx"> {{`3*${item}`}}={{item*3}}</li><br>
      <li  v-for="(item,idx) in multi" :key="idx"> {{`4*${item}`}}={{item*4}}</li><br>
      <li  v-for="(item,idx) in multi" :key="idx"> {{`5*${item}`}}={{item*5}}</li><br>
      <li  v-for="(item,idx) in multi" :key="idx"> {{`6*${item}`}}={{item*6}}</li><br>
      <li  v-for="(item,idx) in multi" :key="idx"> {{`7*${item}`}}={{item*7}}</li><br>
      <li  v-for="(item,idx) in multi" :key="idx"> {{`8*${item}`}}={{item*8}}</li><br>
      <li  v-for="(item,idx) in multi" :key="idx"> {{`9*${item}`}}={{item*9}}</li> -->
       <li  v-for="(item,idx) in result" :key="idx">{{`${item}*${idx+1}`}}={{item}}</li><br>
  </ul>
</template>

<script>
export default {
    data(){
        return{list:['Busan','Seoul','Changwon','Pohang','Incheon'],
            multi:['1','2','3','4','5','6','7','8','9'],
            result
        }
    }

};

let result = [];
for(let i=2; i<10; i++){
            for (let j = 1; j < 10; j++) {
                result = j*2;
                document.write(`${i} * ${j} = ${result} <br>`);
            } document.write(`<br>`);
        }
</script>

<style>
    
</style>