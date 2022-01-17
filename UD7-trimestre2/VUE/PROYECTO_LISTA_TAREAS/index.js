const Counter = {
    data() {
      return {
        tareas:[],
        titulo:"",
        completada:false
    }
    }
    ,
    methods:{
        añade(){
            this.tareas.push({titulo:this.titulo, completada: this.completada});
        },

        completar(i){
            this.tareas[i].completada = true;
        },

        borrar(i){
          this.tareas.splice(i,1);
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
    }
  }
  window.onload = () =>{
  Vue.createApp(Counter).mount('#appVue')
}