import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import PopUp from '../popUp/PopUp';
import { fetchWithId } from '../ApiServices';

function Recipes({ recipe, initialState }) {
  const [isActivePopup, setIsActivePopup] = useState(false);
  const [detail, setDetail] = useState([]);

  const recipeDetail = async (id) => {
    const details = await fetchWithId(id);
    setDetail(details);
    setIsActivePopup(true);
    console.log(detail);
  };
  return (
    <div className='flex flex-wrap gap-2 justify-center my-4'>
      {initialState && (
        <h2 className='text-center text-[30px] font-extrabold text-orange-700 tracking-wider'>
          There is nothing to show!
          <br />
          Try search for any Recipe.
        </h2>
      )}

      {recipe.length > 0 &&
        !initialState &&
        recipe.map((item) => (
          <RecipeCard key={item.id} id={item.id} title={item.title} image={item.image} recipeDetail={recipeDetail} />
        ))}

      {detail.id > 0 && <PopUp detail={detail} setIsActivePopup={setIsActivePopup} isActivePopup={isActivePopup} />}
    </div>
  );
}

export default Recipes;
