import { useState } from "react";
import Search from "./Search";
import RecipeCard from "./RecipeCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SearchBy from "./SearchBy"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography";

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
      <Typography sx={{ p: 1 }} variant="h2" style={{fontSize: "2rem"}}>Recipes</Typography>
      <Box sx={{ flexGrow: 1, pt: 10 }}>
        <Grid container spacing={3}>
          {renderedCards}
        </Grid>
      </Box>
    </>
  );
}

export default RecipeList;
