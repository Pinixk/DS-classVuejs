<template>
  <h1>26 component create</h1>
  <div id="app">
    <p>{{ title }}</p>
    <counter></counter>
    <counter></counter>
    <counter></counter>
  </div>
</template>

<script>
import { createApp, ref } from "@vue/runtime-dom";
const app = createApp({});
app.component("counter", {
  inject: ["counter_header"],
  setup() {
    const count = ref(0);
    return { count };
  },
  template: [
    "<span>{{counter_header}}</span>",
    '<button @click="counter++" v-text="count"></button>',
    "<hr>",
  ],
});
app.config.globalProperties.title = "Vue 3 Demo";
app.provide("counter_header", "counter");
app.mount("#app");
export default {};
</script>
