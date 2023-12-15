import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Table } from "./Table";

const Nav = () => {
	return (
		<>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/table' element={<Table />} />
			</Routes>
		</>
	);
};

export default Nav;