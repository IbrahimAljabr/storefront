import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

export default function Footer() {
  return (
    <>
      <footer>
        <Box>
          <Container maxwidth="lg">
            <Grid>Copyright Store 2021</Grid>
          </Container>
        </Box>
      </footer>
    </>
  );
}
