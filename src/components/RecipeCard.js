import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

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
          <Typography gutterBottom variant="h5" component="div" >
            {recipe.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul> Ingredients
                {renderedIngredients}
            </ul>
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
}
export default RecipeCard;
