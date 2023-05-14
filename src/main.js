import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, //redirect to teams if there is slash nothing
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // everything after : is routeParams,
      ],
    }, // our-domain.com/teams => TeamsList
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
    }, // our-domain.com/users => UsersList
    { path: '/:notFound(.*)', component: NotFound }, // if not existing route is entered
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router); // to link router and app

app.mount('#app');
