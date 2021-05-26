import Nav from "./component/market/header";
import Footer from "./component/market/footer";
import Categories from "./component/market/categories";
import Product from "./component/market/products";
import Simple from "./component/market/simpleCart";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Simple />
      <Categories />
      <Product />
      <Footer />
    </>
  );
}

export default App;
