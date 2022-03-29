import '../App.css';
import NavBar from './NavBar'
<<<<<<< HEAD
import {useState, useEffect} from 'react'
=======
import {useEffect, useState} from 'react'
>>>>>>> newRecipe
import CookBookList from './CookBookList';
import NewRecipe from './NewRecipe';
import RecipeCards from './RecipeCards'

//json-server --watch sample.json -p 3001

function App() {
<<<<<<< HEAD

  const [cookBooks, setCookBooks] = useState ([])

  useEffect(() => {
  fetch(`http://localhost:3001/allcookbooks`)
  .then(resp => resp.json())
  .then(cookBooksData => setCookBooks(cookBooksData))
  }, [])
=======
  const [recipes,setRecipes] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/recipes')
    .then(res => res.json())
    .then(setRecipes)
  },[])

  function handleNewRecipe (newRecipe) {
    setRecipes([...recipes, newRecipe])
  }

>>>>>>> newRecipe
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
<<<<<<< HEAD
        <CookBookList cookBooks={cookBooks}/>
        <NewRecipe />
=======
        <CookBookList />
        <NewRecipe handleNewRecipe={handleNewRecipe} />
        <RecipeCards recipes={recipes} />
>>>>>>> newRecipe
      </header>
    </div>
  );
}
export default App;