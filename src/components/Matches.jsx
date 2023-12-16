import React from "react";
import { useState, useEffect } from "react";
import { PiMonitorLight } from "react-icons/pi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import flagaAnglii from "../img/flagaanglii.svg";
import "./matches.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const url =
	"https://php74.appgo.pl/sport_api/api/public/api/games?page=1&onPage=5&orderDirection=desc&orderBy=round";

export const Matches = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		const response = await fetch(url);
		const newData = await response.json();
		setData(newData);
		setIsLoading(false);
	};
	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading) {
		return (
			<>
				<Navbar />
				<div className='container-table'>
					<div className='teams-details'>
						<div className='country-bar'>
							<div className='country-league'>
								<img src={flagaAnglii} alt='flaga anglii' />
								<p>Anglia: Premier League</p>
							</div>
							<div className='table-btn'>
								<button className=''>Tabela</button>
								<IoArrowForwardCircleOutline className='table-btn-icon' />
							</div>
						</div>
					</div>
				</div>
				<div className='preloader'></div>;
			</>
		);
	}

	// console.log(data.data);
	return (
		<>
			<Navbar />
			<div className='container-table'>
				<div className='game-menu-buttons'>
					<button>Wszystkie</button>
				</div>
				<div className='teams-details'>
					<div className='table-country-bar matches-country-bar'>
						<div className=' country-league'>
							<img src={flagaAnglii} alt='flaga anglii' />
							<p>Anglia: Premier League</p>
						</div>
						<div className='table-btn'>
							<Link to='/table'>
								<button className=''>Tabela</button>
								<IoArrowForwardCircleOutline className='table-btn-icon' />
							</Link>
						</div>
					</div>
				</div>
				<div className='players-configuration gray-bar'>
					<p>Runda 1</p>
				</div>
				<div className='round-container'>
					{data.data.map(item => {
						return (
							<div key={item.id} className='round-first'>
								<div className='match-info'>
									<p>{item.date}</p>
								</div>
								<div className='match-teams'>
									<div className='match-team-first'>
										<img src={item.home_team_object.image} alt='logo zespołu' />
										<div>{item.home_team}</div>
									</div>
									<div className='match-team-second'>
										<img src={item.away_team_object.image} alt='logo zespołu' />

										<div>{item.away_team}</div>
									</div>
								</div>
								<div className='match-result'>
									<p>{item.home_score}</p>
									<p>{item.away_score}</p>
								</div>
								<div className='match-details'>
									<div className='details-icon'>
										<PiMonitorLight />
									</div>
									<div className='details-btn'>
										<div className='table-btn'>
											<button className=''>Szczegóły</button>
											<IoArrowForwardCircleOutline className='table-btn-icon' />
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className='aditional-info'>
					<p>
						<div className='boxLm'></div>Awans - Liga Mistrzów (Runda grupowa)
					</p>
					<p>
						<div className='boxLe'></div>Awans - Liga Europy (Runda grupowa)
					</p>
					<p>
						<div className='boxCh'></div>Spadek - Championship
					</p>
				</div>
			</div>
		</>
	);
};
