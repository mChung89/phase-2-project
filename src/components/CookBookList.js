import {useState, useEffect} from 'react'
import Search from "./Search";
import CookBookCard from './CookBookCard';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SearchBy from "./SearchBy"
import Stack from "@mui/material/Stack"
import RecipeList from './RecipeList';

// function RecipeList({ recipes }) {
//   const [searchFilter, setSearch] = useState("");
//   const [searchBy, setSearchBy] = useState('name');
//   const renderedCards = searchBy === "name" ? recipes
//     .filter((recipe) =>
//       recipe.name.toLowerCase().includes(searchFilter.toLowerCase())
//     )
//     .map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />) : recipes
//     .filter((recipe) =>
//       recipe.ingredients.join('').toLowerCase().includes(searchFilter.toLowerCase())
//     )
//     .map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
    
//   return (
//     <>
//       <Stack direction="row" sx={{ width: 1600}}>
//         <Search setSearch={setSearch} searchFilter={searchFilter} />
//         <SearchBy setSearchBy={setSearchBy} />
//       </Stack>
//       <Box sx={{ flexGrow: 1, pt: 10 }}>
//         <Grid container spacing={3}>
//           {renderedCards}
//         </Grid>
//       </Box>
//     </>
//   );
// }

// export default RecipeList;






function CookBookList({recipes}) {

    const [bookImages, setBookImages] = useState([])
    const [filterByAuthor, setFilterByAuthor] = useState('My Cookbook')

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

    const renderedBookImages = bookImages.map(bookImg =>  <CookBookCard key={bookImg.id} id={bookImg.author} image={bookImg.imageUrl}/>)


  return (
        <>
          <Box onClick={handleClick} sx={{ flexGrow: 1, pt: 10 }}>
            <Grid container spacing={3}>
                {renderedBookImages}
            </Grid>
          </Box>
        <div>
            <RecipeList recipes={filteredCookbook}/>
        </div>
        </>
  );
}

export default CookBookList;