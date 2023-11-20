const API_KEY = 'aa179f03bc0e453f8dc7631f481d8743';

// https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=aa179f03bc0e453f8dc7631f481d8743

const fetchWithQuery = async (query) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
};

const fetchWithId = async (id) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`,
  );
  const data = await response.json();
  return data;
};

export { fetchWithQuery, fetchWithId };
