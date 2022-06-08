<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/join">Join</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/portfolio">portfolio</router-link>
      </li>
      <!-- <li>
        <router-link to="/about">About</router-link>
      </li> -->
    </ul>
  </div>
  <router-view />
</template>


<style>
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
