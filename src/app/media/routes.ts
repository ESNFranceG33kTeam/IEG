import { RouteConfig } from 'vue-router/types/router';

export const MediaRoutes: RouteConfig[] = [
  {
    path:      '/media',
    component: () => import(/* webpackChunkName: "partners" */ './Components/Media.vue').then((m: any) => m.default),
  },
];
