import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Table } from "./Table";
import { Matches } from "./Matches";

const Nav = () => {
	return (
		<>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/table' element={<Table />} />
				<Route path='/matches' element={<Matches />} />
			</Routes>
		</>
	);
};

export default Nav;
