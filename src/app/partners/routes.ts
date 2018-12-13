import { RouteConfig } from 'vue-router/types/router';

export const PartnersRoutes: RouteConfig[] = [
  {
    path:      '/partners',
    component: () => import(/* webpackChunkName: "partners" */ './Components/Partners.vue').then((m: any) => m.default),
  },
];
