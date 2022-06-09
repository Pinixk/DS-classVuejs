<template>
  <!-- Content section-->
  <section class="py-5">
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h2>6/10</h2><br>
          <p class="lead">
            Pass라도 하자!!
          </p>
          <p class="mb-0">
            우리 모두 수료하고 성공적으로 취업합시다!!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "ToHome",
  setup() {
    const title = ref("Home");
    return { title };
  },
};
</script>

<style>
@import "../assets/css/styles.css";
</style>