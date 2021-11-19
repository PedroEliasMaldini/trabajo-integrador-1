window.addEventListener('load', function () {

let idPP = new URLSearchParams(location.search);

let peliculaPopular = idPP.get("id");
console.log(peliculaPopular)

let urlPP = 'https://api.themoviedb.org/3/movie/' + peliculaPopular + '?api_key=5879ede367a1cc1dbb7ecaf35f419c29';
const imgUrl = 'https://image.tmdb.org/t/p/w500/'

let titulo = document.querySelector('h2');
let rating = document.querySelector('.pRating');
let estreno = document.querySelector('.pEstreno');
let duracion = document.querySelector('.pDuracion');
let genero = document.querySelector('.pGenero');
let sinopsis = document.querySelector('.pSinopsis');
let imgPeli = document.querySelector('.img-Slector');

fetch(urlPP)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
            console.log(datos);
            titulo.innerText += " " + datos.title;
            rating.innerText += " " + datos.vote_average;
            estreno.innerText += " " + datos.release_date;
            duracion.innerText += " " + datos.runtime;
            for (let i = 0; i < datos.genres.length; i++) {
                let generoS = datos.genres;
                genero.innerHTML += `<a href="detail2-genres.html?idGeneros=${generoS[i].id}"> ${generoS[i].name} </a>`;
            }
            sinopsis.innerText += " " + datos.overview;
            imgPeli.src = imgUrl + datos.poster_path;
            imgPeli.alt = datos.title;

        }

    )
    .catch()

}) //importante no borrar