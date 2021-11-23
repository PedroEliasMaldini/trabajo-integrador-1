window.addEventListener(`load`, function () {
    console.log(location.search)

    let querystring = (location.search);
    let querystringObj = new URLSearchParams(querystring);
    console.log(querystringObj)

    let resultadoBusqueda = querystringObj.get(`q`);
    console.log(resultadoBusqueda)
    let resultados = document.querySelector(`.watch-display`);
    const imgUrl = 'https://image.tmdb.org/t/p/w500/';

    let url = `https://api.themoviedb.org/3/search/multi/?api_key=5879ede367a1cc1dbb7ecaf35f419c29&language=en-US&query=${resultadoBusqueda}&page=1&include_adult=false`;

    let tituloBusqueda = document.querySelector(`.titulo-result`);


    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            tituloBusqueda.innerHTML += resultadoBusqueda
            if (data.results.length > 0) {
                for (let i = 0; i < data.results.length; i++) {
                    resultados.innerHTML += `
                        <li class="watch-item watch-results">
                        <a href="detail-movie.html?id=${data.results[i].id}" class="details"> <img src="${imgUrl+data.results[i].poster_path}" alt="${data.results[i].title}" class="watch-img"> </a>
                        <h3> ${data.results[i].title}</h3>
                        </li>`
                }
            } else {
                let error = document.querySelector(`.error-notfound`)
                error.innerHTML = `
                <p><span>Oops!</spna></p>
                <p>No pudimos encontrar nada que coincidiera.</p>`

            }


        })
        .catch(function (error) {
            console.log(`El error fue de ${error}`)
        })




}) // no borrar