import "../App.css";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CookBookList from "./CookBookList";
import NewRecipe from "./NewRecipe";
import RecipeList from "./RecipeList";
import Home from './Home'

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((res) => res.json())
      .then(setRecipes);
  }, []);

  function handleNewRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe]);
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="CookBookList" element={<CookBookList recipes={recipes}/>} />
        <Route
          path="NewRecipe"
          element={<NewRecipe handleNewRecipe={handleNewRecipe} />}
        />
        <Route path="AllRecipes" element={<RecipeList recipes={recipes} />} />
      </Routes>
    </div>
  );
}
export default App;
