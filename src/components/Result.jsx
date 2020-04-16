import React from 'react';

function Result({ result, openPopup }) {
  return (
    <div className='result' onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} alt='description of poster' />
    </div>
  );
}

export default Result;
