<template>
  <h1>25 watch effect</h1>
  <!-- watch는 개발자가 코드로 지정한 변수값의 변화를 감시하는 것,
  콜백함수를 이용하여 부가적인 작업을 추가할 수 있다 
  prev와 cur value 둘 다 알 수가 있다-->
  <p>{{ count_o }}</p>
  <button @click="count_o++">Option API 카운트 증가</button>
  <p>{{ count_c1 }}</p>
  <button @click="count_c1++">Composition API 1st 카운트 증가</button>
  <p>{{ count_c2 }}</p>
  <button @click="count_c2++">Composition API 2nd 카운트 증가</button>
  <p>watchEffect : {{ state }}</p>
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
      console.log(`count_o watch: ${prev} ==> ${cur}`);
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
        console.log(`count_c1 watch : ${prev} => ${cur}`);
      },{ immediate: true }
    );
    watch(
      [count_c1, count_c2],
      function (cur, prev) {
        console.log(`count_c1 and c2 watch : ${prev} => ${cur}`);
      },{ immediate: true } // immediate: true 초기값부터 변화 파악
    );
    // watchEffect: 콜백함수에서 참조되는 변수만 감시
    const stop = watchEffect(
      function () {
        console.log(`WatchEffect just count_c2 watch : ${count_c2.value}`);
      },{ flush: "post" } // post: dom이 업데이트 후에 콜백함수를 호출함
                           // pre: dom이 업데이트 전에 콜백함수를 호출함
    );
    const onStop = function () {
      state.value = "중지";
      stop();
    };

    return { count_c1, count_c2, state, onStop };
  },
};
</script>