import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/NavBar/Navbar";
import Products from "./components/Product/Products";
import CartContextProvider from "./GlobalState/CartContext";
import ProductsContextProvider from "./GlobalState/ProductsContext";
import ProductDetails from "./components/Product/ProductDetails";
import Footer from "./components/Footer/Footer";
import MobileNavigation from "./components/NavBar/MobileNavigation";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";
import Login from "./Auth/Login/Login";
import ForgotPasswordForm from "./Auth/ForgotPassword/ForgotPasswordForm";
import Register from "./Auth/Register/Register";
const App = () => {
  return (
    <>
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            {/* <Banner /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/order" element={<Order />} />
              <Route path="/login" element={<Login />} />
              <Route path='/forgotpassword'  element={<ForgotPasswordForm/>} />
              <Route path='/register'  element={<Register/>} />

            </Routes>
            <MobileNavigation />
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
      
    </>
  );
};

export default App;
