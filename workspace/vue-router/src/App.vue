<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#!"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><router-link to="/" class="nav-link active">Home</router-link></li>
                        <li class="nav-item"><router-link to="/login" class="nav-link active" aria-current="page" >Login</router-link></li>
                        <li class="nav-item"><router-link to="/join" class="nav-link active">Join</router-link></li>
                        <li class="nav-item"><router-link to="/list" class="nav-link active" aria-current="page" >list</router-link></li>
                        <li class="nav-item"><router-link to="/portfolio" class="nav-link active" aria-current="page" >Portfolio</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
          <header
    class="py-5 bg-image-full"
    style="
      background-image: url('https://source.unsplash.com/wfh8dDlNFOk/1600x900');
    "
  >
    <div class="text-center my-5">
      <h1 class="text-white fs-3 fw-bolder">Vue3 Test</h1>
      <p class="text-white fs-3 fw-bolder">9번 김봉조</p>
      <br><br><br><br><br><br>
    </div>
  </header>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
template {
  position: relative;
}

ul {
  list-style: none;
}

li {
  display: inline-block;
  width: 150px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
