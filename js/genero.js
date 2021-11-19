
window.addEventListener('load', function () {
// capturo lo que voy a necesitar para las pelis
let urlDeGenerosPeliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=5879ede367a1cc1dbb7ecaf35f419c29`
let LinksDeGeneros = document.querySelector(`.detalles-g`)



// Peliculas 
 fetch(urlDeGenerosPeliculas)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)


LinksDeGeneros.innerHTML = `

<article class="d-generos">
<h3 class="titulo-g"> <a href="detail2-genres.html?id=28">Acción</a> </h3>


</article>
<article class="d-generos">
<h3 class="titulo-g"> <a href="detail2-genres.html?id=12">Aventura</a> </h3>


</article>
<article class="d-generos">
<h3 class="titulo-g"> <a href="detail2-genres.html?id=27">Terror</a> </h3>


</article>
<article class="d-generos">
<h3 class="titulo-g"> <a href="detail2-genres.html?id=35">Comedia</a> </h3>


</article>
<article class="d-generos">
<h3 class="titulo-g"> <a href="detail2-genres.html?id=10749">Romance</a></h3>


</article>
`

   



})
.catch(function(error){
console.log(`Algo que no está bien está mal ${error}`)
})   


})

//capturo lo que voy a necesitar para las series
let UrlDeGenerosSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=5879ede367a1cc1dbb7ecaf35f419c29`
let LinkDeGeneros2 = document.querySelector(`.d-generos-series`)


//series
fetch(UrlDeGenerosSeries)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    LinkDeGeneros2.innerHTML = `
    <article class="d-generos" >
                <h3 class="titulo-g"><a href="detail2-genres.html?id=18">Drama</a></h3>


            </article>
            <article class="d-generos">
                <h3 class="titulo-g"><a href="detail2-genres.html?id=9648">Misterio</a></h3>


            </article>
            <article class="d-generos">
                <h3 class="titulo-g"> <a href="detail2-genres.html?id=80">Crimen</a></h3>


            </article>
            <article class="d-generos">
                <h3 class="titulo-g"> <a href="detail2-genres.html?id=10765">Ficción Histórica</a></h3>


            </article>
            <article class="d-generos">
                <h3 class="titulo-g"> <a href="detail2-genres.html?id=10764">Thriller</a></h3>

            
            </article>
    `
    
    
})
.catch(function(error){
    console.log(`Algo que no está bien está mal ${error}`)
  
}) // importante no borrar 


/*
LinkDeGeneros2.innerHTML = `
    <article class="d-generos" >
                <h3 class="titulo-g"><a href="${data.genres[5].id}">Drama</a></h3>


            </article>
            <article class="d-generos">
                <h3 class="titulo-g"><a href="${data.genres[8].id}">Misterio</a></h3>


            </article>
            <article class="d-generos">
                <h3 class="titulo-g"> <a href="${data.genres[3].id}">Crimen</a></h3>


            </article>
            <article class="d-generos">
                <h3 class="titulo-g"> <a href="${data.genres[11].id}">Ficción Histórica</a></h3>


            </article>
            <article class="d-generos">
                <h3 class="titulo-g"> <a href="${data.genres[10].id}">Thriller</a></h3>

            
            </article>
            `



            <article class="d-generos">
<h3 class="titulo-g"> <a href="${data.genres[0].id}">Acción</a> </h3>


</article>
<article class="d-generos">
<h3 class="titulo-g"> <a href="${data.genres[1].id}">Aventura</a> </h3>


</article>
<article class="d-generos">
<h3 class="titulo-g"> <a href="${data.genres[10].id}">Terror</a> </h3>


</article>
<article class="d-generos">
<h3 class="titulo-g"> <a href="${data.genres[3].id}">Comedia</a> </h3>


</article>
<article class="d-generos">
<h3 class="titulo-g"> <a href="${data.genres[13].id}">Romance</a></h3>


</article>
`
*/

