window.addEventListener('load', function () {
    let idSP = new URLSearchParams(location.search);

let seriesPopulares = idSP.get("id");
console.log(seriesPopulares)

let urlSP = 'https://api.themoviedb.org/3/tv/' + seriesPopulares + '?api_key=5879ede367a1cc1dbb7ecaf35f419c29';
const imgUrl = 'https://image.tmdb.org/t/p/w500/'

let titulo = document.querySelector('h2');
let rating = document.querySelector('.sRating');
let estreno = document.querySelector('.sEstreno')
let genero = document.querySelector('.sGenero');
let sinopsis = document.querySelector('.sSinopsis');
let imgPeli = document.querySelector('.img-Slector');

fetch(urlSP)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
            console.log(datos);
            titulo.innerText += " " + datos.name;
            rating.innerHTML += " " + datos.vote_average;
            estreno.innerHTML += " " + datos.first_air_date;
            for (let i = 0; i < datos.genres.length; i++) {
                let generoS = datos.genres;
                genero.innerHTML += `<a href="detail2-genres.html?idg=${generoS[i].id}"> ${generoS[i].name} </a>`;
            }
            sinopsis.innerHTML += " " + datos.overview;
            
            imgPeli.src = imgUrl + datos.poster_path;
            imgPeli.alt = datos.name;

        }
    )
    .catch()

    //favoritos para series
   
    let fav = document.querySelector('.favoritos')
    //paso 1: definir array para poner lista de favoritos
    let favoritosS = [];
 
    //paso 2: recuperamos datos del storage para ver si ya hay favoritos. puede ser q no existe (y es por eso q definimos la variable en el paso 1)
    let recuperoStorage = localStorage.getItem("favoritosS");
 
    //paso 3: si ya se definio la propiedad favoritosS y ya hay elementos dentro del local storage
   
    if (recuperoStorage && recuperoStorage != null) {
        // paso 4: transformo ese string en array y le asigno al array la vairable favoritosS
        favoritosS = JSON.parse(recuperoStorage);
    }
 
    //paso 5: si el ID actual del gif esta en la lista

    if (favoritosS.includes(seriesPopulares)) {
       //paso 6: se cambia el contenido del link favoritosS 
       fav.innerHTML = `<span>Quitar de favoritos </span>`; 
   }

   // hasta aca instrucciones para cuando se llega la pagina 
   // a partir de ahora, las instrucciones para cuando se clikea el link 

   //evento cuando se clikea el link fav
   fav.addEventListener("click", function (e) {
       //evitamos el comportamiento default del link
       e.preventDefault();
       //si el gif actual esta en la lista 
       if (favoritosS.includes(seriesPopulares)) {

           //lo localizamos en el array
           let aBorrar = favoritosS.indexOf(seriesPopulares);

           //y lo sacamos de alli
           favoritosS.splice(aBorrar, 1);

           //y luego cambiamos el contenido del link fav
           fav.innerHTML = `<span>Agregar a favoritos </span>`;
       }

       //si no esta en la lista 
       else {

           //se agrega el gif actual
           favoritosS.push(seriesPopulares);

            //y luego cambiamos el contenido del link fav
           fav.innerHTML = `<span>Quitar de favoritos </span>`;
       }
       
       //paso 7a: se gurada el array actualizado como string
       let favStorage = JSON.stringify(favoritosS);

       //paso 7b: se guarda ese string en el local storage 
       localStorage.setItem("favoritosS",favStorage)
   })


}) //importante no borrar