import { AiOutlineClose } from 'react-icons/ai';
import { createPortal } from 'react-dom';

function PopUp({ detail, setIsActivePopup, isActivePopup }) {
  return createPortal(
    <div>
      <div
        className={`${
          isActivePopup ? 'block' : 'hidden'
        } absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-2/4 h-[50vh] overflow-y-scroll rounded-xl bg-gray-200 px-3 py-4`}
      >
        <div>
          <AiOutlineClose className='static cursor-pointer' size={20} onClick={() => setIsActivePopup(false)} />
        </div>
        <h1 className='text-center text-[2em] font-bold'>{detail.title}</h1>
        <p className='text-center'>
          <a className='text-blue-800' href={detail.sourceUrl}>
            More Details
          </a>
        </p>

        <div className='py-7'>
          <p dangerouslySetInnerHTML={{ __html: detail.summary }}></p>
          <p className='py-3 font-semibold'>Ingredients used: </p>
          <ul className='list-disc pl-6'>
            {detail.extendedIngredients.map((ingredient, index) => (
              <li className='italic' key={index}>
                {ingredient.original}
              </li>
            ))}
          </ul>
        </div>
        <p className='font-medium '>
          Instruction:{' '}
          <span
            dangerouslySetInnerHTML={{ __html: detail.instructions }}
            className=' font-semibold text-gray-700'
          ></span>
        </p>
      </div>
    </div>,
    document.getElementById('recipeDetailPopup'),
  );
}

export default PopUp;
