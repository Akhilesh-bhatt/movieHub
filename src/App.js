import { Container, CssBaseline } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Trending from './Pages/Trending';
import Movies from './Pages/Movies';
import TvSeries from './Pages/TvSeries';
import Search from './Pages/Search';
import SimpleBottomNavigation from './components/Mainnav';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Header />
        <div className="App">
          <Container>
            <Routes>
              <Route path="/" element={<Trending/>} />
              <Route path="Movies/*" element={<Movies />} />
              <Route path="TvSeries/*" element={<TvSeries />} />
              <Route path="Search/*" element={<Search />} />
            </Routes>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </Router>
    </>
  );
}

export default App;
