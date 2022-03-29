import {useState, useEffect} from 'react'
import RecipeList from './RecipeList';

function CookBookList() {


    const [books, setBooks] = useState([])

    useEffect(() => {
    fetch('http://localhost:3001/images')
    .then(resp => resp.json())
    .then(bookImgData => setBooks(bookImgData))
    }, [])
   
    function handleClick (){
        console.log("clicked")
    }

    const renderedBooks = books.map(book => <img src={book.imageUrl} key={book.id} onClick={handleClick}/>)
    

  return (
    <div>
        {renderedBooks}
    </div>
  );
}

export default CookBookList;