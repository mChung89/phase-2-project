import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container"
function Home() {
  return (
    <Container mt={2}>
      <Typography justifyContent="center" mx={2} variant="h1">The Definitive <span>Ultimate</span> Cookbook.</Typography>
      <Typography mx={2} variant="p">.v2</Typography>
    </Container>
  );
}

export default Home;
