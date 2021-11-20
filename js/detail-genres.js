window.addEventListener('load', function () {
    // peliculas 
    let esteId = new URLSearchParams(location.search);
    let idGet = esteId.get(`idg`)
    let tipoGet = esteId.get(`tipo`)
    console.log(idGet)
    let urlDeGenerosPeliculas = `https://api.themoviedb.org/3/genre/${idGet}?api_key=5879ede367a1cc1dbb7ecaf35f419c29`;
    let tituloGenero = document.querySelector(`.titulo-fav`)
    let listaDePelis = document.querySelector(`.ul-detail2`)

    let urlGeneroP = `https://api.themoviedb.org/3/discover/${tipoGet}?api_key=5879ede367a1cc1dbb7ecaf35f419c29&with_genres=${idGet}`
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'



    fetch(urlDeGenerosPeliculas) //este fetch es lo que creo que esta mal pero no se que 
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            tituloGenero.innerHTML = ` ${data.name}`;
        })
        .catch()

console.log(urlGeneroP)

fetch(urlGeneroP)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    if (tipoGet == "movie") {
        console.log(data)
        for (let i = 0; i < data.results.length; i++) {
            listaDePelis.innerHTML += `<li class="watch-item">
            <img src="${imgUrl+data.results[i].poster_path}" alt="${data.results[i].title}" class="watch-img">
            <h3> 
            <a href="detail-movie.html?id=${data.results[i].id}" class="details-ge"> ${data.results[i].title} </a>
            </h3>`};
    } else {
        for (let i = 0; i < data.results.length; i++) {
            listaDePelis.innerHTML += `<li class="watch-item">
            <img src="${imgUrl+data.results[i].poster_path}" alt="${data.results[i].name}" class="watch-img">
            <h3> 
            <a href="detail-movie.html?id=${data.results[i].id}" class="details-ge"> ${data.results[i].name} </a>
            </h3>`};
    }

})
.catch()




})