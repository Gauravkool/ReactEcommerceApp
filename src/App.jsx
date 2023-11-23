import { useState } from "react";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Table from "./Table";
function App() {
  const [flip, setFlip] = useState(false);
  let key1 = "table1";
  let key2 = "table2";
  if (flip) {
    key1 = "table2";
    key2 = "table1";
  }
  function handleflip() {
    setFlip(!flip);
  }
  return (
    <>
      {/* <div>
        <div className="flex gap-2">
          <Product
            title="Black plain mug"
            category="Mug"
            price="99"
            image="https://m.media-amazon.com/images/I/51f39cB-ptL._AC_UF894,1000_QL80_.jpg"
          />
          <Product
            title="T-shirt"
            category="Black T-shirt"
            price="499"
            image="https://m.media-amazon.com/images/I/61kLgtW5ScL._SY741_.jpg"
          />
          <Product
            title="iPhone"
            category="Mobile"
            price="1999"
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661026582322"
          />
          <Product
            title="HP Elite Probook"
            category="Laptop"
            price="10999"
            image="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flaptops%2F&psig=AOvVaw2YYVxH1zPYbY9g-C__YCgW&ust=1700754007102000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNCNvMT414IDFQAAAAAdAAAAABAE"
          />
        </div>
      </div> */}
      <ProductDetail />
      <div className="flex">
        <Table key={key1} />
        <Table key={key2} />
      </div>
      <button
        onClick={handleflip}
        className="bg-red-600 text-white py-1 px-2 rounded-md">
        Flip
      </button>
    </>
  );
}
export default App;
