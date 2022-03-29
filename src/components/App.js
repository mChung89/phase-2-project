import '../App.css';
import NavBar from './NavBar'
import {useEffect, useState} from 'react'
import { 
  Link,
  Routes,
  Route, } from "react-router-dom";
import CookBookList from './CookBookList';
import NewRecipe from './NewRecipe';
import RecipeCards from './RecipeCards'

//json-server --watch sample.json -p 3001

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
        <nav>
          <Link to="/CookBookList">CookBookList</Link>
          <Link to="/NewRecipe">NewRecipe</Link>
          <Link to="/AllRecipes">AllRecipes</Link>
        </nav>

        <Routes>
          <Route path="CookBookList" element={<CookBookList recipes={recipes}/>}/>
          <Route path="NewRecipe" element={<NewRecipe handleNewRecipe={handleNewRecipe} />}/>
          <Route path="AllRecipes" element={<RecipeCards recipes={recipes} /> }/>
        </Routes>
      </header>
    </div>
  );
}
export default App;