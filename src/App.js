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
}

export default App;
