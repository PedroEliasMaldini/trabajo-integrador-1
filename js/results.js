window.addEventListener(`load`, function(){
console.log(location.search)
let querystring = (location.search)
let querystringObj = new URLSearchParams(querystring)
console.log(querystringObj)
let resultadoBusqueda = querystringObj.get(`q`)
console.log(resultadoBusqueda)
let resultados = document.querySelector(`.watch-display`)
const imgUrl = 'https://image.tmdb.org/t/p/w500/'

let url = `https://api.themoviedb.org/3/search/multi/?api_key=5879ede367a1cc1dbb7ecaf35f419c29&language=en-US&query=${resultadoBusqueda}&page=1&include_adult=false` 



//  let error = document.querySelector(`.error-notfound`)
//  error.innerHTML= `
     
//         <p><span>Oops!</spna></p>
//  <p>
//      No pudimos encontrar nada que coincidiera. Puedes echar un vistazo a nuestras
//      series y
//      películas más populares que aparecen a contiunuación.
//  </p>
 
//  `





fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
let tituloBusqueda = document.querySelector(`.titulo-result`)
tituloBusqueda.innerHTML += resultadoBusqueda
    if(data.results.length> 0){
        for(let i =0; i <data.results.length; i++){
    resultados.innerHTML += `
                        <li class="watch-item">
                        <img src="${imgUrl+data.results[i].poster_path}" alt="${data.results[i].title}" class="watch-img">
                        <h3> <a href="detail-movie.html?id=${data.results[i].id}" class="details">${data.results[i].title}</a></h3>
                        </li>
    
    `
        }
}else{
  let error = document.querySelector(`.error-notfound`)
  error.innerHTML= `
     
         <p><span>Oops!</spna></p>
  <p>
      No pudimos encontrar nada que coincidiera. Puedes echar un vistazo a nuestras
      series y
      películas más populares que aparecen a contiunuación.
  </p>
 
 `

}


})
.catch(function(error){
    console.log(`El error fue de ${error}`)
})

// let formulario = document.querySelector(`form`)
// let Buscador = document.querySelector(`.search-txt`)
// formulario.addEventListener(`input`, function(e){
// e.defaultPrevented()
// if(Buscador === Number){
//  alert(`formato invalido`)
// }
// })



}) // no borrar