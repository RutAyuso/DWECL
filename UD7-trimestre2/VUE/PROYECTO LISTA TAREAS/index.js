const Counter = {
    data() {
      return {
        tarea: "Escribe tarea",
        tareas:[],
        mostrar:false,
        total: 0 
    }
    }
    ,
    methods:{
        añade(){
            this.counter++;
            this.tareas.push(this.tarea);
            this.total++;


        }
        
    }
  }
  window.onload = () =>{
  Vue.createApp(Counter).mount('#appVue')
}