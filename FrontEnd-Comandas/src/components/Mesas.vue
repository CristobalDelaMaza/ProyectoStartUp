<template>
	<v-flex sm10 offset-xs1 class="center">
		<v-container grid-list-xl class="white">
			<h2>Mesas</h2>
			<br></br>
			<v-layout row wrap>
				<v-flex xs8  offset-xs2 class="text-xs-center">
					<v-layout row wrap >
						<v-flex xs3 >
							<v-btn fab dark large class="elevation-8 orange accent-4" @click.native.stop="nuevaComanda = !nuevaComanda" >1</v-btn>
						</v-flex>
						<v-flex xs3>
							<v-btn fab dark large class="elevation-8 orange accent-4" @click.native.stop="nuevaComanda = !nuevaComanda" >2</v-btn>
						</v-flex>
						<v-flex xs3>
							<v-btn fab dark large class="elevation-8 orange accent-4" @click.native.stop="nuevaComanda = !nuevaComanda" >3</v-btn>
						</v-flex>
						<v-flex xs3>
							<v-btn fab dark large class="elevation-8 orange accent-4" @click.native.stop="nuevaComanda = !nuevaComanda" >4</v-btn>
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-flex xs3>
							<v-btn fab dark large class="elevation-8 orange accent-4" @click.native.stop="nuevaComanda = !nuevaComanda" >5</v-btn>
						</v-flex>
						<v-flex xs3>
							<v-btn fab dark large class="elevation-8 orange accent-4" @click.native.stop="nuevaComanda = !nuevaComanda" >6</v-btn>
						</v-flex>
						<v-flex xs3>
							<v-btn fab dark large class="elevation-8 orange accent-4" @click.native.stop="nuevaComanda = !nuevaComanda" >7</v-btn>
						</v-flex>
						<v-flex xs3>
							<v-btn fab dark large class="elevation-8 orange accent-4" >8</v-btn>
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-flex xs3>
							<v-btn fab dark large class="elevation-8 orange accent-4" @click.native.stop="nuevaComanda = !nuevaComanda" >9</v-btn>
						</v-flex>
						<v-flex xs3>
							<v-btn fab dark large class="elevation-8 orange accent-4" @click.native.stop="nuevaComanda = !nuevaComanda" >10</v-btn>
						</v-flex>
						<v-flex xs3>
							<v-btn fab dark large class="elevation-8 orange accent-4" @click.native.stop="nuevaComanda = !nuevaComanda" >11</v-btn>
						</v-flex>
						<v-flex xs3>
							<v-btn fab dark large class="elevation-8 orange accent-4" @click.native.stop="nuevaComanda = !nuevaComanda" >12</v-btn>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>
		<v-dialog v-model="nuevaComanda" max-width="650px">
			<v-card>
        <v-card-title>
          <span class="headline">Agregar Comanda</span>
        </v-card-title>
        <v-card-text>
          <v-form action="crearComanda(model)">
            <v-layout wrap>
                Menu:
              <v-flex xs12>
                <select v-model="model.id_menu" label="Menu" item-value="id">
                  <option v-for="menu in menus" v-bind:value="menu.id"> {{ menu.nombre }}
                  </option>
                </select>
              </v-flex>
            </v-layout>
              <v-flex xs12>
                <v-select multiple :options="acompannamientos" v-bind:items="acompannamientos" label="Acompaññamientos" item-value="value"></v-select>
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
import {menuComandaService} from '@/services/MenuComanda.service.js'
import {menuService} from '@/services/Menu.service.js'
export default {
  data () {
    return {
      nuevaComanda: false,
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
        id_comanda: 1,
        comentario: 'sin comentario',
        id_menu: ''
      },
      comandas: [],
      menus: [],
      acompannamientos: [
        {text: 'papas fritas', value: 1},
        {text: 'pure', value: 2},
        {text: 'palta', value: 3},
        {text: 'arroz', value: 4}
      ]
    }
  },
  mounted () {
    comandaService.query().then(data => {
      this.comandas = data.body
    })
    menuService.query().then(data => {
      this.menus = data.body
    })
    menuComandaService.query().then(data => {
      this.items = data.body
    })
  },
  methods: {
    crearComanda (model) {
      menuComandaService.save(this.model).then(data => {
        this.menuComandas.push(model)
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