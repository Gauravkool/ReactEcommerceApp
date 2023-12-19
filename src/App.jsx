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
import CartProvider from "./providers.jsx/CartProvider";

function App() {
  return (
    <div className="bg-gray-200 h-screen overflow-scroll flex flex-col">
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <Navbar />
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
                      <ProductDetail />
                    </UserRoute>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <UserRoute>
                      <CartPage />
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
        </CartProvider>
      </UserProvider>
    </div>
  );
}
export default App;
