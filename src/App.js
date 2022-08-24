import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ListPage />} />
        <Route path='/photos/:id' element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
