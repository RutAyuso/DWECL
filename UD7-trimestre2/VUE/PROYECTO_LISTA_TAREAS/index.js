const Counter = {
    data() {
      return {
        tareas:[],
        titulo:""
    }
    }
    ,
    methods:{
        añade(){
          this.tareas.push({titulo:this.titulo, completada: false, fecha: new Date().toLocaleString(), prioridad: 0});
          this.anadirLocalStorage();
        },

        completar(i){
            this.tareas[i].completada = !this.tareas[i].completada;
            this.anadirLocalStorage();
          },

        borrar(i){
          this.tareas.splice(i,1);
          this.anadirLocalStorage();
        },

        anadirLocalStorage(){
          localStorage.setItem('notas', JSON.stringify(this.tareas));

        }
        
    },
    computed:{
      cuenta(){
        var terminadas = 0;
        for(let i = 0; i<this.tareas.length; i++){
          if(this.tareas[i].completada){
              terminadas++;
          }
        }
        return terminadas;
      }

      
    },

    mounted(){
      if(localStorage.getItem('notas')){
        this.tareas = JSON.parse(localStorage.getItem('notas'));
      }
    }
  }
  window.onload = () =>{
  Vue.createApp(Counter).mount('#appVue')
}