<template>
  <v-flex sm10 offset-xs1 class="center">
  <v-card >
    <v-card-title>
      Menus
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Buscar"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
        v-bind:headers="headers"
        v-bind:items="items"
        v-bind:search="search"
      >
      <template slot="items" slot-scope="props">
        <td>
          <v-edit-dialog
            lazy
          > {{ props.item.nombre }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.nombre"
              single-line
              counter
              :rules="[max25chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">{{ props.item.descripcion }}</td>
        <td class="text-xs-right">{{ props.item.acompannamiento.nombre }}</td>
        <td class="text-xs-right">{{ props.item.precio }}</td>
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
    <div class="text-xs-right pt-5">
    <v-btn outline  fab color="green darken-4" @click.native.stop="agregarMenu = !agregarMenu">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
  </v-card>
      <v-dialog v-model="agregarMenu" max-width="650px">
        <v-card>
        <v-card-title>
          <span class="headline">Agregar Menu</span>
        </v-card-title>
        <v-card-text>
          <v-form action="crearMenu(model)">
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Nombre" v-model="model.nombre" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Descripcion" v-model="model.descripcion" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Precio" v-model="model.precio" required numeric></v-text-field>
              </v-flex>
              	Acompañamiento:
              <v-flex xs12>
              	<select v-model="model.id_acompannamiento" label="Acompañamiento" item-value="id">
                  <option v-for="item in items" v-bind:value="item.id"> {{ item.nombre }}
                  </option>
                </select>
          </v-flex>
            </v-layout>
          </v-form>
          <small>*Campos requeridos</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" flat @click.native="crearMenu(model), agregarMenu = false">Guardar</v-btn>
          <v-btn color="red" flat @click.native="agregarMenu = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</v-flex>
</template>



<script>
import {menuService} from '@/services/Menu.service.js'
import {acompannamientoService} from '@/services/Acompannamiento.service.js'
export default {
  data () {
    return {
      agregarMenu: false,
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      tmp: '',
      search: '',
      pagination: {},
      headers: [
        {
          text: 'Nombre',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Descripcion', value: 'descripcion' },
        { text: 'Acompañamiento', value: 'acompannamiento' },
        { text: 'Total', value: 'total' }
      ],
      items: [],
      model: {
        nombre: '',
        descripcion: '',
        precio: '',
        id_acompannamiento: ''
      },
      acomp: []
    }
  },
  mounted () {
    menuService.query().then(data => {
      this.items = data.body
      console.log('"this.items"')
      console.log(this.items)
    })
    acompannamientoService.query().then(data => {
      this.acomp = data.body
      console.log('"this.acomp"')
      console.log(this.acomp)
    })
  },
  methods: {
    crearMenu (model) {
      menuService.save(this.model).then(data => {
        this.menus.push(model)
      }, err => {
        console.log(err)
        if (err.status) {
          alert(err.body)
        }
      })

      console.log('--Menu--')
      console.log(this.model)
    }
  }
}
</script>