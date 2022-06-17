import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/MovieIndexPage';
import Show from '@/components/MovieShowPage';

Vue.useAttrs(Router);

export const router = new Router({
   mode: 'history',
   routes: [
      {path: '/', name: 'index', component: Index},
      {path: '/:id', name: 'show', component: Show},
   ]
})