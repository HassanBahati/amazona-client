import React from "react";

function Product(props) {
    const {product} = props;
  return (
    <div>
      <div key={product._id} className="card">
        <a href={`/product/${product._id}`}>
          {/* image size: 680px by 830px    */}
          <img className="medium" src={product.image} alt={product.name} />
        </a>
        {/* card body   */}
        <div className="card-body">
          <a href={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </a>
       </div>
      </div>
    </div>
  );
}

export default Product;