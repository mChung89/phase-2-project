import { useState, useEffect } from "react";
import { Typography, Stack, Grid, Box } from "@mui/material";
import CookBookCard from "./CookBookCard";
import RecipeList from "./RecipeList";
import NewCookBook from "./NewCookBook";

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
        <Grid xs={15} container>
          <Typography sx={{ ml:3, p: 1 }} variant="h2" style={{fontSize: "2rem"}}>Your Cookbooks</Typography>
          <Box onClick={handleClick} sx={{ ml: 3, flexGrow: 1}}>
            <Grid direction="row" container spacing={1}>
              {renderedBookImages}
            </Grid>
          </Box>
        </Grid>
        <Grid xs={3}>
          <NewCookBook sx={{bgcolor:'white'}} handleNewCookBook={handleNewCookBook} />
        </Grid>
      </Stack>
      <div>
        <RecipeList recipes={filteredCookbook} />
      </div>
    </>
  );
}

export default CookBookList;
