// import MoviesGrid from './components/MoviesGrid';
import styles from "./App.module.css";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";
import MoviesGrid from "./components/MoviesGrid";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import { BrowserRouter,Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className={styles.header}>
          <Link to="/">
            <h1>Movies</h1>
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/movies/:movieId" element={<MovieDetails />} /> 
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
