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
			<span class="headline">Comanda</span>
		</v-card-title>
		<v-card-text>
			<v-container grid-list-md>
				<v-layout wrap>
					<v-flex xs12>
					<v-text-field label="Número de Clientes" required></v-text-field>	
					</v-flex>
					<v-flex xs12>
					
					</v-flex>
					<v-flex xs12>
					<v-select
						v-bind:items="select"
						label="Menú"
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
			<v-btn flat color="green" @click.native="nuevaComanda = false">Guardar</v-btn>
			<v-btn flat color="red" @click.native="nuevaComanda = false">Cancelar</v-btn>
		</v-card-actions>
	</v-card>
</v-dialog>
	</v-flex>
</template>

<script>
  export default {
    data () {
      return {
        nuevaComanda: false,
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