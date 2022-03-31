import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

function RecipePreview({ formData }) {
  const renderedIngredients = formData.ingredients.map((each) => (
    <li>{each}</li>
  ));

  const renderedDirections = formData.directions.map((each) => <li>{each}</li>);

  const imageContainer = (
    <Grid
      component="img"
      sx={{ ml: 4, mt: 3, objectFit: "contain", borderRadius: 2, width: "50%" }}
      src={formData.image}
    />
  );

  const ingredientsGrid = (
    <Grid
      sx={{
        width: "50%",
        ml: 2,
        mt: 3,
        mr: 4,
        border: 1,
        borderRadius: 2,
        maxHeight: "100%",
        overflow: "auto",
      }}
    >
      <Typography sx={{ p: 1 }}>
        Ingredients :<ul>{renderedIngredients}</ul>
      </Typography>
    </Grid>
  );

  const directionsGrid = (
    <Grid
      item
      sx={{
        m: 2,
        ml: 4,
        mr: 4,
        border: 1,
        borderRadius: 2,
        maxHeight: "55%",
        overflow: "auto",
      }}
    >
      <Typography sx={{ p: 1 }}>
        Directions:
        <ol>{renderedDirections}</ol>
      </Typography>
    </Grid>
  );

  return (
    <Paper
      elevation={3}
      sx={{ bgcolor: "white", minWidth: "50%", height: 600 }}
    >
      <Stack direction="row" sx={{ height: "40%" }}>
        {formData.image ? imageContainer : null}
        {formData.ingredients[0] !== undefined ? ingredientsGrid : null}
      </Stack>
      {formData.directions[0] !== undefined ? directionsGrid : null}
    </Paper>
  );
}

export default RecipePreview;
