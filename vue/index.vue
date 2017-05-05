<template>
	<div>

		<v-toolbar fixed>
			<v-toolbar-title>Hello World!</v-toolbar-title>
			<v-toolbar-items><!--  class="hidden-md-and-down"> -->
				<v-toolbar-item ripple href="#sobre">Link</v-toolbar-item>
				<v-toolbar-item ripple href="#mapa">Link</v-toolbar-item>
				<v-toolbar-item ripple>Link</v-toolbar-item>
			</v-toolbar-items>
		</v-toolbar>


		<br/><br/><br/>

		<v-container fluid="fluid">     <!-- container de largura responsiva-->
		  <v-row>
		    <v-col xs12 sm10 offset-sm1 xl8 offset-xl2>

				<!-- Seção sobre -->

				<v-card class="mt-3" id="sobre">
				  <v-card-row class="teal darken-4">
				    <v-card-title>
				      <span class="white--text">Sobre o evento</span>
				    </v-card-title>
				  </v-card-row>

				  <v-parallax src="resources/images/derek-liang-239062.jpg" height="300"></v-parallax>

				  <v-card-row actions class="teal darken-4 mt-0">
				    <v-btn flat class="white--text">Get Started</v-btn>
				    <v-spacer></v-spacer>
				    <v-btn icon>
				      <v-icon class="white--text">explore</v-icon>
				    </v-btn>
				  </v-card-row>
				</v-card>

				<!-- Seção Localização -->
				<v-card horizontal class="mt-3" id="#mapa\">
				    <v-card-row img="resources/images/derek-liang-239062.jpg" height="130px"></v-card-row>
				    <v-card-column>
				      <v-card-row height="75px" class="brown darken-2 white--text">
				        <v-card-text>
				          <strong>Reservation at Lazy Bear</strong>
				          <div>Feb 23, 7:00pm</div>
				        </v-card-text>
				      </v-card-row>
				      <v-card-row actions class="brown darken-4">
				        <v-btn flat class="white--text">
				          <v-icon left>directions</v-icon>Directions
				        </v-btn>
				      </v-card-row>
				    </v-card-column>
				  </v-card>

			  </v-col>
		  </v-row>
		</v-container>
	</div>
</template>
