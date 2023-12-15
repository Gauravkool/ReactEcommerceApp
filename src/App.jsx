import { Route, Routes } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound";
import { createContext, useEffect, useMemo, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import CartPage from "./CartPage";
import Test from "./Test";
import axios from "axios";
import Loading from "./Loading";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";

export const UserContext = createContext();
function App() {
  const savedDataString = localStorage.getItem("myCart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://myeasykart.codeyogi.io/me", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (user) {
          setUser(res.data);
          setLoadingUser(false);
        } else {
          setLoadingUser(false);
        }
      });
  }, []);
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

  if (loadingUser) {
    <Loading />;
  }
  return (
    <div className="bg-gray-200 h-screen overflow-scroll flex flex-col">
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar productCount={totalCount} />
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
                  <Login setUser={setUser} />
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
      </UserContext.Provider>
    </div>
  );
}
export default App;
