import { RouteConfig } from 'vue-router/types/router';

export const CandidacyRoutes: RouteConfig[] = [
  {
    path:      '/candidacy',
    component: () => import(/* webpackChunkName: "candidacy" */ './Components/Candidacy.vue').then((m: any) => m.default),
  },
];
