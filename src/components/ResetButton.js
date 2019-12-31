import React from 'react';

const ResetButton = ({searchfield, searchReset}) => {
	return(
		<div className='p2'>
			<button className='pa3 ba b--green bg-lightest-blue' 
			onClick={searchReset}>Reset searchfield
			</button>
		</div>
	)
}

export default ResetButton;