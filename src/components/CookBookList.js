import {useState, useEffect} from 'react'
import RecipeList from './RecipeList';
import { useNavigate } from 'react-router-dom';

function CookBookList({recipes}) {

    const [bookImages, setBookImages] = useState([])
    const [filterByAuthor, setFilterByAuthor] = useState('me')

    const navigate = useNavigate()
    
    useEffect(() => {
        fetch('http://localhost:3001/images')
        .then(resp => resp.json())
        .then(bookImgData => setBookImages(bookImgData))
    }, [])
    
    
    const filteredCookbooks = recipes.filter(recipe => {
        if (recipe.author === filterByAuthor){
            return true
         }
     })
    
    function handleClick (e) {
        setFilterByAuthor(e.target.id)
        .then(() => navigate(`/RecipeList/`))

    }

    const renderedBookImages = bookImages.map(bookImg => <img src={bookImg.imageUrl} key={bookImg.id} id={bookImg.author} onClick={handleClick}/>)

    const renderedRecipes = filteredCookbooks.map(cookbook => <RecipeList key={cookbook.id}/>)


  return (
    <div>
        {renderedBookImages}
        {renderedRecipes}
    </div>
  );
}

export default CookBookList;