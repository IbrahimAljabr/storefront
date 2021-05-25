import React from "react";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { useDispatch, useSelector } from "react-redux";
import { electronics, food, add } from "../redux/action";

export default function CartList() {
  let listItems = [];
  const state = useSelector((state) => {
    return {
      candidates: state.candidates,
    };
  });
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
          <Typography>Cart List</Typography>
        </AccordionSummary>
        <AccordionDetails className="in-list">
          <Typography>Lorem ipsum dolor</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
