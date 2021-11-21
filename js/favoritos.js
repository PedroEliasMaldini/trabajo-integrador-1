window.addEventListener('load', function () {

    //favoritos de peliculas 

    //se define "favoritosP" como array vacio --> por si no se creo aún storage 
    let favoritosP = [];

    //si fue creada la clave "favoritosP" en localStorage 
    if (localStorage.getItem('favoritosP')) {

        //verificar como las propiedades llegan como string
        console.log(localStorage);

        // gurdar datos del storage 
        let recuperoStorage = localStorage.getItem('favoritosP');

        //y los asigna a la variable "favoritosP", transformados en array 
        favoritosP = JSON.parse(recuperoStorage);

        //verificar en consola la transformación del array
        console.log(favoritosP)
    }

    //contenedor de la lista de favoritos 
    let seccionFav = document.querySelector(".favoritos-coontenedor");
    //contendor cuando no hay favoritos 
    let seccionNoFav = document.querySelector(".no-fav")
    //vamos a necesitar esto para armar el url de la img
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'


    //definicion de la funcion mostrar los gifs favoritos (se ejecuta dentro del bucle for de mas arriba)
    function buscarAndMostrarFavoritosP(id) {

        //se guarda el endpoint en una variable "urlPP" para traer info del gif en cada enpoint 
        let urlPP = `https://api.themoviedb.org/3/movie/${id}?api_key=5879ede367a1cc1dbb7ecaf35f419c29`;

        //pedidos al servidor 
        fetch(urlPP)
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (datos) {
                console.log(datos);
                seccionFav.innerHTML += `
        <li class="watch-item-fav">
                        <div class="watch-img-fav">
                            <img src="${imgUrl+datos.poster_path}" alt="${datos.title}" >
                        </div>
                        <h3> <a href="detail-movie.html?id=${datos.id}" class="fav-name"> ${datos.title} </a></h3>
 
                    </li>
        `
            })
            .catch()
    }

 //favoritos de seires 

//se define "favoritosS" como array vacio --> por si no se creo aún storage 
let favoritosS = [];

//si fue creada la clave "favoritosS" en localStorage 
if (localStorage.getItem('favoritosS')) {

    //verificar como las propiedades llegan como string
    console.log(localStorage);

    // gurdar datos del storage 
    let recuperoStorage = localStorage.getItem('favoritosS');

    //y los asigna a la variable "favoritosS", transformados en array 
    favoritosS = JSON.parse(recuperoStorage);

    //verificar en consola la transformación del array
    console.log(favoritosS)
}


//si no hay favoritos (tanto peliculas como series) en la lista 

if (favoritosP.length == 0 && favoritosS.length == 0) {
    //muestra la leyenda apropiada si es que no hay favoritos 
    seccionNoFav.innerHTML += `
<h3> No hay favoritos </h3>
`
} else { //si hay favoritos en el array "favoritosP"

    //buscamos cada uno de los gif y los imprimimos en pantalla (para esto un for)
    for (let i = 0; i < favoritosP.length; i++) {

        buscarAndMostrarFavoritosP(favoritosP[i]);
        //para mayor proligidad definimos una funcion, que se ejuctara dentro del bucle for para cada fav (la funcion la definimos despues)
    }
    for (let i = 0; i < favoritosS.length; i++) {

        buscarAndMostrarFavoritosS(favoritosS[i]);
        //para mayor proligidad definimos una funcion, que se ejuctara dentro del bucle for para cada fav (la funcion la definimos despues)
    }


}


//definicion de la funcion mostrar los gifs favoritos (se ejecuta dentro del bucle for de mas arriba)
function buscarAndMostrarFavoritosS(id) {

    //se guarda el endpoint en una variable "urlPP" para traer info del gif en cada enpoint 
    let urlSP = `https://api.themoviedb.org/3/tv/${id}?api_key=5879ede367a1cc1dbb7ecaf35f419c29`;
    //pedidos al servidor 
    
    fetch(urlSP)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            console.log(datos);
            seccionFav.innerHTML += `
    <li class="watch-item-fav">
                    <div class="watch-img-fav">
                        <img src="${imgUrl+datos.poster_path}" alt="${datos.name}" >
                    </div>
                    <h3> <a href="detail-serie.html?id=${datos.id}" class="fav-name"> ${datos.name} </a></h3>
                </li>
    `
        })
        .catch()
}



}) //no borrar importante