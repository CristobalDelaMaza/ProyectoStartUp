<template class="mt-8">
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 class="elevation-9">
      <v-card class="mt-8 grey lighten-4">
        <v-card-title primary-title class="deep-orange accent-4 white--text">
          <div>
            <h3 class="headline mb-0 text-xl-center">Ileluwün</h3>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-flex xs12 sm10 offset-sm1>
            <v-form action="javascript:;" @submit.prevent="login(credentials)" class="form">
             <v-flex xs12 sm8 offset-sm2>
               <div class="form-group">
                 <v-flex xs8 offset-sm2>
                  <v-text-field
                  name="input-1"
                  label="Correo"
                  v-model="credentials.email"
                  ></v-text-field >
                </v-flex>
                </div>
                <div class="form-group">
                  <v-flex xs8 offset-sm2>
                    <v-text-field
                    name="input-10-1"
                    label="Contraseña"
                    v-model="credentials.password"
                    type="password" 
                    ></v-text-field>
                  </v-flex>
                  </div>
                  <v-flex xs12 sm4 offset-sm4>
                  <v-btn color="deep-orange accent-4 white--text" type="submit">Acceder</v-btn>
                </v-flex>
              </v-flex>
            </div>
            </v-form>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  import {loginService} from '@/services/Login.service.js'
  import CredentialsServices from '@/services/Credentials.service.js'
  export default {
    data () {
      return {
        credentials: {
          email: '',
          password: ''
        },
        credentialService: new CredentialsServices()
      }
    },
    methods: {
      login (model) {
        loginService.authenticate(model).then(data => {
          console.log(data)
          this.credentialService.setToken(data.body.token)
          this.$router.push('/dashboard')
          // window.location.href = '/pokemons'
        })
      }
    }
  }
</script>
<style scoped>

</style>