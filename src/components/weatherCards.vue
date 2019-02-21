<template>

<div class="container" v-if="cardsList"> 
        <md-card md-with-hover class="card-hover" v-for="(item, index) in cardsList" :key="item">
            <md-ripple>           
                <md-card-header>
                <div class="md-title temp">{{item.current.temp_c}}° C / {{item.current.temp_f}}° F</div>
                <div class="md-title">{{item.location.name}}</div>
                <div class="md-title">{{item.location.country}}</div>
                </md-card-header>

                <md-card-content>
                <img :src="item.current.condition.icon">
                <div class="md-subhead">{{item.current.condition.text}}</div>
                </md-card-content>

                <md-button class="md-icon-button md-dense md-raised md-primary close-btn" v-on:click="removeCard(index)">
                <p>X</p>
                </md-button>
            </md-ripple>
        </md-card> 
</div>

</template>

<script>
  export default {
    name: 'weatherCards',
    props: {
        cardsList: []
    },

    methods: { 
        removeCard: function(index) {
            this.cardsList.splice(index, 1);
        }
    },  
  }
</script>

<style lang="scss">

.close-btn { 
    background-color: red !important; 
    margin-bottom: 10px;
}

.container { 
  text-align: center;
  margin-top: 10px;
}

.md-card {
    margin-top: 20px;
    width: 25%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}

.md-title {
    &.temp{
        font-weight: bold;
    }
}

</style>