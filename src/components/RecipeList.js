import { useState } from "react";
import Search from "./Search";
import Favorites from "./Favorites";
import RecipeCard from "./RecipeCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function RecipeList({ recipes }) {
  const [searchFilter, setSearch] = useState("");
  const renderedCards = recipes
    .filter((recipe) =>
      recipe.name.toLowerCase().includes(searchFilter.toLowerCase())
    )
    .map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />);
  return (
    <>
      <Search setSearch={setSearch} searchFilter={searchFilter} />
      <Box sx={{ flexGrow: 1, pt: 10 }}>
        <Grid container spacing={3}>
          {renderedCards}
        </Grid>
      </Box>
    </>
  );
}

export default RecipeList;
