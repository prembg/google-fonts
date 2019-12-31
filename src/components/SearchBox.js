import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div className='p2'>
					<input className='pa3' 
					type='search' 
					placeholder='search robots'
					onChange={searchChange}
					/>
		</div>
		
	)
}

export default SearchBox;