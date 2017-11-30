<template>
	<v-flex sm10 offset-xs1 class="center">
		<v-card >
			<v-card-title>
				Menus
			</v-card-title>
			<v-data-table
			v-model="selected"
			v-bind:headers="headers"
			v-bind:items="items"
			select-all
			v-bind:pagination.sync="pagination"
			item-key="name"
			class="elevation-1"
			>
			<template slot="headers" slot-scope="props">
				<tr>
					<th>
						<v-checkbox
						primary
						hide-details
						@click.native="toggleAll"
						:input-value="props.all"
						:indeterminate="props.indeterminate"
						></v-checkbox>
					</th>
					<th v-for="header in props.headers" :key="header.text"
					:class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
					@click="changeSort(header.value)"
					>
					<v-icon>arrow_upward</v-icon>
					{{ header.text }}
				</th>
			</tr>
		</template>
		<template slot="items" slot-scope="props">
			<tr :active="props.selected" @click="props.selected = !props.selected">
				<td>
					<v-checkbox
					primary
					hide-details
					:input-value="props.selected"
					></v-checkbox>
				</td>
				<td>{{ props.item.name }}</td>
				<td class="text-xs-right">{{ props.item.calories }}</td>
				<td class="text-xs-right">{{ props.item.fat }}</td>
				<td class="text-xs-right">{{ props.item.carbs }}</td>
				<td class="text-xs-right">{{ props.item.protein }}</td>
				<td class="text-xs-right">{{ props.item.sodium }}</td>
				<td class="text-xs-right">{{ props.item.calcium }}</td>
				<td class="text-xs-right">{{ props.item.iron }}</td>
			</tr>
		</template>
	</v-data-table>
	<div class="text-xs-right pt-5">
		<v-btn outline  fab color="green darken-4" @click.native.stop="agregarMenu = !agregarMenu">
			<v-icon>add</v-icon>
		</v-btn>
		<v-btn outline  fab color="amber darken-4">
			<v-icon>done</v-icon>
		</v-btn>
	</div>
</v-card>
<v-dialog v-model="agregarMenu" max-width="650px">
	<v-card>
		<v-card-title>
			<span class="headline">Agregar Menú</span>
		</v-card-title>
		<v-card-text>
			<v-container grid-list-md>
				<v-layout wrap>
					<v-flex xs12>
						<v-select
						v-bind:items="select"
						label="Ensalada"
						item-value="text"
						></v-select>
					</v-flex>
					<v-flex xs12>
					<v-select
						v-bind:items="select"
						label="Plato de Fondo"
						item-value="text"
						></v-select>
					</v-flex>
					<v-flex xs12>
					<v-select
						v-bind:items="select"
						label="Postre"
						item-value="text"
						></v-select>
					</v-flex>
					<v-flex xs4>
					<v-checkbox label="Pan"></v-checkbox>	
					</v-flex> 
					<v-flex xs4>
					<v-checkbox label="Jugo/Bebida"></v-checkbox>	
					</v-flex>
					<v-flex xs4>
					<v-checkbox label="Café/Té"></v-checkbox>		
					</v-flex>
				</v-layout>
			</v-container>
			<small>*Campos requeridos</small>
		</v-card-text>				<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn flat color="green" @click.native="agregarMenu = false">Guardar</v-btn>
			<v-btn flat color="red" @click.native="agregarMenu = false">Cancelar</v-btn>
		</v-card-actions>
	</v-card>
</v-dialog>
</v-flex>
</template>
<script>
  export default {
    data () {
      return {
        agregarMenu: false,
        select: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' }
        ]
      }
    }
  }
</script>