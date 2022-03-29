import "../App.css";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import CookBookList from "./CookBookList";
import NewRecipe from "./NewRecipe";
import RecipeList from "./RecipeList";
import Grid from "@mui/material/Grid";

//json-server --watch sample.json -p 3001

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
      <Grid>
        <nav>
          <Link to="/CookBookList">CookBookList</Link>
          <Link to="/NewRecipe">NewRecipe</Link>
          <Link to="/AllRecipes">AllRecipes</Link>
        </nav>
      </Grid>

      <Routes>
        <Route path="CookBookList" element={<CookBookList />} />
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
