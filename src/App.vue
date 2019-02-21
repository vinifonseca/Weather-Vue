<template>
  <div id="app" class="container">    
    <md-progress-spinner v-if="loading" md-mode="indeterminate"></md-progress-spinner>

    <div v-if="!loading">
      <div class="header-icons">
        <md-button class="md-icon-button md-accent"  href="https://www.w3schools.com">       
            <img src="./assets/github.svg" alt="git">            
        </md-button>

        <md-button class="md-icon-button" href="https://www.linkedin.com/in/vinicius-fonseca-3b7ab2a6/">        
            <img src="./assets/linkedin.svg" alt="linkdin">         
        </md-button>
      </div>     

      <searchBar :data="searchbatData" v-on:change-input="inputChange"></searchBar>
      <weatherCards :cardsList="cardsList"></weatherCards>
    </div>  
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app', 
  data () {
    return {
      loading: true,
      cardsList: [],
      searchbatData: {
        Name: "Type a city name",
        Value: null
      }
    }
  },
  methods: {
    inputChange: function(value){
      this.loading = true;
			axios.get('http://api.apixu.com/v1/current.json?key=b04cf2c9a9404ba6ad8201832192002&q=' + value)
      .then(response => {
        this.cardsList.push(response.data); 
      })
      .catch(error => {
        //TODO handle error
        console.log(error);
      })
      .finally(() => this.loading = false)
    }  
  },
  mounted() {
    this.loading = true;
    axios.get('http://api.apixu.com/v1/current.json?key=b04cf2c9a9404ba6ad8201832192002&q=auto:ip')
      .then(response => {
        this.cardsList.push(response.data); 
      })
      .catch(error => {
        //TODO handle error
        console.log(error)     
      })
      .finally(() => this.loading = false)
  }
}
</script>

<style lang="scss">

.header-icons{  
  display: inline;   
  margin-left: 85%;
}
.md-progress-spinner{
  margin-top: 40vh;
}

</style>
