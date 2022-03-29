import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function RecipeCard({ recipe }) {
  const renderedIngredients = recipe.ingredients.map(step => <li>{step}</li>)
  return (
    <Grid item xs>
      <Card sx={{ width: 330, height: 350 }}>
        <CardMedia
          component="img"
          height="140"
          image={recipe.image}
          alt={recipe.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{overflow: 'auto'}}>
            {recipe.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul> Ingredients
                {renderedIngredients}
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default RecipeCard;
