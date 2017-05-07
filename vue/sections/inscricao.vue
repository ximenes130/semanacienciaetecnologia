<template>
     <div>
          <v-card class="mt-4">
               <v-card-row class="green darken-1">
                    <v-card-title>
                         <span class="white--text">Inscrições</span>
                         <v-spacer></v-spacer>
                    </v-card-title>
               </v-card-row>
               <v-card-row height="500px">
                    <script src="https://doity.com.br/js/box_inscricao.js" type="text/javascript"></script>
                    <iframe scrolling="0"
                         id="iframe-inscricao"
                         onload="setIframeHeight(this.id)"
                         style="width: 100%;height: 500px;border: none;"
                         src="https://doity.com.br/teste-301/passo1">
                    </iframe>
               </v-card-row>
          </v-card>
     </template>
</div>
