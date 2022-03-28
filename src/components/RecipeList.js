import {useState} from 'react'
import Search from "./Search";
import Favorites from "./Favorites";
import Recipe from "./Recipe";


function RecipeList({cookBooks}) {
    return (
      <div className="App">
          {/* {cookBooks.map((cookBook) => <Recipe cookBook={cookBook}/>)} */}
          <Favorites />
          <Search />
      </div>
    );
  }
  
  export default RecipeList;