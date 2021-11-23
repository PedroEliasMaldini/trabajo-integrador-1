window.addEventListener('load', function () {

    //favoritos de peliculas y series

    let seccionFav = document.querySelector(".favoritos-coontenedor");
    let seccionNoFav = document.querySelector(".no-fav")
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'


    let favoritosP = [];

    let favoritosS = [];

    //pelicula 
    if (localStorage.getItem('favoritosP')) {


        console.log(localStorage);

        let recuperoStorage = localStorage.getItem('favoritosP');

        favoritosP = JSON.parse(recuperoStorage);

        console.log(favoritosP)
    }

    //serie
    if (localStorage.getItem('favoritosS')) {

        console.log(localStorage);

        let recuperoStorage = localStorage.getItem('favoritosS');

        favoritosS = JSON.parse(recuperoStorage);

        console.log(favoritosS)
    }

    //Peliculas y series

    if (favoritosP.length == 0 && favoritosS.length == 0) {

        seccionNoFav.innerHTML += `<h3> No hay favoritos </h3>`

    } else { 

        //peliculas
        for (let i = 0; i < favoritosP.length; i++) {

            buscarAndMostrarFavoritosP(favoritosP[i]);
        }

        //series
        for (let i = 0; i < favoritosS.length; i++) {

            buscarAndMostrarFavoritosS(favoritosS[i]);
        }


    }

    //peliculas 
    function buscarAndMostrarFavoritosP(id) {

        let urlPP = `https://api.themoviedb.org/3/movie/${id}?api_key=5879ede367a1cc1dbb7ecaf35f419c29`;

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
 
                    </li> `
            })
            .catch()
    }

    //series
    function buscarAndMostrarFavoritosS(id) {

        let urlSP = `https://api.themoviedb.org/3/tv/${id}?api_key=5879ede367a1cc1dbb7ecaf35f419c29`;

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
                </li>`
            })
            .catch()
    }


}) //no borrar importante