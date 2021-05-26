import { connect } from "react-redux";
import { food, electronics, add } from "../redux/action";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Category = (props) => {
  let value;
  let name;
  let description;
  function handleChange() {
    if (props?.categories?.categories[0]) {
      if (props?.categories?.categories[0].name === "FOOD") {
        value = 0;
        name = props?.categories?.categories[0].displayName;
        description = props?.categories?.categories[0].description;
      }
      if (props?.categories?.categories[0].name === "ELECTRONICS") {
        value = 1;
        name = props?.categories?.categories[0].displayName;

        description = props?.categories?.categories[0].description;
      }
    }
  }
  return (
    <section>
      <div id="tabs">
        <Tabs onChange={handleChange()} value={value} indicatorColor="primary" textColor="primary">
          <Tab
            onClick={() => {
              props.food("FOOD");
            }}
            label="FOOD"
          />
          <Tab
            onClick={() => {
              props.electronics("ELECTRONICS");
            }}
            label="ELECTRONICS"
          />
        </Tabs>
      </div>
      <div id="categoryTitle">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.categories };
};

const mapDispatchToProps = { food, electronics };
export default connect(mapStateToProps, mapDispatchToProps)(Category);
