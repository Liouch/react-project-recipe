import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Recipe from './Components/Recipe';

function App() {
  const APP_ID = 'f685dd2d';
  const APP_KEY = 'baec6a92df968856193c3083cb691ba5'

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] =useState('chicken');
  
  useEffect( ()=>{
    getRecipes();
  }, [query])
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  
  }
  const updateSearch = (event) =>{
    setSearch(event.target.value)
  }
  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search)
    setSearch('')
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>  
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Submit</button>
 
        
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          img={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
      ))}
      </div>
    </div>
  );
}

export default App;
