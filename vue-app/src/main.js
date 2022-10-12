import { createApp } from 'vue'
import App from './App.vue'
import StatusBar from './components/global/StatusBar.vue'
// import './assets/main.css'
// console.log(App)
// const app = createApp(App)
// app.component('StatusBar', StatusBar)
// app.mount('#app')

createApp(App)
     //key-Component Name,value-Component Reference(Object)
    .component('StatusBar', StatusBar)
    .mount('#app')