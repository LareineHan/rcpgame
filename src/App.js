import { useState } from 'react';
import './App.css';
import Box from './component/Box';
import Rules from './component/Rules';
import rock from './img/rock-w.png';
import scissors from './img/scissors-w.png';
import paper from './img/paper-w.png';
import rockbtn from './img/rock-dk.png';
import scissorsbtn from './img/scissors-dk.png';
import paperbtn from './img/paper-dk.png';
import rspgame from './img/rspgame.png';

const choice = {
	rock: {
		name: 'Rock',
		img: rock,
	},
	scissors: {
		name: 'Scissors',
		img: scissors,
	},
	paper: {
		name: 'Paper',
		img: paper,
	},
};

function App() {
	const [userSelect, setUserSelect] = useState(null);
	const [computerSelect, setComputerSelect] = useState(null);
	const [result, setResult] = useState('');

	// const gameScreen = document.getElementById('screen');
	// gameScreen.style.display = 'none';
	const startGame = () => {
		const gameScreen = document.getElementById('screen');
		gameScreen.classList.add('show');
		const defaultScreen = document.querySelector('.default-screen');
		defaultScreen.classList.add('hide');
		console.log('startGame is clicked');
	};
	const restartGame = () => {
		const gameScreen = document.getElementById('screen');
		gameScreen.classList.remove('show');
		const defaultScreen = document.querySelector('.default-screen');
		defaultScreen.classList.remove('hide');
		console.log('restartGame is clicked');
	};

	const play = (userChoice) => {
		setUserSelect(choice[userChoice]);
		let computerChoice = randomChoice();
		setComputerSelect(computerChoice);
		judge(choice[userChoice], computerChoice);
		setResult(judge(choice[userChoice], computerChoice));
		startGame();
	};

	const judge = (user, computer) => {
		if (user.name === computer.name) {
			return 'Draw';
		} else if (
			(user.name === 'Rock' && computer.name === 'Scissors') ||
			(user.name === 'Scissors' && computer.name === 'Paper') ||
			(user.name === 'Paper' && computer.name === 'Rock')
		) {
			return 'Win';
		} else {
			return 'Lose';
		}
	};

	const randomChoice = () => {
		let itemArray = Object.keys(choice);
		let randomIndex = Math.floor(Math.random() * itemArray.length);
		let computerChoice = itemArray[randomIndex];
		console.log('computer choice', computerChoice);
		return choice[computerChoice];
	};

	return (
		<div>
			<h1 className='rsp-title'>
				Rock Scissors Paper
				<div className='restart'>
					<button className='restart-btn' onClick={() => restartGame()}>
						<img src={rspgame} alt='rspgame' />
					</button>
				</div>
			</h1>

			<div className='default-screen'>
				<Rules />
				{/* <img className='eyeball' src={eyeball} alt='eyeball' /> */}
			</div>
			<div className='main box-container' id='screen'>
				<Box title='You' item={userSelect} result={result} />
				<Box title='Computer' item={computerSelect} result={result} />
			</div>

			<div className='main btn-container'>
				<button className='rsp-btn' onClick={() => play('rock')}>
					<img src={rockbtn} alt='rock' />
				</button>
				<button className='rsp-btn' onClick={() => play('scissors')}>
					{' '}
					<img src={scissorsbtn} alt='rock' />
				</button>
				<button className='rsp-btn' onClick={() => play('paper')}>
					{' '}
					<img src={paperbtn} alt='rock' />
				</button>
			</div>
		</div>
	);
}

export default App;
