import React from 'react';
import data from './data';

function App() {
  return (
    <div className="grid-container">
      {/* header section   */}
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            Amazona
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      {/* main section  */}
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                {/* image size: 680px by 830px    */}
                <img
                  className="medium"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              {/* card body   */}
              <div className="card-body">
                <a href={`/product/${product._id}`}>
                  <h2>{product.name }</h2>
                </a>
                {/* rating   */}
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                {/*price section   */}
                <div className="price">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* footer section  */}
      <footer className="row center">All right reserverd</footer>
    </div>
  );
}

export default App;
