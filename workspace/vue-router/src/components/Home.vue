<template>
  <!-- Content section-->
  <section class="py-5">
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h2>동성 스쿠버다이빙</h2><br>
          <p class="mb-0">
            Tel. 010-5794-5477
          </p>
            <img src="../assets/diving.png" alt="Diving" class="diving">
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
.diving{
  object-fit: cover;
  margin-top: 100px;
}

</style>