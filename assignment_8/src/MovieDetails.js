function MovieDetails({ movie, setPage }) {
  return (
    <div>
      <h1>{movie.name}</h1>
      <img src={movie.image} alt={movie.name} />
      <br /><br />
      <button onClick={() => setPage("form")}>
        Book Seat
      </button>
    </div>
  );
}

export default MovieDetails;
