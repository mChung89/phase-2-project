import { Card, CardActions, CardContent, CardMedia, Typography, Grid } from "@mui/material"
import Recipe from "./Recipe";

function RecipeCard({ recipe }) {

  const renderedIngredients = recipe.ingredients.map((step, index) => {
  return <li key={index}>{step}</li>}
  )

  return (
    <Grid key={recipe.id} item xs>
      <Card sx={{ width: 330, height: 350 }}>
        <CardMedia
          component="img"
          height="140"
          image={recipe.image}
          alt={recipe.name}
        />
        <CardContent sx={{ maxHeight: '50%', overflow: 'auto'}}>
          <Typography gutterBottom variant="h4" component="div" style={{fontSize: "1.5rem"}} >
            {recipe.name}
          </Typography>
        <CardActions>
          {/* <Button size="small">View Recipe</Button> */}
          <Recipe recipe={recipe} renderedIngredients={renderedIngredients}/>
        </CardActions>
          <Typography variant="body2" color="text.secondary">
            <ul> Ingredients
                {renderedIngredients}
            </ul>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default RecipeCard;
