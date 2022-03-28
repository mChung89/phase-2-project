import '../App.css';
import NavBar from './NavBar'
import {useState, useEffect} from 'react'
import CookBookList from './CookBookList';
import NewRecipe from './NewRecipe';

//json-server --watch sample.json -p 3001

function App() {

  const [cookBooks, setCookBooks] = useState ([])

  useEffect(() => {
  fetch(`http://localhost:3001/allcookbooks`)
  .then(resp => resp.json())
  .then(cookBooksData => setCookBooks(cookBooksData))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <CookBookList cookBooks={cookBooks}/>
        <NewRecipe />
      </header>
    </div>
  );
}

export default App;