import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function RecipePreview({ formData }) {
  const renderedIngredients = formData.ingredients.map((each) => (
    <li>{each}</li>
  ))

  const renderedDirections = formData.directions.map((each) => (
    <li>{each}</li>
  ))
  return (
    <Paper sx={{ bgcolor: "white", minWidth: "50%", height: 600 }}>
      <Container
        component="img"
        sx={{ maxHeight: "40%", mt: 3}}
        src={formData.image}
      />
      <Container direction="column" sx={{ m: 2 }}>
        <Typography variant="h5">
          {formData.name ? `Recipe Name: ${formData.name}` : null}
        </Typography>
        <Typography>
          {formData.author ? `Recipe by: ${formData.author}` : null}
        </Typography>
      </Container>
      <Grid container direction="row" sx={{ p: 3 }}>
        <Grid xs={6} item>
          <Typography>
            {formData.ingredients[0] !== undefined ? `Ingredients :` : null}
            <ul>
              {renderedIngredients}
            </ul>
          </Typography>
        </Grid>
        <Grid xs={6} item>
          <Typography>
            {formData.directions[0] !== undefined ? `Directions: ` : null}
            <ol>
              {renderedDirections}
            </ol>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default RecipePreview;
