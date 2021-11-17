window.addEventListener('load', function () {
    let idSP = new URLSearchParams(location.search);

let seriesPopulares = idSP.get("id");
console.log(seriesPopulares)

let urlSP = 'https://api.themoviedb.org/3/tv/' + seriesPopulares + '?api_key=5879ede367a1cc1dbb7ecaf35f419c29';
const imgUrl = 'https://image.tmdb.org/t/p/w500/'

let titulo = document.querySelector('h2');
let rating = document.querySelector('.sRating');
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
            rating.innerText += " " + datos.vote_average;
            for (let i = 0; i < datos.genres.length; i++) {
                let generoS = datos.genres;
                genero.innerHTML += `<a href="detail2-genres.html?id=${generoS[i].id}"> ${generoS[i].name} </a>`;
            }
            sinopsis.innerText += " " + datos.overview;
            
            imgPeli.src = imgUrl + datos.poster_path;
            imgPeli.alt = datos.name;

        }

    )
    .catch()
}) //importante no borrar