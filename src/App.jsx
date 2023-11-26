import { Route, Routes } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<ProductListPage />} />
        <Route path="/products/1" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
export default App;
