import { RouteConfig } from 'vue-router/types/router';

export const ParticipantsRoutes: RouteConfig[] = [
  {
    path:      '/participants',
    component: () => import(/* webpackChunkName: "events" */ './Components/Participants.vue').then((m: any) => m.default),
  },
];
