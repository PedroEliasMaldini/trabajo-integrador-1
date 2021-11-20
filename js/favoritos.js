window.addEventListener('load', function () {

//se define "favoritos" como array vacio --> por si no se creo aún storage 
let favoritos = [];

//si fue creada la clave "favoritos" en localStorage 
if (localStorage.getItem('favoritos')) {

    //verificar como las propiedades llegan como string
    console.log(localStorage);

    // gurdar datos del storage 
    let recuperoStorage = localStorage.getItem('favoritos');

    //y los asigna a la variable "favoritos", transformados en array 
    favoritos = JSON.parse(recuperoStorage);

    //verificar en consola la transformación del array
    console.log(favoritos)
}

//contenedor de la lista de favoritos 
let seccionFav = document.querySelector(".favoritos-coontenedor");
//contendor cuando no hay favoritos 
let seccionNoFav = document.querySelector(".no-fav")
//vamos a necesitar esto para armar el url de la img
const imgUrl = 'https://image.tmdb.org/t/p/w500/'

//si no hay favoritos en la lista 

if (favoritos.length == 0) {
    //muestra la leyenda apropiada si es que no hay favoritos 
    seccionNoFav.innerHTML += `
    <h3> No hay favoritos </h3>
    ` 
} else { //si hay favoritos en el array "favoritos"

    //buscamos cada uno de los gif y los imprimimos en pantalla (para esto un for)
    for (let i =0; i < favoritos.length; i++) {

        buscarAndMostrarFavoritos (favoritos[i]); 
        //para mayor proligidad definimos una funcion, que se ejuctara dentro del bucle for para cada fav (la funcion la definimos despues)
    }
    
}

//definicion de la funcion mostrar los gifs favoritos (se ejecuta dentro del bucle for de mas arriba)
function buscarAndMostrarFavoritos (id) {
    
    //se guarda el endpoint en una variable "urlPP" para traer info del gif en cada enpoint 
    let urlPP = `https://api.themoviedb.org/3/movie/${id}?api_key=5879ede367a1cc1dbb7ecaf35f419c29`;

    //pedidos al servidor 
    fetch (urlPP)
    .then (function(respuesta){
        return respuesta.json();
    })
    .then (function(datos) {
        console.log(datos);
        seccionFav.innerHTML += `
        <li class="watch-item-fav">
                        <div class="watch-img-fav">
                            <img src="${imgUrl+datos.poster_path}" alt="${datos.title}" >
                        </div>
                        <h3> <a href="detail-movie.html" class="fav-name"> ${datos.title} </a></h3>
 
                    </li>
        `
    })
    .catch ()
}




}) //no borrar importante
