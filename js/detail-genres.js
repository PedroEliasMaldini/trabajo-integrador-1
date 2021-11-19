window.addEventListener ('load', function () {
    
let idDetG = new URLSearchParams(location.search);

let detalleGenero = idDetG.get("id");
console.log(detalleGenero)

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






