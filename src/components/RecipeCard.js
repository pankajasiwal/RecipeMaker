function RecipeCard({ id, title, image, recipeDetail }) {
  return (
    <div key={id} className='relative border-[3px] border-solid border-yellow-600 rounded-md max-w-xs'>
      <div className='w-full flex justify-center p-5'>
        <img src={image} alt='recipe-img' className='w-full  object-contain' />
      </div>
      <div className='px-5 py-2'>
        <h2 className='capitalize text-lg font-semibold text-orange-500'>{title}</h2>
      </div>
      <div className='px-5 py-2'>
        <button className='bg-green-800 px-5 py-1 text-white font-medium text-[17px]' onClick={() => recipeDetail(id)}>
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
