console.log(location.search)

let idPP = new URLSearchParams(location.search);

let peliculaPopular = idPP.get("id");
console.log(peliculaPopular)

let urlPP = 'https://api.themoviedb.org/3/movie/popular?api_key=5879ede367a1cc1dbb7ecaf35f419c29' + peliculaPopular;

