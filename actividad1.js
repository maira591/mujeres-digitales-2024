let nombre = "Maira Cano";
let edad = 27;
let  precio = 100.00;
let seriesfavoritas = ["La casa de papel", "Dark", "los100"];

let peliculasFavoritas = [
    { nombre: "Inception", año: 2010, protagonistas: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"] },
    { nombre: "The Matrix", año: 1999, protagonistas: ["Keanu Reeves", "Laurence Fishburne"] },
    { nombre: "The Lord of the Rings", año: 2001, protagonistas: ["Elijah Wood", "Ian McKellen"] }
];

console.log("Nombre: " + nombre)
console.log("Edad: " + edad)
console.log("Precio: " + precio)

console.log("SERIES FAVORITAS")
for (let i = 0; i < seriesfavoritas.length; i++) {
    console.log(" - " +seriesfavoritas[i])
    
}


console.log("PELICULAS FAVORITAS")

for (let index = 0; index < peliculasFavoritas.length; index++) {
    const element = peliculasFavoritas[index];
    
    console.log("- Nombre pelicula: " + peliculasFavoritas[index].nombre)
    console.log("  Año: " + peliculasFavoritas[index].año)
    console.log("  Actores: ")
    for (let j = 0; j < peliculasFavoritas[index].protagonistas.length; j++) {
        console.log("     - " + peliculasFavoritas[index].protagonistas[j])
    }
    
    console.log("")
}
