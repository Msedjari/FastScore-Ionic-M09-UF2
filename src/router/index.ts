import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/tabs.vue';

// Importar las pantallas principales
import WelcomePage from '@/views/entrada.vue'; // ✅ Pantalla inicial con GIF y botones
import LoginPage from '@/views/login.vue'; // ✅ Página de inicio de sesión
import RegisterPage from '@/views/registrar.vue'; // ✅ Página de registro
import InfoPage from '@/views/Info.vue';
import AjustesPage from '@/views/ajustes.vue'; // ✅ Página de ajustes
import BuscarPage from '@/views/buscar.vue'; // ✅ Página de búsqueda
import CuentaPage from '@/views/cuenta.vue'; // ✅ Página de cuenta

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomePage, // ✅ Página de inicio (fuera de /tabs/)
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage, // ✅ Página de inicio de sesión
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: RegisterPage, // ✅ Página de registro
  },
  {
    path: '/Info',
    name: 'Info',
    component: InfoPage,
  },
  {
    path: '/ajustes',
    name: 'Ajustes',
    component: AjustesPage, // ✅ Página de ajustes accesible desde cualquier lugar
  },
  {
    path: '/buscar',
    name: 'Buscar',
    component: BuscarPage, // ✅ Página de ajustes accesible desde cualquier lugar
  },
  {
    path: '/cuenta',
    name: 'Cuenta',
    component: CuentaPage,
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/Matches' // ✅ Redirige a la pestaña de partidos después de entrar a /tabs/
      },
      {
        path: 'Favoritos',
        component: () => import('@/views/Favoritos.vue') // ✅ Pestaña de Favoritos
      },
      {
        path: 'News',
        component: () => import('@/views/News.vue') // ✅ Pestaña de Noticias
      },
      {
        path: 'Matches',
        component: () => import('@/views/Matches.vue') // ✅ Pestaña de Partidos
      },
      {
        path: 'Trophy',
        component: () => import('@/views/Trophy.vue') // ✅ Pestaña de Trofeos
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;

