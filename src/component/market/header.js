import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <>
      <AppBar color="default" position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Store
          </Typography>
          <IconButton aria-label="cart">
            <Badge badgeContent={1} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}