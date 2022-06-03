<template>
  <h1>03 v-bind</h1>
  <div :id="dynamicId">Hello</div>
  <img :src="url + '100x100'" alt="" />
  <div :class="[classA, classB]"></div>
  <div :style="[styleA, styleB]"></div>
  <div :="{id:box,'data-url':url}"></div>
</template>

<script>
export default {
  data() {
    return {
      dynamicId: "first_div",
      url: "https://via.placeholder.com/",
      classA: "rect",
      classB: "fill",
      styleA: "background:olive; border-radius:50px;",
      styleB: "width:100px; height:100px; border:1px solid green",
    };
  },
};
</script>

<style>
.rect {
  width: 100px;
  height: 100px;
  border: 1px solid yellow;
}
.fill {
  background: orangered;
  margin-bottom: 20px;
}
</style>
