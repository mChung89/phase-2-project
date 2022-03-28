import '../App.css';
import NavBar from './NavBar'
import {useState} from 'react'
import CookBookList from './CookBookList';
import NewRecipe from './NewRecipe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <CookBookList />
        <NewRecipe />
      </header>
    </div>
  );
}

export default App;