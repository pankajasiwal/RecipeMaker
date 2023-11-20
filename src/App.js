import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';

function App() {
  const [recipe, setRecipe] = useState([]);
  const [initialState, setInitialState] = useState(true);
  return (
    <div className='w-full'>
      <div className=' w-full md:px-16 px-6 bg-orange-100 text-white'>
        <Navbar setRecipe={setRecipe} setInitialState={setInitialState} />
      </div>

      <div className='md:px-6 px-2 w-full '>
        <Recipes recipe={recipe} initialState={initialState} />
      </div>

      <div className='h-full border-t-2 border-yellow-600'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
