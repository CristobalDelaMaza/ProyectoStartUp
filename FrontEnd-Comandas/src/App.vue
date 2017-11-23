<template>
  <v-app id="inspire">
    <Navigator></Navigator>
    <main>
      <v-content class="grey lighten-3">
        <v-container  >
          <v-layout>
            <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>
<style>
  .bg-green{
    background-color: #00b28e !important; 
  }

  .bg-green-dark{
    background-color: #00a281 !important; 
  }

  .bg-blue{
    background-color: #018bbc !important; 
  }

  .bg-blue-dark{
    background-color: #03749e !important; 
  }

  .full-layout{
    margin: 0px !important;
    padding: 0px !important;
  }

  .btn-table{
    margin: 1px;
  }

</style>

<script>
  import Navigator from '@/components/NavComponents.vue'
  import FoterPage from '@/components/FooterComponents.vue'
  // import navigation from '@/components/Navbar'
  export default {
    components: {
      // navigation,
      Navigator,
      FoterPage
    }
  }
</script>
