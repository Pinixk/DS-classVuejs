<template>
  <h1>24 computed</h1>
  <!-- ref, reactive, watcher 특별히 계산된 속성의 변동을 실시간으로 반영 -->
  <h2>Small Items</h2>
  <p v-for="item in small_items_o" :key="item.id">{{ item.text }}</p>
  <br />
  <p v-for="item in small_items_c" :key="item.id">{{ item.text }}</p>
  <br />

  <h2>Big Items</h2>
  <p v-for="item in big_items_o" :key="item.id">{{ item.text }}</p>
  <br />
  <p v-for="item in big_items_c" :key="item.id">{{ item.text }}</p>
</template>

<script>
import { reactive, computed } from "@vue/reactivity";

export default {
  // Options API
  data() {
    return {
      arr: [
        { id: 1, text: "1번 옵션 아이템" },
        { id: 2, text: "2번 옵션 아이템" },
        { id: 3, text: "3번 옵션 아이템" },
        { id: 4, text: "4번 옵션 아이템" },
        { id: 5, text: "5번 옵션 아이템" },
      ],
    };
  },
  computed: {
    small_items_o() {
      return this.arr.filter(function (item) {
        return item.id < 3;
      });
    },
    big_items_o() {
      return this.arr.filter((item) => item.id >= 3);
    },
  },

  // composition API
  setup() {
    const arr = reactive([
      { id: 1, text: "1번 옵션 아이템" },
      { id: 2, text: "2번 옵션 아이템" },
      { id: 3, text: "3번 옵션 아이템" },
      { id: 4, text: "4번 옵션 아이템" },
      { id: 5, text: "5번 옵션 아이템" },
    ]);
    const small_items_c = computed(() => {
      return arr.filter(function (items) {
        return items.id < 3;
      });
    });
    const big_items_c = computed(() => {
      return arr.filter((items) => items.id >= 3);
    });

    return { small_items_c, big_items_c };
  },
};
</script>