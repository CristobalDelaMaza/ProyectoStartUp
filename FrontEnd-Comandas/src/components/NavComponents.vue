<template>
  <section>
    <v-navigation-drawer clipped fixed v-model="drawer" enable-resize-watcher app class="deep-orange accent-4 elevation-12" dark width="250"  >
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile >
            OPCIONES
        </v-list-tile>
        <!-- Iteración de objeto que almacena los bottones del sidenav -->
        <v-list-tile v-for="link in links" @click="$router.push({name: link.state})" :key="link.name">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar app fixed clipped-left class="grey darken-3 white--text">
      <v-toolbar-title><img class="img-logo-nav" src="../../static/icono.png" alt="Logo"></v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn class="white--text" flat @click="$router.push({ name: 'Login' })" ><v-icon>exit_to_app</v-icon>&nbsp;&nbsp;Cerrar</v-btn>
    </v-toolbar>
  </section>
</template>

<style>
    .img-logo-nav{
      width: 90% !important;
      margin-left: 30px;
      margin-top: 5px;
    }
</style>

<script>
  export default {
    data: () => ({
      drawer: true,
      links: [
        {
          name: 'Mesas', // vista usuario
          icon: 'view_module', // icono
          state: 'Mesas' // nombre de rutas
        },
        {
          name: 'Menu',
          icon: 'restaurant_menu',
          state: 'Menu'
        },
        {
          name: 'Empleados',
          icon: 'account_circle',
          state: 'Empleados'
        },
        {
          name: 'Estadisticas',
          icon: 'trending_up',
          state: 'Estadisticas'
        },
        {
          name: 'Comandas',
          icon: 'restaurant',
          state: 'Comandas'
        },
        {
          name: 'Configuracion',
          icon: 'settings',
          state: 'Configuracion'
        }
      ]
    })
  }
</script>