import Vue from 'vue'
import App from './App.vue'
import commonComponents from './components';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

commonComponents.forEach(component => {
    Vue.component(component.name, component);
});

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(VueMaterial)