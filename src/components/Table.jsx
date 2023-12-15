import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import flagaAnglii from "../img/flagaanglii.svg";
import "./table.css";

const url = "https://php74.appgo.pl/sport_api/api/public/api/table";

export const Table = () => {
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
	// console.log(data);

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

	return (
		<div>
			<Navbar />
			<div className='container-table'>
				<div className='teams-details'>
					<div className='table-country-bar'>
						<div className='country-league'>
							<img src={flagaAnglii} alt='flaga anglii' />
							<p>Anglia: Premier League</p>
						</div>
						<div className='table-btn'>
							<button className=''>Mecze</button>
							<IoArrowForwardCircleOutline className='table-btn-icon' />
						</div>
					</div>
				</div>
				<table>
					<thead>
						{/* <div className="gray-bar"> */}
						<tr>
							<th>lp</th>
							<th>drużyna</th>
							<th>M</th>
							<th>b</th>
							<th>rb</th>
							<th>p</th>
						</tr>
						{/* </div> */}
					</thead>
					<tbody>
						{data.slice(0, 8).map(team => {
							const {
								games,
								goals_conceded,
								goals_ratio,
								goals_scored,
								points,
							} = team;
							return (
								<tr key={team.team.id}>
									<td>
										{
											<div className={`number number-color${team.team.id}`}>
												{team.team.id}
											</div>
										}
									</td>
									<td className='img-name-container'>
										<img src={team.team.image} alt='logo drużyny' />
										{team.team.name}
									</td>
									<td>{games}</td>
									<td>{`${goals_scored}:${goals_conceded}`}</td>
									<td>{goals_ratio}</td>
									<td>{points}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
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
		</div>
	);
};
