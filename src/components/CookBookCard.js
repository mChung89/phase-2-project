import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Recipe from "./Recipe";

function CookBookCard({ id, image }) {

  return (
    <Grid key={id} item xs>
      <Card sx={{ width: 330, height: 350 }}>
        <CardMedia
          component="img"
          height="80%"
          image={image}
          alt={id}
          id={id}
        />
        <CardContent sx={{ maxHeight: '50%', overflow: 'auto'}}>
          <Typography gutterBottom variant="h5" component="div" >
            {id}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {id}
          </Typography> */}
        </CardContent>
      </Card>
    </Grid>
  );
}
export default CookBookCard;