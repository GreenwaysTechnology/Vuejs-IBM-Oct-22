import { createApp } from 'vue'
import App from './App.vue'
import StatusBar from './components/global/StatusBar.vue'
import { myPlugin } from './plugins/myPlugin'
// import './assets/main.css'
// console.log(App)
// const app = createApp(App)
// app.component('StatusBar', StatusBar)
// app.mount('#app')

createApp(App)
     //key-Component Name,value-Component Reference(Object)
     .component('StatusBar', StatusBar)
     .provide('company', 'IBM')
     .directive('highlight', (element, binding) => {
          //binding is reference of Binding object which can capture the parameters
          //passed as part of directive
          console.log(binding)
          if(binding.modifiers.bar){
               element.style.color = 'green'
          }
          element.style.backgroundColor = binding.value
          element.addEventListener('mousemove', (evt) => {
               //element.style.backgroundColor = 'yellow'
               highLight('yellow')
          })
          //remove style
          element.addEventListener('mouseleave', (evt) => {
               // element.style.backgroundColor = null
               highLight(null)
          })
          const highLight = (color) => {
               element.style.backgroundColor = color
          }
     })
     .use(myPlugin)
     .mount('#app')