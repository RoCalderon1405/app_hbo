import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import "./App.css";
import { MoviesProvider } from "./context/MoviesContext";
import { UsersProvider } from "./context/UsersContext";
import { Welcome } from "./pages/Welcome";
import { Subscribe } from "./pages/Subscribe";
import { TodasMovies } from "./pages/TodasMovies";
import { Login } from "./pages/Login";
import { MovieDetail } from "./pages/MovieDetail";
import { UpdateMovie } from "./pages/UpdateMovie";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://wicked-foal-sun-hat.cyclic.app",
  });

  return (
    <Router>
      <ApolloProvider client={client}>
        <UsersProvider>
          <MoviesProvider>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/all-movies" element={<TodasMovies />} />
              <Route path="/movie/:_id" element={<MovieDetail />} />
              <Route path="/movie/update/:_id" element={<UpdateMovie />} />
            </Routes>
          </MoviesProvider>
        </UsersProvider>
      </ApolloProvider>
    </Router>
  );
}

export default App;
