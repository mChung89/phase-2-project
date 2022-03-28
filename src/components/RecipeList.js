import {useState} from 'react'
import Search from "./Search";
import Favorites from "./Favorites";
import Recipe from "./Recipe";


function RecipeList() {
    return (
      <div className="App">
          <Recipe />
          <Favorites />
          <Search />
      </div>
    );
  }
  
  export default RecipeList;