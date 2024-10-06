import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddProduct from "./components/product/addProduct";
import Product from "./components/product/product";
import AddToCart from "./components/product/addToCart";
import MenuBar from "./components/menuBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <MenuBar/>
      <Link to="/addProduct">hi</Link>
      <Routes>
        <Route index path="/" element={<AddProduct />}/>
        <Route path="/shopping" element={<Product />}/>
        <Route path="/addToCart" element={<AddToCart />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
