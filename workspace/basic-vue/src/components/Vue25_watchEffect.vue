<template>
  <h1>25 watch effect</h1>
  <!-- watch는 개발자가 코드로 지정한 변수값의 변화를 감시하는 것,
  콜백함수를 이용하여 부가적인 작업을 추가할 수 있다 -->
  <p>{{ count_o }}</p>
  <button @click="count_o++">Option API 카운트 증가</button>
  <p>{{ count_c1 }}</p>
  <button @click="count_c1++">Composition API 1st 카운트 증가</button>
  <p>{{ count_c2 }}</p>
  <button @click="count_c2++">Composition API 2nd 카운트 증가</button>
  <p>상태 : {{ state }}</p>
  <button @click="onStop()">watchEffect 중지</button>
</template>

<script>
import { ref, watch, watchEffect } from "@vue/runtime-core";
export default {
  // Option API
  data() {
    return { count_o: 0 };
  },
  watch: {
    count_o: function (cur, prev) {
      console.log(`Options API Watch: ${prev} ==> ${cur}`);
    },
  },

  // Composition API
  setup() {
    const count_c1 = ref(0);
    const count_c2 = ref(0);
    const state = ref("실행 중");
    watch(
      count_c1,
      function (cur, prev) {
        console.log(`Composition API Watch: ${prev} ==> ${cur}`);
      },{ immediate: true }
    );
    watch(
      [count_c1, count_c2],
      function (cur, prev) {
        console.log(`Composition API Multiple Watch: ${prev} ==> ${cur}`);
      },{ immediate: true }
    );
    const stop = watchEffect(
      function () {
        console.log(`Composition API WatchEffect Watch: ${count_c2.value}`);
      },{ flush: "post" }
    );
    const onStop = function () {
      state.value = "중지";
      stop();
    };

    return { count_c1, count_c2, state, onStop };
  },
};
</script>

<style>
</style>