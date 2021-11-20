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
                    genero.innerHTML += `<a href="detail2-genres.html?id=${generoS[i].id}"> ${generoS[i].name} </a>`;
                }
                
                sinopsis.innerText += " " + datos.overview;
                imgPeli.src = imgUrl + datos.poster_path;
                imgPeli.alt = datos.title;

            }

        )

        .catch()
        

     //favoritos
   
     let fav = document.querySelector('.favoritos')
     //paso 1: definir array para poner lista de favoritos
     let favoritos = [];
  
     //paso 2: recuperamos datos del storage para ver si ya hay favoritos. puede ser q no existe (y es por eso q definimos la variable en el paso 1)
     let recuperoStorage = localStorage.getItem("favoritos");
  
     //paso 3: si ya se definio la propiedad favoritos y ya hay elementos dentro del local storage
    
     if (recuperoStorage && recuperoStorage != null) {
         // paso 4: transformo ese string en array y le asigno al array la vairable favoritos
         favoritos = JSON.parse(recuperoStorage);
     }
  
     //paso 5: si el ID actual del gif esta en la lista

     if (favoritos.includes(peliculaPopular)) {
        //paso 6: se cambia el contenido del link favoritos 
        fav.innerHTML = `Quitar de favoritos`; 
    }

    // hasta aca instrucciones para cuando se llega la pagina 
    // a partir de ahora, las instrucciones para cuando se clikea el link 

    //evento cuando se clikea el link fav
    fav.addEventListener("click", function (e) {
        //evitamos el comportamiento default del link
        e.preventDefault();
        //si el gif actual esta en la lista 
        if (favoritos.includes(peliculaPopular)) {

            //lo localizamos en el array
            let aBorrar = favoritos.indexOf(peliculaPopular);

            //y lo sacamos de alli
            favoritos.splice(aBorrar, 1);

            //y luego cambiamos el contenido del link fav
            fav.innerHTML = `Agregar a favoritos`;
        }

        //si no esta en la lista 
        else {

            //se agrega el gif actual
            favoritos.push(peliculaPopular);

             //y luego cambiamos el contenido del link fav
            fav.innerHTML = `Quitar de favoritos`;
        }
        
        //paso 7a: se gurada el array actualizado como string
        let favStorage = JSON.stringify(favoritos);

        //paso 7b: se guarda ese string en el local storage 
        localStorage.setItem("favoritos",favStorage)
    })

    


}) //importante no borrar