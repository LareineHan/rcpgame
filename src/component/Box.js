import React from 'react';

const Box = (props) => {
	let result;
	let boxStyle;

	if (
		props.title === 'Computer' &&
		props.result !== 'Draw' &&
		props.result !== ''
	) {
		result = props.result === 'Win' ? 'Lose' : 'Win';
		boxStyle = result.toLowerCase();
		console.log(boxStyle, 'boxStyle');
	} else {
		result = props.result;
		boxStyle = result.toLowerCase();
		console.log(boxStyle, 'boxStyle');
	}

	return (
		<div>
			<div className={`box ${boxStyle}`}>
				<h1 className='player'>{props.title}</h1>
				<img
					src={props.item && props.item.img}
					className='rsp-img'
					alt='chosen-item'
				/>
				<h2 className='result-text'>{result}</h2>
			</div>
		</div>
	);
};

export default Box;
