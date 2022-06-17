import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/MoiveIndexPage';
import Index from '@/components/MoiveShowPage';

Vue.useAttrs(Router);

export const router = new Router({
   mode: 'history',
   routes: [
      {path: '/', name: 'index', component: Index},
      {path: '/:id', name: 'show', component: Show},
   ]
})