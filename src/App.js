import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddProduct from "./components/product/addProduct";
import Product from "./components/product/product";
import AddToCart from "./components/product/addToCart";
import MenuBar from "./components/menuBar";
import Home from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <MenuBar/>
      <Link to="/addProduct">hi</Link>
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/AddProduct" element={<AddProduct />}/>
        <Route path="/Shopping" element={<Product />}/>
        <Route path="/AddToCart" element={<AddToCart />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
