import React from "react";
import Navbar from "./Navbar";
import { CategoryBar } from "./CategoryBar";
import { Game } from "./Game";
import { Table } from "./Table";

export const Home = () => {
	return (
		<div>
			<Navbar />
			{/* <CategoryBar /> */}
			<Game />
			{/* <Table/> */}
		</div>
	);
};
