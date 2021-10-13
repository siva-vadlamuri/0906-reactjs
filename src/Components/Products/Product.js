import { useState, useEffect } from "react";
import { addToCart } from "../../redux/ProductActions/ProductActions";
import { useDispatch,useSelector } from "react-redux";

const Product = (props) => {

  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  //   console.log(props);
  const getSingleProduct = async () => {
    const id = props.match.params.id;

    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    // console.log(data);
    setProduct(data);
  };

  const handleClick = ()=>{
     dispatch(addToCart(product));
  }

  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <div>
      {/* <h2>Product Detail Page</h2> */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <img
              src={product?.image}
              className="img-fluid"
              alt="Product Image"
            />
          </div>
          <div className="col-md-9">
            <div>
              <h2>{product?.title}</h2>
              <p>{product?.description}</p>
              <div>
                <button className="btn btn-info" onClick={handleClick}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
