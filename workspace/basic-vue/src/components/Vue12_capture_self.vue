<template>
  <h1>12 v-on caputre, self</h1>
  <div v-on:click="doTop" id="top">
    <div v-on:click.self="doMid" id="middle">
      <button type="button" v-on:click="doBot">Bubble</button>
    </div>
  </div>
  <!-- stop은 자신만 이벤트를 실행할 경우 -->
  <!-- capture는 자신보다 parent가 먼저 실행해야 할 경우 parent에 붙인다. 
       상위 노드에 capture가 연속적일 경우 마지막으로 적용된 노드가 먼저 시작 -->
  <!-- self는 자신이 직접 발생시킬 때만 이벤트를 처리함 -->
</template>

<script>
export default {
  methods: {
    doTop() {console.log("Top accured event");},
    doMid() {console.log("Middle accured event");},
    doBot() {console.log("Bottom accured event");},
  },
};
</script>

<style>
#top {
  width: 200px;
  height: 200px;
  background: orangered;
}
#middle {
  width: 100px;
  height: 100px;
  background: greenyellow;
}
</style>