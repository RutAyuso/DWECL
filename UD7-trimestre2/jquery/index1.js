


const Counter = {
    data() {
      return {
        listaLinks:[{nombre:"Rut", enlace:"https://www.google.es/"},{nombre:"EnlaceDos", enlace:"https://es.yahoo.com/"}]
        
    }
    }
  }
  window.onload = () =>{
  Vue.createApp(Counter).mount('#appVue')
}