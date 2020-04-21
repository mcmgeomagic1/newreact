import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2 ma3'>
		    <input 
		    type='search' 
		    placeholder='search robots'
		    className=' ba b--green  bglightest-blue pa2 br4 '
		    onChange={searchChange}
		    />
		</div>
    );
}

export default SearchBox;