import { RouteConfig } from 'vue-router/types/router';

export const SportsRoute: RouteConfig[] = [
  {
    path:      '/sports',
    component: () => import('./Components/Sports.vue').then((m: any) => m.default),
  },
];
