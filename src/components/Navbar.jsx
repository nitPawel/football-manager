import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../img/Logo.png";
import pilka from "../img/pilka.svg";
import kosz from "../img/kosz.svg";
import siatka from "../img/siatka.svg";
import hokej from "../img/hokej.svg";

function Navbar() {
	return (
		<nav className='navbar'>
			<div className='navbar-container '>
				<div>
					<Link to='/'>
						<img src={Logo} alt='company logo' />
					</Link>
				</div>
				<div className='navbar-btn'>
					<a href=''>
						<img src={pilka} alt='' /> Piłka nożna
					</a>
					<a href=''>
						<img src={kosz} alt='' /> Koszykówka
					</a>
					<a href=''>
						<img src={siatka} alt='' /> Siatkówka
					</a>
					<a href=''>
						<img src={hokej} alt='' /> Hokej
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
