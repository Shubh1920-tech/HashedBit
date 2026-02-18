import { useState } from "react";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import BookingForm from "./BookingForm";
import Success from "./Success";

function App() {
  const [page, setPage] = useState("list");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [userData, setUserData] = useState(null);

  if (page === "list") {
    return (
      <MovieList
        setPage={setPage}
        setSelectedMovie={setSelectedMovie}
      />
    );
  }

  if (page === "details") {
    return (
      <MovieDetails
        movie={selectedMovie}
        setPage={setPage}
      />
    );
  }

  if (page === "form") {
    return (
      <BookingForm
        setPage={setPage}
        setUserData={setUserData}
      />
    );
  }

  if (page === "success") {
    return (
      <Success
        userData={userData}
      />
    );
  }
}

export default App;
