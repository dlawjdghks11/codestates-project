import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ListPage from './pages/ListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ListPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
