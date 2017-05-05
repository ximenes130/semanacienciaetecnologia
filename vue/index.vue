<template>
	<div>
		<v-toolbar img="">
			<v-toolbar-title>Hello Uorde!</v-toolbar-title>
		</v-toolbar>

		<!-- Seção sobre -->

		<v-card class="ma-3" >
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

		<v-card horizontal class="ma-3">
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

	</div>
</template>
