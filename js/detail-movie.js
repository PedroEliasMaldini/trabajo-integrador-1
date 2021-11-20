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
                    genero.innerHTML += `<a href="detail2-genres.html?id=${generoS[i].id}"> ${generoS[i].name} </a>`;
                }
                
                sinopsis.innerHTML += " " + datos.overview;
                imgPeli.src = imgUrl + datos.poster_path;
                imgPeli.alt = datos.title;

            }

        )

        .catch()
        

     //favoritos para peliculas
   
     let fav = document.querySelector('.favoritos')
     //paso 1: definir array para poner lista de favoritos
     let favoritosP = [];
  
     //paso 2: recuperamos datos del storage para ver si ya hay favoritos. puede ser q no existe (y es por eso q definimos la variable en el paso 1)
     let recuperoStorage = localStorage.getItem("favoritosP");
  
     //paso 3: si ya se definio la propiedad favoritosP y ya hay elementos dentro del local storage
    
     if (recuperoStorage && recuperoStorage != null) {
         // paso 4: transformo ese string en array y le asigno al array la vairable favoritosP
         favoritosP = JSON.parse(recuperoStorage);
     }
  
     //paso 5: si el ID actual del gif esta en la lista

     if (favoritosP.includes(peliculaPopular)) {
        //paso 6: se cambia el contenido del link favoritosP 
        fav.innerHTML = `<span> Quitar de favoritos </span>`; 
    }

    // hasta aca instrucciones para cuando se llega la pagina 
    // a partir de ahora, las instrucciones para cuando se clikea el link 

    //evento cuando se clikea el link fav
    fav.addEventListener("click", function (e) {
        //evitamos el comportamiento default del link
        e.preventDefault();
        //si el gif actual esta en la lista 
        if (favoritosP.includes(peliculaPopular)) {

            //lo localizamos en el array
            let aBorrar = favoritosP.indexOf(peliculaPopular);

            //y lo sacamos de alli
            favoritosP.splice(aBorrar, 1);

            //y luego cambiamos el contenido del link fav
            fav.innerHTML = `<span> Agregar a favoritos</span>`;
        }

        //si no esta en la lista 
        else {

            //se agrega el gif actual
            favoritosP.push(peliculaPopular);

             //y luego cambiamos el contenido del link fav
            fav.innerHTML = `<span>Quitar de favoritos </span>`;
        }
        
        //paso 7a: se gurada el array actualizado como string
        let favStorage = JSON.stringify(favoritosP);

        //paso 7b: se guarda ese string en el local storage 
        localStorage.setItem("favoritosP",favStorage)
    })

    


}) //importante no borrar