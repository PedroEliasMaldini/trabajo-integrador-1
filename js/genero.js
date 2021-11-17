// capturo lo que voy a necesitar
let urlDeGenerosPeliculas = 



//Hacemos el fetch usando la base generica


 fetch(urlDeGenerosPeliculas)
.then(function(response){
    return response.json()
})
.then(function(data){
// aca donde pasa toda la magia

console.log(data)
})
.catch(function(error){
console.log(`Algo que no está bien está mal ${error}`)
})   



