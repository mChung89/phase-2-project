import { useState, useEffect } from "react";
import CookBookCard from "./CookBookCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RecipeList from "./RecipeList";
import NewCookBook from "./NewCookBook";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

function CookBookList({ recipes }) {
  const [bookImages, setBookImages] = useState([]);
  const [filterByAuthor, setFilterByAuthor] = useState("My Cookbook");

  useEffect(() => {
    fetch("http://localhost:3001/cookbooks")
      .then((resp) => resp.json())
      .then((bookImgData) => setBookImages(bookImgData));
  }, []);

  const filteredCookbook = recipes.filter((recipe) => {
    if (recipe.author === filterByAuthor) {
      return true;
    }
  });

  function handleClick(e) {
    setFilterByAuthor(e.target.id);
  }

  const renderedBookImages = bookImages.map((bookImg) => (
    <CookBookCard
      key={bookImg.id}
      id={bookImg.author}
      image={bookImg.imageUrl}
    />
  ));

  function handleNewCookBook(newCookBook) {
    console.log("handle new cookbook log: ", newCookBook);
    setBookImages([...bookImages, newCookBook]);
  }

  return (
    <>
      <Stack direction="row">
        <Grid container alignSelf="center" sx={{width: "70%"}}>
          <Box onClick={handleClick} sx={{ ml: 3, flexGrow: 1}}>
          <Typography sx={{ p: 1 }} variant="h2" style={{fontSize: "2rem"}}>Your Cookbooks</Typography>
            <Grid container spacing={3}>
              {renderedBookImages}
            </Grid>
          </Box>
        </Grid>
        <Grid>
          <NewCookBook handleNewCookBook={handleNewCookBook} />
        </Grid>
      </Stack>
      <div>
        <RecipeList recipes={filteredCookbook} />
      </div>
    </>
  );
}

export default CookBookList;
