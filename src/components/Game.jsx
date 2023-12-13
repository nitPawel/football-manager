import React from "react";
import murawa from "../img/murawa.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import flagaAnglii from "../img/flagaanglii.svg";
import chelsealogo from "../img/chelsea.svg";
import manclogo from "../img/manc.svg";
import { chelseaPlayers } from "../data.js";
import { manCityPlayers } from "../data.js";

import "./game.css";

export const Game = () => {
	// console.log(manCityPlayers);
	// console.log(chelseaPlayers);
	return (
		<div className='container-game'>
			<div className='game-menu-buttons'>
				<button>Tabela</button>
				<button>Składy</button>
			</div>
			<div className='game-summary-container'>
				<div className='players-configuration gray-bar'>
					<p>4-2-3-1</p>
					<p>ustawienie</p>
					<p>4-2-3-1</p>
				</div>
				<div className='summary'>
					<div className='team-first'>
						<img src={chelsealogo} alt='chelsea' />
						<p>Chelsea</p>
					</div>
					<div className='game-details'>
						<p className='game-date'>12.11.2023 17:30</p>
						<p className='score'>4 - 4</p>
						<p className='game-status'>koniec</p>
					</div>
					<div className='team-second'>
						<img src={manclogo} alt='Manchester City' />
						<p>Manchester City</p>
					</div>
				</div>
				<div className='playground-img'>
					<img src={murawa} alt='zielone boisko pilki noznej' />
				</div>
			</div>
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
			<div className='squad-bar gray-bar'>
				<p>składy wyjściowe</p>
			</div>
			<div className='table'>
				<div>
					{chelseaPlayers
						.filter(item => {
							return item.status === "first squad";
						})
						.map(player => {
							return <p key={player.id}>{player.player}</p>;
						})}
				</div>
				<div>
					{manCityPlayers
						.filter(item => {
							return item.status === "first squad";
						})
						.map(player => {
							return (
								<p className='right' key={player.id}>
									{player.player}
								</p>
							);
						})}
				</div>
			</div>
			<div className='squad-bar gray-bar'>
				<p>rezerwowi</p>
			</div>
			<div className='table'>
				<div>
					{chelseaPlayers
						.filter(item => {
							return item.status === "reserve";
						})
						.map(player => {
							return <p key={player.id}>{player.player}</p>;
						})}
				</div>
				<div>
					{manCityPlayers
						.filter(item => {
							return item.status === "reserve";
						})
						.map(player => {
							return (
								<p className='right' key={player.id}>
									{player.player}
								</p>
							);
						})}
				</div>
			</div>
			<div className='squad-bar gray-bar'>
				<p>wykluczeni z gry</p>
			</div>
			<div className='table'>
				<div>
					{chelseaPlayers
						.filter(item => {
							return item.status === "dis";
						})
						.map(player => {
							return <p key={player.id}>{player.player}</p>;
						})}
				</div>
				<div>
					{manCityPlayers
						.filter(item => {
							return item.status === "dis";
						})
						.map(player => {
							return (
								<p className='right' key={player.id}>
									{player.player}
								</p>
							);
						})}
				</div>
			</div>
			<div className='squad-bar gray-bar'>
				<p>trenerzy</p>
			</div>
			<div className='table'>
				<div>
					{chelseaPlayers
						.filter(item => {
							return item.status === "coach";
						})
						.map(player => {
							return <p key={player.id}>{player.player}</p>;
						})}
				</div>
				<div>
					{manCityPlayers
						.filter(item => {
							return item.status === "coach";
						})
						.map(player => {
							return (
								<p className='right' key={player.id}>
									{player.player}
								</p>
							);
						})}
				</div>
			</div>
      <div className='game-info-bar gray-bar'>
				<p>informacje o spotkaniu</p>
				<p>2:2</p>
			</div>
      <div className="game-info-details">
        <p>Sędzia</p>
        <p>Taylor A.<span>(Eng)</span></p>
      </div>
      <div className="game-info-details">
        <p>Stadion</p>
        <p>Stamford Brigde<span>(London)</span></p>
      </div>
      <div className="game-info-details">
        <p>Pojemność</p>
        <p>40 341</p>
      </div>
		</div>
	);
};
