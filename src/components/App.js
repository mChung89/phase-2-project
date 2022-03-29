import '../App.css';
import NavBar from './NavBar'
import {useEffect, useState} from 'react'
import CookBookList from './CookBookList';
import NewRecipe from './NewRecipe';
import RecipeCards from './RecipeCards'

function App() {
  const [recipes,setRecipes] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/recipes')
    .then(res => res.json())
    .then(setRecipes)
  },[])

  function handleNewRecipe (newRecipe) {
    setRecipes([...recipes, newRecipe])
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <CookBookList />
        <NewRecipe handleNewRecipe={handleNewRecipe} />
        <RecipeCards recipes={recipes} />
      </header>
    </div>
  );
}
export default App;