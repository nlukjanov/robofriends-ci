import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  console.log('SearchBox')
  return (
    <div className='pa2'>
      <label htmlFor="search">Search Robots</label>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        id="search"
        type="search"
        placeholders='search robots'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;
