import { useState } from "react";
import { Typography, Stack, Grid, Box } from "@mui/material";
import Search from "./Search";
import RecipeCard from "./RecipeCard";
import SearchBy from "./SearchBy"

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
    <Stack sx={{mx:2, mt:2}}>
      <Stack component="paper" spacing={2} direction="row" sx={{ p:2, mb:2, width: "60%"}}>
        <Box>
          <Typography sx={{ p: 1}} variant="h2" style={{fontSize: "2rem"}}>Recipes</Typography>
        </Box>
        <Search setSearch={setSearch} searchFilter={searchFilter} />
        <SearchBy setSearchBy={setSearchBy} />
      </Stack>
      <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={3}>
          {renderedCards}
        </Grid>
      </Box>
      </Stack>
    </>
  );
}

export default RecipeList;
