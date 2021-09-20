
        var alumnos = [
            { nombre: 'Juan Gomez', nota: 7 },
            { nombre: 'Pedro Rodriguez', nota: 4 },
            { nombre: 'Roxana García', nota: 8 },
            { nombre: 'Luciano Lopez', nota: 5 }, 
            { nombre: 'Fernanda Gimenez', nota: 6 },
            { nombre: 'Florencia Martinez', nota: 10 },
            { nombre: 'Raul Sanchez', nota: 7 }, 
            { nombre: 'Sandra Figueroa', nota: 8 }
            ];   
       
            var aprobados = alumnos.filter( function (alumnos) {
                return alumnos.nota >=7;
            })
            
            for (var i=0; i<aprobados.length; i++) {
                document.write('<p> Alumno: '+ aprobados[i].nombre + '<br> Nota: ' + aprobados[i].nota + ' </p>')
            }