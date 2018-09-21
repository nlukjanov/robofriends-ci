import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        aria-label="Search Robots"
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
