import React from "react";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/action";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

export default function CartList() {
  const state = useSelector((state) => {
    console.log("🚀🚀🚀 ~~~~ state ~~~~ state", state);
    return {
      list: state,
    };
  });
  // console.log("🚀🚀🚀 ~~~~ state ~~~~ state", state);

  const dispatch = useDispatch();

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        className="list-head"
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Grid item xs={11}>
            <Typography>Cart List</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>+</Typography>
          </Grid>
        </AccordionSummary>

        {state.list.cartList.cart.map((item, idx) => {
          return (
            <AccordionDetails key={item + idx} className="in-list">
              <Grid item xs={9}>
                <Typography>{item}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Button
                  size="small"
                  color="secondary"
                  // onClick={() => {
                  //   dispatch(remove(state));
                  // }}
                >
                  <DeleteOutlinedIcon />
                </Button>
              </Grid>
            </AccordionDetails>
          );
        })}
      </Accordion>
    </div>
  );
}
