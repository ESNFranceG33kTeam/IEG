import { RouteConfig } from 'vue-router/types/router';

export const TeamRoutes: RouteConfig[] = [
  {
    path:      '/team',
    component: () => import(/* webpackChunkName: "components" */ './Components/Team.vue').then((m: any) => m.default),
  },
];
