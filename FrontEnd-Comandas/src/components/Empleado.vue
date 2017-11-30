<template>
  <v-flex sm10 offset-xs1 class="center">
  <v-card >
    <v-card-title>
      Empleados
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
        <td class="text-xs-right">{{ props.item.rut }}</td>
        <td class="text-xs-right">{{ props.item.cargo.nombre }}</td>
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
    <div class="text-xs-right pt-5">
    <v-btn outline  fab color="green darken-4" @click.native.stop="agregarEmpleado = !agregarEmpleado">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
  </v-card>
      <v-dialog v-model="agregarEmpleado" max-width="650px">
        <v-card>
        <v-card-title>
          <span class="headline">Agregar Usuario</span>
        </v-card-title>
        <v-card-text>
          <v-form action="crearEmpleado(model)">
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Nombre" v-model="model.nombre" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Rut" v-model="model.rut" required></v-text-field>
              </v-flex>
              Cargo:
              <v-flex xs12>
              <!--<v-select v-bind:items="cargos" v-model="model.id_cargo" label="Cargo" item-value="value"></v-select>-->
              <select v-model="model.id_cargo" label="Cargo" item-value="id">
                  <option v-for="cargo in cargos" v-bind:value="cargo.id"> {{ cargo.nombre }}
                  </option>
                </select>
          </v-flex>
            </v-layout>
          </v-form>
          <small>*Campos requeridos</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" flat @click.native="crearEmpleado(model), agregarEmpleado = false">Guardar</v-btn>
          <v-btn color="red" flat @click.native="agregarEmpleado = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</v-flex>
</template>




<script>
import {empleadoService} from '@/services/Empleado.service.js'
import {cargoService} from '@/services/Cargo.service.js'
export default {
  data () {
    return {
      agregarEmpleado: false,
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
        { text: 'Rut', value: 'rut' },
        { text: 'Cargo', value: 'cargo' }
      ],
      items: [],
      model: {
        nombre: '',
        rut: '',
        id_cargo: ''
      },
      cargos: []
    }
  },
  mounted () {
    empleadoService.query().then(data => {
      this.items = data.body
      console.log('--EMPLEADOS--')
      console.log(this.items)
    })
    cargoService.query().then(data => {
      this.cargos = data.body
    })
  },
  methods: {
    crearEmpleado (model) {
      empleadoService.save(this.model).then(data => {
        this.empleados.push(model)
      }, err => {
        console.log(err)
        if (err.status) {
          alert(err.body)
        }
      })

      console.log('--EMPLEADO--')
      console.log(this.model)
    }
  }
}
</script>