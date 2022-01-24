const Counter = {
    data() {
      return {
        tareas:[],
        titulo:"",

        completas:false,
        incom:false,
        todas:false,
        completadas:[],
        incompletas:[],
        buscar:''
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
            this.anadirLocalStorage();//llamamos al metodo
          },
        borrar(i){
          this.tareas.splice(i,1);
          this.anadirLocalStorage();//llamamos al metodo 
        },
        borrarTareasCompletadas(){
          this.tareas=this.tareas.filter((nota)=>{
              return !nota.completada;
          })
          this.anadirLocalStorage();//llamamos al metodo 
        },
        anadirLocalStorage(){
          localStorage.setItem('notas', JSON.stringify(this.tareas));
        },
        
        mostrarTareasCompletadas(){
          
         this.completas=!this.completas;
         this.incom= false;
         this.todas=false;

        

        },
        mostrarTareasActivas(){
          this.incom= !this.incom;
          this.completas=false;
          this.todas=false;

          
        },
        mostrarTodasTareas(){
          this.todas=!this.todas;
          this.incom= false;
          this.completas=false;
          

        }

        
    },
    computed:{
      miListaFiltrada: function(){
        let listaFiltrada;
        if(this.buscar==""){
            listaFiltrada=this.tareas;
        
        }else{
            listaFiltrada= this.tareas.filter((nota)=>{
                if(nota.titulo.indexOf(this.buscar)>=0){
                    return true;
                }else{
                    return false;
                }
            }); 
        
            listaFiltrada=listaFiltrada.sort((nota1, nota2)=>{
            if(nota1.prioridad>nota2.prioridad){
                return -1;
            }
            if(nota1.prioridad<nota2.prioridad){
                return 1;
            }
            return 0;
        })
      }
        if(this.todas==true){
          listaFiltrada= this.tareas.filter((nota)=>{
            if(nota.completada==true || nota.completada==false){
                return true;
            }else{
                return false;
            }
        }); 
      }
        if(this.completas==true){
          listaFiltrada= this.tareas.filter((nota)=>{
            if(nota.completada==true){
                return true;
            }else{
                return false;
            }
        });
      }
        if(this.incom==true){
          listaFiltrada= this.tareas.filter((nota)=>{
            if(nota.completada==false){
                return true;
            }else{
                return false;
            }
        });
        }

        return listaFiltrada;
    },
      cuenta(){
        var terminadas = 0;
        for(let i = 0; i<this.tareas.length; i++){
          if(this.tareas[i].completada){
              terminadas++;
          }
        }
        return terminadas;
      },
      anadirCompletadas(){
        console.log('aa')
        if(this.tareas.length >= 1){
          for(t of this.tareas){
            if(t.competada == true){
              this.completadas.push(t);
              console.log( this.completadas)
             }
          }
          return this.completadas;
        }
        return 0;
      },
      anadirIncompletas(){
        if(this.tareas.length >= 1){
          for(t of this.tareas){
            if(t.competada == false){
              this.incompletas.push(t);
             }
          }
          return this.incompletas;
        }
        return 0
        
      }


      },
    mounted(){
      if(localStorage.getItem('notas')){
        this.tareas = JSON.parse(localStorage.getItem('notas'));
        $('uno').show();
        $('dos').hide();
        $('tres').hide();
      }
    }
  }
  window.onload = () =>{
  Vue.createApp(Counter).mount('#appVue')
}
//falta:
/*
3-Las tareas se muestran siempre ordenadas por prioridad (alta a baja). this.tareas.sorted()
4-Cada tarea muestra los minutos pasados desde que se dió de alta.
5-El proyecto se realiza con la ayuda de VueCLI y usando componentes.
*/