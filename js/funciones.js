function colorFondo(color) {
    var fondo1 =document.querySelector('body').style.backgroundColor = color
}


var texto = document.getElementById('text')
var contar = document.getElementById('contar')

texto.addEventListener ( 'keyup', function () {
contar.innerText = texto.value.length
    })


    

    