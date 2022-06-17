<template>
  <div class="wrap">
   <h5>5월 마지막주 영화 예매 순위</h5>
   <ul class="movies">
      <li v-for="movie in movies" class="item" :key="movie.id">
         <span class="rank">{{moive.id}}</span>
         <router-link :to="{name: 'show', params: {id: movie.id}}">
         <img v-bind:src="moive.poster" class="poster" />
         </router-link>
         <div class="detail">
            <strong class="tit">{{moive.name}}</strong><br>
            <span class="rate">예매율
               <span class="num">{{movie.rate}}</span>
            </span><br>
            <router-link :to="{name:'show', params: {id: movie.id}}" class="link">자세히 보기</router-link>
         </div>
      </li>
   </ul>
  </div>
</template>

<script>
export default {
   movies : [],
   setup(){
      $http.get('api/movies').then((response)=>{
         movies = response.data
      }).catch((err)=>{
         console.log(err);
      });
   return {movies}
   },
}
</script>

<style>
h1,h2{font-weight: normal;}
ul{list-style-type: none; padding:0;}
li{display:inline-block; margin:0 10px;}
a{color:#42b983;}
</style>