import { useState } from "react";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Table from "./Table";
import ProductList from "./ProductList";
function App() {
  console.log("App component is runnig");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const allData = [
    {
      id: 1,
      title: "Black plain mug",
      category: "Mug",
      price: "999",
      image:
        "https://m.media-amazon.com/images/I/51f39cB-ptL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 2,
      title: "T-shirt",
      category: "Black T-shirt",
      price: "499",
      image: "https://m.media-amazon.com/images/I/61kLgtW5ScL._SY741_.jpg",
    },

    {
      id: 3,
      title: "iPhone",
      category: "Mobile",
      price: "1999",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661026582322",
    },
    {
      id: 4,
      title: "HP Elite Probook",
      category: "Laptop",
      price: "199",
      image:
        "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flaptops%2F&psig=AOvVaw2YYVxH1zPYbY9g-C__YCgW&ust=1700754007102000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNCNvMT414IDFQAAAAAdAAAAABAE",
    },
  ];

  const data = allData.filter((p) => {
    const lowerCaseTitle = p.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  if (sort == "priceLow") {
    data.sort((a, b) => a.price - b.price);
  } else if (sort == "priceHigh") {
    data.sort((a, b) => b.price - a.price);
  } else if (sort == "title") {
    data.sort((a, b) => (a.title > b.title ? 1 : -1));
  }
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    console.log("sorted value", e.target.value);
    setSort(e.target.value);
  };
  return (
    <div className="p-24 flex flex-col">
      <div className="mb-2">
        <input
          value={query}
          type="text"
          placeholder="Search"
          className="rounded-md border p-2 border-green-500"
          onChange={handleQueryChange}
        />
        <select
          value={sort}
          onChange={handleSortChange}
          className="border border-green-500 rounded-md p-2 ml-2">
          <option value="default">Default sort</option>
          <option value="title">Sort by Title</option>
          <option value="priceLow">Sort by price low to high</option>
          <option value="priceHigh">Sort by price high to low</option>
        </select>
      </div>
      <ProductList products={data} />
    </div>
  );
}
export default App;
