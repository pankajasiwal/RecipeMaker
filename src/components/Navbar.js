import React, { useState } from 'react';
import { fetchWithQuery } from '../ApiServices';

function Navbar({ setRecipe, setInitialState }) {
  const [query, setQuery] = useState('');
  const searchHandler = async (event) => {
    if (event.key == 'Enter') {
      setQuery('');

      const recipes = await fetchWithQuery(query);

      if (recipes.results.length > 0) {
        // console.log(recipes.results);
        setRecipe(recipes.results);
        setInitialState(false);
      }
    }
  };

  return (
    <div className='flex flex-col sm:justify-between sm:flex-row items-center py-5 space-y-3'>
      <h1 className='text-xl font-bold text-orange-600'>
        Make <span className='text-yellow-500'>Recipe</span>
      </h1>
      <div>
        <input
          type='text'
          placeholder='search for Recipe...'
          className='px-4 py-1 rounded text-black outline-none capitalize'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={searchHandler}
        />
      </div>
      <h2 className='text-lg bg-orange-400 px-2 cursor-pointer' onClick={() => setInitialState(true)}>
        Home
      </h2>
    </div>
  );
}

export default Navbar;
