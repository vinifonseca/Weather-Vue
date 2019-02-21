<template>

<div class="container">  
    <h2>{{ data.Name }}</h2>
    <input type="text" class="searchInput" :value="data.value" v-on:change="signalChange"/>  
</div>

</template>

<script>
  export default {
    name: 'searchBar',
    props: {
        data: {
            Name: String,
            Value: String
        }
    },

    methods: {
      signalChange: function(evt){
        this.$emit('change-input', event.target.value);
      }  
    },  
  }
</script>

<style lang="scss">

.container {
  text-align: center;
}

.searchInput{
    height: 30px;
    width: 240px;
    font-size: 20px;
}

</style>