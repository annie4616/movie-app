import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import MovieTemplate from "./components/MovieTemplate";

function App() {
  const GetMovieList = async () => {
    const MovieData = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(MovieData);
  };
  return (
    <div className="App">
      <MovieTemplate />
    </div>
  );
}

export default App;
