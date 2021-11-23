window.addEventListener(`load`, function(){
console.log(location.search)
let querystring = (location.search)
let querystringObj = new URLSearchParams(querystring)
console.log(querystringObj)
let resultadoBusqueda = querystringObj.get(`q`)
console.log(resultadoBusqueda)

let url = `https://api.themoviedb.org/3/search/multi/?api_key=5879ede367a1cc1dbb7ecaf35f419c29&language=en-US&query=${resultadoBusqueda}&page=1&include_adult=false` 
// peliculas

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
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