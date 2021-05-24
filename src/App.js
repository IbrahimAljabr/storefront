import Nav from "./component/market/header";
import Footer from "./component/market/footer";
import Categories from "./component/market/categories";
import Product from "./component/market/products";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Categories />
      <Product />
      <Footer />
    </>
  );
}

export default App;
