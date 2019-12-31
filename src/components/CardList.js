import React from 'react';
import Card from './Card.js';

const CardList = ({fonts, textfield, size}) => {
	return (		
		<div style={{display: "flex"}, {alignItems: "stretch"}} className='mv1 dib'> {
			fonts.map((user, i) => {
				return (<Card key={i} family={fonts[i].family}/>)
			})}
		</div>
		
	);
}

export default CardList;

