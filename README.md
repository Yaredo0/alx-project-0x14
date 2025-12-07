# MoviesDatabase API Documentation Summary

## API Overview
The MoviesDatabase API provides access to a wide range of movie-related data including films, genres, ratings, languages, and upcoming releases. It allows developers to **search movies, retrieve details about performers, rank films by ratings, and add new movies or ratings**. The API is designed to be simple, secure (immune to SQL injection), and useful for building applications that need dynamic movie information.

## Version
The current version of the MoviesDatabase API is **v1.0**.

## Available Endpoints
- **GET /rank** – Retrieve movies with the highest ratings. Accepts a `count` parameter to specify how many top-rated movies to return.
- **GET /genre** – Fetch available movie genres.
- **GET /timeslot** – Retrieve movies by specific time slots.
- **GET /movie/{id}** – Get details about a specific movie by its ID.
- **GET /search/performer** – Search for performers by name.
- **POST /rating** – Submit a rating for a movie.
- **GET /new-movies** – Retrieve newly added movies.
- **GET /top-gross** – Get movies with the highest gross earnings.
- **GET /mpaa-rating** – Retrieve MPAA ratings for movies.
- **GET /language** – Fetch available languages.
- **GET /upcoming-movies** – List movies scheduled for release soon.
- **POST /add-movie** – Add a new movie to the database.

## Request and Response Format
### Example Request
```http
GET /rank?count=5
