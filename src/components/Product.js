import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product(props) {
  const { product } = props;
  return (
    <div>
      <div key={product._id} className="card">
        <Link to={`/product/${product._id}`}>
          {/* image size: 680px by 830px    */}
          <img className="medium" src={product.image} alt={product.name} />
        </Link>
        {/* card body   */}
        <div className="card-body">
          <a href={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </a>
          <Rating rating={product._id} numReviews={product.numReviews}></Rating>
          <div className="price">${product.price}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
