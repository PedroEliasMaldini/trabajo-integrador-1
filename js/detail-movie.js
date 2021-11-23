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
                rating.innerHTML += " " + datos.vote_average;
                estreno.innerHTML += " " + datos.release_date;
                duracion.innerHTML += " " + datos.runtime;

                for (let i = 0; i < datos.genres.length; i++) {
                    let generoS = datos.genres;
                    genero.innerHTML += `<a href="detail2-genres.html?idg=${generoS[i].id}&tipo=movie"> ${generoS[i].name} </a>`;
                }

                sinopsis.innerHTML += " " + datos.overview;
                imgPeli.src = imgUrl + datos.poster_path;
                imgPeli.alt = datos.title;

            }

        )

        .catch()


    //favoritos para peliculas

    let fav = document.querySelector('.favoritos')

    let favoritosP = [];
   
    let recuperoStorage = localStorage.getItem("favoritosP");


    if (recuperoStorage && recuperoStorage != null) {
       
        favoritosP = JSON.parse(recuperoStorage);
    }

   
    if (favoritosP.includes(peliculaPopular)) {
        
        fav.innerHTML = `<span> Quitar de favoritos </span>`;
    }

    
    fav.addEventListener("click", function (e) {
       
        e.preventDefault();
        
        if (favoritosP.includes(peliculaPopular)) {

            let aBorrar = favoritosP.indexOf(peliculaPopular);

            favoritosP.splice(aBorrar, 1);
            
            fav.innerHTML = `<span> Agregar a favoritos</span>`;
        }

       
        else {

            favoritosP.push(peliculaPopular);
           
            fav.innerHTML = `<span>Quitar de favoritos </span>`;
        }

        let favStorage = JSON.stringify(favoritosP);

        localStorage.setItem("favoritosP", favStorage)
    })




}) //importante no borrar