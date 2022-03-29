import { useState } from "react";
import Search from "./Search";
import Favorites from "./Favorites";
import RecipeCard from "./RecipeCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SearchBy from "./SearchBy"
import Stack from "@mui/material/Stack"

function RecipeList({ recipes }) {
  const [searchFilter, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState('name');
  const renderedCards = searchBy === "name" ? recipes
    .filter((recipe) =>
      recipe.name.toLowerCase().includes(searchFilter.toLowerCase())
    )
    .map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />) : recipes
    .filter((recipe) =>
      recipe.ingredients.join('').toLowerCase().includes(searchFilter.toLowerCase())
    )
    .map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
    
  return (
    <>
      <Stack direction="row" sx={{ width: 1600}}>
        <Search setSearch={setSearch} searchFilter={searchFilter} />
        <SearchBy setSearchBy={setSearchBy} />
      </Stack>
      <Box sx={{ flexGrow: 1, pt: 10 }}>
        <Grid container spacing={3}>
          {renderedCards}
        </Grid>
      </Box>
    </>
  );
}

export default RecipeList;
