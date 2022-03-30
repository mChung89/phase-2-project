import {useState, useEffect} from 'react'
import CookBookCard from './CookBookCard';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RecipeList from './RecipeList';
import NewCookBook from './NewCookBook';

function CookBookList({recipes}) {

    const [bookImages, setBookImages] = useState([])
    const [filterByAuthor, setFilterByAuthor] = useState('My Cookbook')

    useEffect(() => {
        fetch('http://localhost:3001/cookbooks')
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

    const renderedBookImages = bookImages.map(bookImg =>  <CookBookCard key={bookImg.id} id={bookImg.author} image={bookImg.imageUrl}/>)
    
    function handleNewCookBook (newCookBook) {
        console.log("handle new cookbook log: ", newCookBook)
         setBookImages([...bookImages, newCookBook])
    }

  return (
    <>
        <Box onClick={handleClick} sx={{ flexGrow: 1, pt: 10 }}>
            <Grid container spacing={3}>
                {renderedBookImages}
            </Grid>
        </Box>
        <NewCookBook handleNewCookBook={handleNewCookBook}/>
        <div>
            <RecipeList recipes={filteredCookbook}/>
        </div>
    </>
  );
}

export default CookBookList;