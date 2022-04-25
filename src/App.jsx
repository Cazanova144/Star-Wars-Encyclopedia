import Characters from './pages/Characters';
import Character from './pages/Character';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound'
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div id="App">
      <Navigation />

      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<Character/>} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Container>
    </div>
  );
}

export default App;
