import { RouteConfig } from 'vue-router/types/router';

export const EventsRoutes: RouteConfig[] = [
  {
    path:      '/event',
    component: () => import(/* webpackChunkName: "events" */ './Components/Events.vue').then((m: any) => m.default),
  },
];
