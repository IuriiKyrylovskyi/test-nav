import { RouteTitles, Routes } from '../interfaces/global';
import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FrequencyView from '../views/FrequencyView.vue';

const router = createRouter({
  // https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/commonIssues.html#blank-screen-on-builds-but-works-fine-on-serve:~:text=hash%27%20%3A%20%27history%27%2C%0A%7D)-,If%20using%20Vue%203%3A,-const%20router%20%3D%20createRouter
  // (you will need to import these functions from 'vue-router')
  history: createWebHashHistory(),

  routes: [
    {
      path: Routes.HOME,
      name: RouteTitles.HOME,
      component: HomeView,
      meta: {
        title: RouteTitles.HOME,
      },
    },
    {
      path: Routes.FREQUENCY,
      name: RouteTitles.FREQUENCY,
      component: FrequencyView,
      meta: {
        title: RouteTitles.FREQUENCY,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Test App`;
  next();
});

export default router;
