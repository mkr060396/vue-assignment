<template>
<v-container fluid>
          <v-row class="pa-2">
              <v-col cols="12" lg="3">
          <v-select dark solo label="Category" v-model="filters.category" :items="categories"></v-select>
          </v-col> 
           <v-col cols="12" lg="3">
               <v-dialog width="500">
               <template v-slot:activator="{on,attrs}">
                <v-btn large dark color="#c80046" v-bind="attrs"
                 v-on="on">Add <v-icon  class="ml-1">mdi-plus</v-icon> </v-btn>               
                 </template>
                 <v-card dark>
                    <CardCreateForm></CardCreateForm>
                 </v-card>
                </v-dialog>
          </v-col>        
      </v-row >
          <v-row class="pa-5">
        <template v-for="some in allSomes"> 
          <v-card width="440" :key="some.id"  dark  class="pa-3 ma-3" height="250">
              <v-row class="d-flex align-center justify-space-between">
                  <v-col>
                      <v-card-title>{{some.name}}</v-card-title> 
                  </v-col>
                
             
                  <v-btn icon class="ma-2"> 

               <v-dialog width="500">
  
               <template v-slot:activator="{on,attrs}">
                <v-icon v-bind="attrs"
                 v-on="on">mdi-pencil</v-icon>
                </template>
                <v-card dark>                 
                    <CardEditForm></CardEditForm>
                </v-card>
               
                </v-dialog>
                  </v-btn>  
                  </v-row>
              
              <v-chip class="ml-3" color="#c80046">{{some.category}}</v-chip>
               <v-card-subtitle>Created by: {{some.createdBy}}</v-card-subtitle>
              <v-card-text>{{some.description}}</v-card-text>
          </v-card>
          </template>
      </v-row>
</v-container>

</template>

<script>

import {mapState,  mapGetters, mapActions} from "vuex";
import CardCreateForm from "@/components/CardCreateForm.vue"
import CardEditForm from "@/components/CardEditForm.vue"

export default {
    components: {
        CardCreateForm,
        CardEditForm
    },
data() {
    return {
        name: "", 
        description: "",
        createdBy: "",
        dialog: false,
        categories: ['Discussion forum', 'Media Sharing Networks', 'Social Networks',],
        filters: {
            category: "",
        }
        
    }
},

computed: {
...mapState(["somes", "categories"]),
 ...mapGetters(["allSomes"]),
//Category filter 
filteredCategories(){
      let sortByCategory = this.allSomes.filter((some) => {
        return some.category.toLowerCase().includes(this.category.toLowerCase());
      })
      return sortByCategory;
    }
},
methods: {
...mapActions(["getSomes"])
},

async created() {
this.getSomes();
},
}

</script>

<style>
.v-card__subtitle, .v-card__text {
    color:white!important;
}
</style>