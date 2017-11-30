<template>
  <v-flex sm10 offset-xs1 class="center">
  <v-card >
    <v-card-title>
      Comandas
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
          > {{ props.item.mesa.nro_mesa }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.mesa.nro_mesa"
              single-line
              counter
              :rules="[max25chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">{{ props.item.empleado.nombre }}</td>
        <td class="text-xs-right">{{ props.item.created_at }}</td>
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
    <div class="text-xs-right pt-5">
    <v-btn outline  fab color="green darken-4" @click.native.stop="agregarComanda = !agregarComanda">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
  </v-card>
      <v-dialog v-model="agregarComanda" max-width="650px">
        <v-card>
        <v-card-title>
          <span class="headline">Agregar Comanda</span>
        </v-card-title>
        <v-card-text>
          <v-form action="crearComanda(model)">
            <v-layout wrap>
                Mesa:
              <v-flex xs12>
                <select v-model="model.id_mesa" label="Mesa" item-value="id">
                  <option v-for="mesa in mesas" v-bind:value="mesa.id"> {{ mesa.nro_mesa }}
                  </option>
                </select>
              </v-flex>
                Empleado:
              <v-flex xs12>
                <select v-model="model.id_empleado" label="Empleado" item-value="id">
                  <option v-for="empleado in empleados" v-bind:value="empleado.id"> {{ empleado.nombre }}
                  </option>
                </select>
              </v-flex>
            </v-layout>
          </v-form>
          <small>*Campos requeridos</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" flat @click.native="crearComanda(model), agregarComanda = false">Guardar</v-btn>
          <v-btn color="red" flat @click.native="agregarComanda = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</v-flex>
</template>



<script>
import {comandaService} from '@/services/Comanda.service.js'
import {mesaService} from '@/services/Mesa.service.js'
import {empleadoService} from '@/services/Empleado.service.js'
export default {
  data () {
    return {
      agregarComanda: false,
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      tmp: '',
      search: '',
      pagination: {},
      headers: [
        {
          text: 'Numero mesa',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Nombre empleado', value: 'nombreEmpleado' },
        { text: 'Fecha', value: 'fecha' }
      ],
      items: [],
      model: {
        id_mesa: '',
        id_empleado: ''
      },
      mesas: [],
      empleados: []
    }
  },
  mounted () {
    comandaService.query().then(data => {
      this.items = data.body
      console.log('"this.items"')
      console.log(this.items)
    })
    empleadoService.query().then(data => {
      this.empleados = data.body
    })
    mesaService.query().then(data => {
      this.mesas = data.body
    })
  },
  methods: {
    crearComanda (model) {
      comandaService.save(this.model).then(data => {
        this.comandas.push(model)
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