import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList }, // our-domain.com/teams => TeamsList
    { path: '/users', component: UsersList }, // our-domain.com/users => UsersList
    { path: '/teams/:teamId', component: TeamMembers, props: true }, // everything after : is routeParams
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router); // to link router and app

app.mount('#app');
