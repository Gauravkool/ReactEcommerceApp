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
import CartPage from "./CartPage";
import Test from "./Test";
import Alert from "./Alert";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";
import AlertProvider from "./providers.jsx/AlertProvider";
import UserProvider from "./providers.jsx/UserProvider";

function App() {
  const savedDataString = localStorage.getItem("myCart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);

  const handleAddToCart = (productId, count) => {
    const oldCart = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCart + count };
    updateCart(newCart);
  };

  const updateCart = (newCart) => {
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("myCart", cartString);
  };

  const totalCount = useMemo(() => {
    return Object.keys(cart).reduce(
      (previousValue, currentValue) => previousValue + cart[currentValue],
      0
    );
  }, [cart]);

  return (
    <div className="bg-gray-200 h-screen overflow-scroll flex flex-col">
      <UserProvider>
        <AlertProvider>
          <Navbar productCount={totalCount} setCart={setCart} />
          <Alert />
          <div className="grow">
            <Routes>
              <Route
                index
                element={
                  <UserRoute>
                    <ProductListPage />
                  </UserRoute>
                }
              />
              <Route
                path="/products/:id"
                element={
                  <UserRoute>
                    <ProductDetail onAddToCart={handleAddToCart} />
                  </UserRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <UserRoute>
                    <CartPage cart={cart} updateCart={updateCart} />
                  </UserRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <AuthRoute>
                    <Login />
                  </AuthRoute>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route
                path="*"
                element={
                  <UserRoute>
                    <NotFound />
                  </UserRoute>
                }
              />
              <Route path="/test" element={<Test />} />
            </Routes>
          </div>
          <Footer />
        </AlertProvider>
      </UserProvider>
    </div>
  );
}
export default App;
