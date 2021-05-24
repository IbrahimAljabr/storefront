import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { electronics, food } from "../redux/action";

const Products = (props) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={5}>
          {props?.products?.arrOfProducts.map((product) => {
            return (
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={product.url}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      View Details
                    </Button>
                    <Button size="small" color="primary">
                      Add TO Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products };
};

const mapDispatchToProps = { electronics, food };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
