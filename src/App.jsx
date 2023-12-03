import { Route, Routes } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="bg-gray-200 h-screen overflow-scroll">
      <Navbar />
      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
