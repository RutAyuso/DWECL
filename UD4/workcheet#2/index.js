window.addEventListener("load", main);

function main() { 
    document.getElementById("cont").style.backgroundColor = "#A3E4D7";
    document.getElementById("cont").style.maxWidth = "210px";
    document.getElementById("cont").style.maxWidth = "210px";
    //document.getElementsByTagName("legend").style.fontFamily ="Courier";
    var lista_libros = new BookList();

    if(localStorage.getItem('lista_libro')){
        lista_libros = JSON.parse(localStorage.getItem('lista_libro'));
        for(let i = 0 ; i<lista_libros.libros.length ; i++){
            let li_nueva = document.createElement("li");
            let texto = lista_libros.libros[i].title + ' ' + lista_libros.libros[i].genre + ' ' + lista_libros.libros[i].author +  ' ' + lista_libros.libros[i].readDate ;
            li_nueva.innerHTML= texto;
            //li_nueva.addEventListener("click",borrar_li);
            document.getElementById("lista").appendChild(li_nueva);
        }
    }

    document.getElementById("boton").addEventListener("click",(e)=>{
        e.preventDefault();
        let title = document.getElementById("title").value;
        let genre = document.getElementById("genre").value;
        let author = document.getElementById("author").value;
        let readDate = document.getElementById("readDate").value;

        libro = new Book(title,genre,author,readDate);
        lista_libros.add(libro);
        localStorage.setItem("lista_libro", JSON.stringify(lista_libros));

        let li_nueva = document.createElement("li");
        let texto = title + ' ' + genre + ' ' + author +  ' ' + readDate ;
        li_nueva.innerHTML= texto;
        //li_nueva.addEventListener("click",borrar_li);
        document.getElementById("lista").appendChild(li_nueva);
        
    });

}
var b1 = document.getElementById("boton");


class BookList{
    constructor() {
        this.readBooks = 0;
        this.notReadYet = 0;
        this.next = 0;
        this.current = 0;
        this.last = 0;
        this.libros = [];
    }

    add(book){
        this.libros.push(book);
    }
    
    nuevo(lista){
        this.readBooks = readBooks;
        this.notReadYet = 0;
        this.next = 0;
        this.current = 0;
        this.last = 0;
        this.libros = [];
    }


    finishCurrentBook(){
        this.notReadYet -= 1;
        this.readBooks = this.current;
        this.last.readDate = new Date(Date.now());
        this.last = this.current;
        this.current = this.next;
        this.last.read = true;
        var i = 0;
        if(this.notReadYet != 0){
            while(this.libros[i].read == true || this.libros[i] == this.current)
                i++;
            
            this.next = this.libros[i];
        }
        else
            console.log("no hay mas libros para leer");
    }    
}

class Book{
    constructor(title,genre,author,readDate = "") {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.readDate =readDate;
    }

}


