window.addEventListener ('load', function () {
})

// Deberia ir el URL del endpoint + el apiKey que pasó Martina
let urlDeDetallesDeGenero = 

fetch('urldeDetallesDeGenero')

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

for(i=0; i<X; i++) {
    console.log(generoX +i);
};
// en "X" debería ir la cantidad de generos que quiero traer (?)



