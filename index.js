function Pelicula(id, titulo, descripcion, anio, duracion, director){

    //ATRIBUTO

    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.anio = anio;
    this.duracion = duracion;
    this.actores = [];
    this.director = director;

    // METODOS
    this.cargarTitulo = function(valorTitulo) {

        this.titulo = valorTitulo;
    }

    this.cargarDescripcion = function(valorDescripcion) {

        this.descripcion = valorDescripcion;
    }

    this.cargarAnio = function(valorAnio) {

        this.anio = valorAnio;
    }

    this.cargarDuracion = function(valorDuracion) {

        this.duracion = valorDuracion;
    }

    this.cargarDirector = function(valorDirector) {

        this.director = valorDirector;
    }

    this.cargarActor = function(valorActor) {

        this.actores.push(valorActor);

    }

    this.mostrarActores = function() {

        for(i = 0; i < this.actores.length; i++) {

            console.log('Actores: ' + this.actores[i]);

        }
    }

    this.mostrarFichaPelicula = function() {

        console.log('ID: ' + this.id);
        console.log('Titulo: ' + this.titulo);
        console.log('Descripcion: ' + this.descripcion);
        console.log('Año: ' + this.anio);
        console.log('Duracion: ' + this.duracion + ' min');
        this.mostrarActores();
        console.log('Director: ' + this.director);

    }


}



var elPadrino = new Pelicula(1);

elPadrino.cargarTitulo('El ¨Padrino');
elPadrino.cargarDescripcion('El padrino es una película estadounidense de 1972...');
elPadrino.cargarAnio(1972);
elPadrino.cargarDuracion(175);
elPadrino.cargarActor('Marlon Brando');
elPadrino.cargarActor('Al Pacino');
elPadrino.cargarDirector('Francis Ford Coppola');

