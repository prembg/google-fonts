import { IoIosAddCircleOutline } from "react-icons/io";
import React from 'react';
var WebFont = require('webfontloader');



const Card = ({family, textfield, size}) => {
	WebFont.load({
    google: {
      families: [`${family}`]
    }
  });

	const cardStyle = {
		fontFamily: family,
		fontSize: size,
		height: "120px",
		
	};

	return (
		<div className='tl dib w-20 bt ma2 pa3 .h5'>
			<div>
				<div className="flex justify-between">
		         <h2 className='f6 '>{family}</h2>
		         <IoIosAddCircleOutline />
		        </div>
		        <br />
		        <p style={cardStyle}>It was the night of the first falling star</p>
      		</div>
		</div>		
	);
}

export default Card;

