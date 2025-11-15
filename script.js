// Sample list of items (movies)
const movies = [
    "Avengers: Endgame",
    "The Dark Knight",
    "Interstellar",
    "Inception",
    "Titanic",
    "Avatar",
    "The Lion King",
    "Jurassic Park",
    "The Matrix",
    "Spider-Man: No Way Home"
];

// Load all movies initially
window.addEventListener("DOMContentLoaded", () => {
    displayMovies(movies);
});

// Display movies in the UI
function displayMovies(list) {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";

    list.forEach(movie => {
        let li = document.createElement("li");
        li.textContent = movie;
        movieList.appendChild(li);
    });
}

// Filter movies in real-time
document.getElementById("searchInput").addEventListener("input", function () {
    const searchText = this.value.toLowerCase();

    const filteredMovies = movies.filter(movie =>
        movie.toLowerCase().includes(searchText)
    );

    displayMovies(filteredMovies);
});
