import { Route, Routes } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound";
import { useMemo, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";

function App() {
  const savedDataString = localStorage.getItem("myCart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);

  const handleAddToCart = (productId, count) => {
    const oldCart = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCart + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("myCart", cartString);
  };
  const totalCount = useMemo(() => {
    console.log("cart calculation");
    return Object.keys(cart).reduce(
      (previousValue, currentValue) => previousValue + cart[currentValue],
      0
    );
  }, [cart]);
  return (
    <div className="bg-gray-200 h-screen overflow-scroll">
      <Navbar productCount={totalCount} />
      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />} />
          <Route
            path="/products/:id"
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
