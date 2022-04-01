import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
function Home() {
  return (
    <Container mt={10}>
      <Container>
        <Typography textAlign="center" justifyContent="center" mx={2} mt={6} variant="h1">The Definitive <span>Ultimate</span> Cookbook.</Typography>
        <Typography mx={2} justifyContent="right" variant="p">.v2</Typography>
      </Container>
      <Container>
        <Stack>
          <Box component="img" sx={{ borderRadius: 2 }} mt={4} src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg"/>
        </Stack>
      </Container>
    </Container>
  );
}

export default Home;
