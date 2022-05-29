<template>
  <v-container>
      <v-row>

            <v-card color="transparent" class="pa-5" width="800">
            <v-card-title>EDIT SOME</v-card-title>
            <v-card-text>
          <v-form @submit.prevent="onSubmit" ref="form">
          <v-text-field
            outlined
            solo
            v-model="name"
            label="Name"
          ></v-text-field>
         <v-textarea
            outlined
             solo
            v-model="description"
            label="Description"
          ></v-textarea>      
            <v-text-field
            outlined
            solo
            v-model="createdBy"
            label="Creator"
          ></v-text-field>
           <v-select 
            outlined
            solo
            :items="categories"
            label="Category"></v-select> 
            <v-btn type="submit" large color="#c80046" class="mt-5">Save</v-btn>
            </v-form>
            </v-card-text>
        </v-card>   
      </v-row>

  </v-container>
</template>

<script>
import {mapState, mapActions} from "vuex";


export default {
data() {
    return {
        name: "", 
        description: "",
        createdBy: "",
        category: "",
        dialog: false,
        categories: ['Discussion forum', 'Media Sharing Networks', 'Social Networks',],
     
    }
},

computed: {
...mapState(["somes"]),
},


methods: {
...mapActions(["createSome"]),

onSubmit(e){
 e.preventDefault();
 this.createSome(this.name) 
}
}
}
</script>

<style>

.v-card {
  background-color: #1e1e1e; 
}

</style>