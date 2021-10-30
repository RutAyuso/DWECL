class BookList{
    constructor(read,notReadYet,next,current,last) {
        this.readBooks = read;
        this.notReadYet = notReadYet;
        this.next = next;
        this.current = current;
        this.last = last;
        this.all = [];
    }

    add(book){
        this.all.push(book);
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
            while(this.all[i].read == true || this.all[i] == this.current)
                i++;
            
            this.next = this.all[i];
        }
        else
            console.log("no hay mas libros para leer");
    }    
}

class Book{
    constructor(title,genre,author,read,readDate = "") {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }

}

libro_cero = new Book("Los juegos del hambre","Ciencia Ficción/ Aventuras","Suzanne Collins",true, new Date());
libro_uno = new Book("Los juegos del hambre: En llamas","Ciencia Ficción/ Aventuras","Suzanne Collins",false, new Date());
libro_dos = new Book("Los juegos del hambre: Sinsajo","Ciencia Ficción/ Aventuras","Suzanne Collins",false, new Date());
libro_tres = new Book("Los juegos del hambre: Balada de pájaros cantores y serpientes","Ciencia Ficción/ Aventuras","Suzanne Collins",false, new Date());

lista = new BookList(1,2,libro_dos,libro_uno,libro_cero);

lista.add(libro_cero);
lista.add(libro_uno);
lista.add(libro_dos);
lista.add(libro_tres);
