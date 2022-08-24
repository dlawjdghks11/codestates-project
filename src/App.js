import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import AlbumContent from "./pages/Albumcontent";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ListPage />} />
				<Route path="/photos/:id" element={<AlbumContent />} />
			</Routes>
		</Router>
	);
}

export default App;
