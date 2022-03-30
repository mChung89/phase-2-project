import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { CardActionArea } from '@mui/material';


function CookBookCard({ id, image }) {

  return (
    <Grid key={id} item xs>
      <Card sx={{ width: 330, height: "auto" }} >
        <CardActionArea>
            <div style={{ position: "relative" }}>
                <CardMedia 
                        style={{ height: "250px" }} 
                        component="img"
                        height="80%"
                        image={image}
                        alt={id}
                        id={id}
                    />
                <div style={{position: "absolute",
                    fontSize: "1.25rem",
                    backgroundColor: "rgba(0,0,0,0.7)" ,
                    color: "white", 
                    bottom: 10,
                    left: "50%",
                    transform: "translateX(-50%)",}}>
                        {id}
                </div>
            </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
export default CookBookCard;