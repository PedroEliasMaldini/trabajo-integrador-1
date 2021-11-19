window.addEventListener ('load', function () {
<<<<<<< HEAD

// peliculas 
let esteId = new URLSearchParams(location.search);
let idGet =esteId.get("id")

let urlDeGenerosPeliculas ='https://api.themoviedb.org/3/genre/movie/list/' + idGet + '?api_key=5879ede367a1cc1dbb7ecaf35f419c29'


fetch(urlDeGenerosPeliculas)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)


})
.catch(function(error){
    console.log(`El Errror fue ` + error)
})

console.log(idGet)




})




























/* window.addEventListener ('load', function () {
})
=======
    
let idDetG = new URLSearchParams(location.search);

let detalleGenero = idDetG.get("id");
console.log(detalleGenero)
>>>>>>> 4b38955bcff491b23dabca318672db3111535a3f

let urlDetGen = 'https://api.themoviedb.org/3/movie/' + detalleGenero + '?api_key=5879ede367a1cc1dbb7ecaf35f419c29';


fetch('urlDetGen')

.then(function(response) {
    return response.json();
})

.then(function(data) {
    console.log(data);
})

.catch(function(error){
    console.log('El error fue: ' + error);
})

// Debería ir un bucle con la info de todos los generos.

//for(i=0; i<X; i++) {
  //  console.log(generoX +i);
//};
// en "X" debería ir la cantidad de generos que quiero traer (?)
})





console.log(location.search)

*/
