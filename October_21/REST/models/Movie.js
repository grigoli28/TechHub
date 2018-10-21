module.exports = class Movie {
    constructor() {
        this.movies = [];
    }

    getAllMovies() {
        return this.movies;
    }

    getMovieById(movieId) {
        return this.movies.find(m => m.id == movieId);
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    updateMovie(movieId, movie) {
        idx = this.movies.findIndex(m => m.id == movieId);
        this.movies[idx] = movie;
    }

    deleteMovie(movieId) {
        idx = this.movies.findIndex(m => m.id == movieId);
        this.movies.splice(idx, 1);
    }
}