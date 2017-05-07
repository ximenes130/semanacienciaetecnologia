<template>
     <div>

          <v-card horizontal class="mt-4">
               <v-card-column class="amber darken-1 white--text">
                    <v-card-row height="75px" class="brown white--text">
                         <v-card-text>
                              <strong>Inscrições abertas</strong>
                              <div>blablabla</div>
                         </v-card-text>
                    </v-card-row>
                    <v-card-row>
                         <v-spacer></v-spacer>

                         <v-card-row actions class="brown darken-2">
                              <v-dialog  fullscreen transition="v-dialog-bottom-transition" :overlay="false">
                                   <v-btn flat class="white--text"  slot="activator">
                                        <v-icon left>assignment_ind</v-icon>inscrever-se
                                   </v-btn>

                                   <v-card>
                                        <v-card-row>
                                             <v-toolbar>
                                                  <v-btn icon="icon" @click.native="dinscricao = false">
                                                       <v-icon>close</v-icon>
                                                  </v-btn>
                                                  <v-toolbar-title>Settings</v-toolbar-title>
                                             </v-toolbar>
                                             <script src="https://doity.com.br/js/box_inscricao.js" type="text/javascript"></script>
                                             <iframe scrolling="0"
                                             id="iframe-inscricao"
                                             onload="setIframeHeight(this.id)"
                                             style="width: 100%;height: 500px;border: none;"
                                             src="https://doity.com.br/teste-301/passo1">
                                        </iframe>
                                   </v-card-row>
                              </v-card>
                         </v-dialog>
                    </v-card-row>
               </v-card-row>
          </v-card-column>
          <v-card-row img="/public/doc-images/cards/store.jpg" height="125px"></v-card-row>
     </v-card>
</div>
