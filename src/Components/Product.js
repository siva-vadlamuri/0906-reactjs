// import React from 'react';
// import "../css/Product.css";
import styles from "../css/Product.module.css";

const Product = ({ name, price, description }) => {
  return (
    <div className="col-lg-4 d-flex">
      <div className="product">
        <h2>{name}</h2>
        <h3>{price}</h3>
        {/* Error Message */}
        {/* BEM Naming Conventions */}
        {/* product__error */}
        <p className={styles.error}>An Error Occured</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Product;
