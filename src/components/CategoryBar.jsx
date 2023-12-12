import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./categoryBar.css";

export const CategoryBar = () => {
	return (
		<div className='category-bar'>
			<p className="bolder">Piłka nożna</p>
      <IoIosArrowForward />
      <p>Manchester City - Liverpool</p>

		</div>
	);
};
