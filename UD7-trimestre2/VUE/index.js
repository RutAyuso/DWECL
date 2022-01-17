const Counter = {
    data() {
      return {
        counter: 0,
        midato : 'Rut',
        listaNombres : ["jose","pepe","juan"],
        nuevoNombre: "Escribe tu nombre",
        listaPersonas:[{nombre:"rut",apellido: "Ayuso Comino",edad:"18"},{nombre:"Manuel",apellido: "Ayuso Terrones",edad:"58"}],
        listaPersonas2:["eden", "Cristina"],
        mostrar:false,
        nVariable: "<h1>Hola</h1>",
        id: "32"
        
    }
    }
    ,
    methods:{
        incrementa(){
            console.log("salta");
            this.counter++;
            this.listaNombres.push(this.nuevoNombre);
            this.nombre ="";
            this.mostrar=true
        }
    }
  }
  window.onload = () =>{
  Vue.createApp(Counter).mount('#appVue')
}