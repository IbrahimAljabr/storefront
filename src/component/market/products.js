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
import { electronics, food, add } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get } from "../redux/action";

const api = "https://api-js401.herokuapp.com/api/v1/products";

const Products = (props) => {
  let products = [];
  if (props?.products?.products) {
    products = props.products.products.filter((product) => {
      return product.inStock > 0;
    });
  }
  const state = useSelector((state) => {
    return { cart: state };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get());
  }, []);

  return (
    <Box className="con-all">
      <Container>
        <Grid container spacing={4}>
          {products.map((product) => {
            return (
              <Grid key={product.name} item xs={12} sm={4}>
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
                      <Typography component="p">{product.price}</Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                      </Typography>
                      <Typography variant="body" color="textSecondary" component="p">
                        {product.inStock} Left
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      View Details
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => {
                        props.add(product);
                      }}
                    >
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

const mapDispatchToProps = { electronics, food, add };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
