import React from 'react';

function Search({ handleInput, search }) {
  return (
    <section className='searchbox-wrap'>
      <input
        type='text'
        placeholder='Search for a movie...'
        className='searchbox'
        onChange={handleInput}
        //When any key is pressed this function will run.
        onKeyPress={search}
      />
    </section>
  );
}

export default Search;
