import {useState, useEffect} from 'react'
import RecipeList from './RecipeList';

function CookBookList({recipes}) {

    const [bookImages, setBookImages] = useState([])
    const [filterByAuthor, setFilterByAuthor] = useState('me')

    useEffect(() => {
        fetch('http://localhost:3001/images')
        .then(resp => resp.json())
        .then(bookImgData => setBookImages(bookImgData))
    }, [])
    
    
    const filteredCookbook = recipes.filter(recipe => {
        if (recipe.author === filterByAuthor){
            return true
         }
     })
    
    function handleClick (e) {
        setFilterByAuthor(e.target.id)
    }

    const renderedBookImages = bookImages.map(bookImg => <img src={bookImg.imageUrl} key={bookImg.id} id={bookImg.author} onClick={handleClick}/>)


  return (
    <div>
        {renderedBookImages}
        <RecipeList recipes={filteredCookbook}/>
    </div>
  );
}

export default CookBookList;