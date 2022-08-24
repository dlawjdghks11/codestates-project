<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ListPage from "./pages/ListPage";
import Albumcontent from "./pages/Albumcontent";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Albumcontent />} />
			</Routes>
		</Router>
	);
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import AlbumContent from './pages/albumcontent'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ListPage />} />
        <Route path='/photos/:id' element={<AlbumContent />} />
      </Routes>
    </Router>
  );
>>>>>>> 4d6a97c0b3da1bc8ef624304500ab0675aeba109
}

export default App;
