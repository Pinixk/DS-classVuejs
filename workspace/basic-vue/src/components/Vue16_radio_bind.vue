<template>
  <h1>16 form - radio binding</h1>
  <label for="radioA">A</label>
  <input type="radio" name="radios" id="radioA" v-model="pick" v-bind:value="A" selected />
  <label for="radioB">B</label>
  <input type="radio" name="radios" id="radioB" v-model="pick" v-bind:value="B" />
  <label for="radioC">C</label>
  <input type="radio" name="radios" id="radioC" v-model="pick" v-bind:value="C" />
  <br />
  <span><h2>{{ pick }}</h2></span>
  <input type="hidden" name="choice" v-text="pick">
</template>

<script>
export default {
  data() {
    return {
      pick: "", A: "A", B: "B", C: "C",
    };
  },
};
</script>

<style>
</style>