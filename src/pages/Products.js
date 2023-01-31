import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const ProductsPage = () => {
  return (
    <>
      <div>Products</div>
      <ul>
        {PRODUCTS.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/products/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsPage;
