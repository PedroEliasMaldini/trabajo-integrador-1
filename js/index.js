window.addEventListener('load', function () {

    // Js de index de peliculas populares 
    let watchDisplayPP = document.querySelector(".watch-displayPP")
    let urlPP = 'https://api.themoviedb.org/3/movie/popular?api_key=5879ede367a1cc1dbb7ecaf35f419c29'
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'

    fetch(urlPP)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            let datosPelisPopulares = datos.results; //array de objetos literales, en donde cada objeto literal represena un pelicula

            for (let i = 0; i < datosPelisPopulares.length; i++) {
                console.log(datosPelisPopulares);
                watchDisplayPP.innerHTML += `
            <li class="watch-item"> 
                        <div class="watch-img">
                        <a href="detail-movie.html?id=${datosPelisPopulares[i].id}" class="details">
                        <img src="${imgUrl+datosPelisPopulares[i].poster_path}" alt= "${datosPelisPopulares[i].title}">
                        </a>
                        </div>
                        <h3>${datosPelisPopulares[i].title}</h3>
                        <h4>${datosPelisPopulares[i].release_date}</h4>
                        </li>
            `
            }

        })
        .catch(function(error){
            console.log(`El error fue ` + error)
        })  

    //js de series populares 
    let watchDisplaySP = document.querySelector(".watch-displaySP")
    let urlSP = 'https://api.themoviedb.org/3/tv/popular?api_key=5879ede367a1cc1dbb7ecaf35f419c29'

    fetch(urlSP)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            let datosSeriesPopulares = datos.results; //array de objetos literales, en donde cada objeto literal represena un pelicula
            console.log(datosSeriesPopulares)
            for (let i = 0; i < datosSeriesPopulares.length; i++) {
                watchDisplaySP.innerHTML += `
            <li class="watch-item">
                        <div class="watch-img">
                        <a href="detail-serie.html?id=${datosSeriesPopulares[i].id}" class="details">
                        <img src="${imgUrl+datosSeriesPopulares[i].poster_path}" alt= "${datosSeriesPopulares[i].name}">
                        </a>
                        </div>
                       <h3>${datosSeriesPopulares[i].name}</h3>
                        <h4>${datosSeriesPopulares[i].first_air_date}</h4>
                        </li>
            `
            }


        })
        .catch(function(error){
            console.log(`El error fue ` + error)
        })  

    //js de peliculas mas vistas 

    let watchDisplayVP = document.querySelector(".watch-displayVP")
    let urlVP = 'https://api.themoviedb.org/3/movie/top_rated?api_key=5879ede367a1cc1dbb7ecaf35f419c29'

    fetch(urlVP)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            let datosPeliculasVistas = datos.results; //array de objetos literales, en donde cada objeto literal represena un pelicula
            for (let i = 0; i < datosPeliculasVistas.length; i++) {
                watchDisplayVP.innerHTML += `
            <li class="watch-item">
                        <div class="watch-img">
                        <a href="detail-movie.html?id=${datosPeliculasVistas[i].id}" class="details">
                        <img src="${imgUrl+datosPeliculasVistas[i].poster_path}" alt= "${datosPeliculasVistas[i].title}">
                        </a>
                        </div>
                       <h3>${datosPeliculasVistas[i].title}</h3>
                        <h4>${datosPeliculasVistas[i].release_date}</h4>
                    </li>
            `
            }


        })

}) //importante no borrar