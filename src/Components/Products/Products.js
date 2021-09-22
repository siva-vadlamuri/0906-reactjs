import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../../redux/ProductActions/ProductActions";
import "./Products.css";
const Products = () => {
  const [productsData, setProductsData] = useState([{
    id : 1,
    name : 'Product'
  }]);
  const dispatch = useDispatch();
   const products =  useSelector((state)=>state.products);
   console.log(products);

  const getTheProductsFromServer = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    // console.log(setProducts(data));
    console.log(setProducts(data))
    dispatch(setProducts(data)); 
    // setProducts(data);
  };

  useEffect(() => {
    getTheProductsFromServer();
    setProductsData(products);
  }, []);

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          {productsData &&  productsData?.map((product) => (
           
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
