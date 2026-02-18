import movies from "./movies";
import "./App.css";

function MovieList({ setPage, setSelectedMovie }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "20px" }}>
        🎬 Movie Booking
      </h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="movie-image-container">
              <img
                src={movie.image}
                alt="movie"
                className="movie-image"
              />
            </div>

            <button
              className="book-btn"
              onClick={() => {
                setSelectedMovie(movie);
                setPage("form");
              }}
            >
              Book Seat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
