import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([{}]);

  const getTheProductsFromServer = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getTheProductsFromServer();
  }, []);

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          {products.map((product) => (
            // 12/4 = 3
            <div className="col-md-3">
              <Link to={`/product/${product.id}`}>
                <div className="card my-2 text-dark" key={product.id}>
                  <div className="">
                    <img
                      src={product.image}
                      className="card-img-top img-fluid image-section p-2"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" class="btn btn-primary">
                      Add
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
