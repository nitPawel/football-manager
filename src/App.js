import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { CategoryBar } from "./components/CategoryBar";
import { Game } from "./components/Game";

function App() {
	return (
		<>
			<Navbar />
			<CategoryBar />
			<Game />
		</>
	);
}

export default App;
