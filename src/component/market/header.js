import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const state = useSelector((state) => {
    return {
      number: state.cartList,
    };
  });

  const classes = useStyles();

  return (
    <>
      <AppBar className="navbarr" color="default" position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Our Store
          </Typography>
          <IconButton aria-label="cart">
            <Badge badgeContent={state.number.num} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
