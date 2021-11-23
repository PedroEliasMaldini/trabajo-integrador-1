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
                genero.innerHTML += `<a href="detail2-genres.html?idg=${generoS[i].id}&tipo=tv"> ${generoS[i].name} </a>`;
            }
            sinopsis.innerHTML += " " + datos.overview;

            imgPeli.src = imgUrl + datos.poster_path;
            imgPeli.alt = datos.name;

        })
        .catch()

    //favoritos para series

    let fav = document.querySelector('.favoritos')

    let favoritosS = [];


    let recuperoStorage = localStorage.getItem("favoritosS");


    if (recuperoStorage && recuperoStorage != null) {

        favoritosS = JSON.parse(recuperoStorage);
    }


    if (favoritosS.includes(seriesPopulares)) {

        fav.innerHTML = `<span>Quitar de favoritos </span>`;
    }


    fav.addEventListener("click", function (e) {

        e.preventDefault();

        if (favoritosS.includes(seriesPopulares)) {


            let aBorrar = favoritosS.indexOf(seriesPopulares);


            favoritosS.splice(aBorrar, 1);


            fav.innerHTML = `<span>Agregar a favoritos </span>`;
        } else {

            favoritosS.push(seriesPopulares);


            fav.innerHTML = `<span>Quitar de favoritos </span>`;
        }


        let favStorage = JSON.stringify(favoritosS);


        localStorage.setItem("favoritosS", favStorage)
    })


}) //importante no borrar