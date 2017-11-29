import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Comandas from '@/components/Comandas'
import Login from '@/components/Login'
import Empleado from '@/components/Empleado'
import Menu from '@/components/Menu'
import Configuracion from '@/components/Configuracion'
import Estadisticas from '@/components/Estadisticas'
import Mesas from '@/components/Mesas'
import DashBoard from '@/components/DashBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard,
      redirect: '/dashboard/mesas',
      children: [
        {
          path: 'comandas',
          name: 'Comandas',
          component: Comandas
        },
        {
          path: 'empleados',
          name: 'Empleados',
          component: Empleado
        },
        {
          path: 'menu',
          name: 'Menu',
          component: Menu
        },
        {
          path: 'estadisticas',
          name: 'Estadisticas',
          component: Estadisticas
        },
        {
          path: 'configuracion',
          name: 'Configuracion',
          component: Configuracion
        },
        {
          path: 'mesas',
          name: 'Mesas',
          component: Mesas
        }
      ]
    }
  ]
})
