function App() {
  return (
    <div className="grid-container">
      {/* header section   */}
      <header className="row">
        <div>
          <a className="brand" href="index.htnl">
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
          {/* product item   */}
          <div className="card">
            <a href="product.html">
              {/* image size: 680px by 830px    */}
              <img className="medium" src="./images/product-1.jpeg" alt="product" />
            </a>
            {/* card body   */}
            <div className="card-body">
              <a href="product.hrml">
                <h2>Slim Shirts</h2>
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
              <div className="price">$120</div>
            </div>
          </div>
          {/* product item  */}
          <div className="card">
            <a href="product.html">
              {/* image size: 680px by 830px   */}
              <img className="medium" src="./images/product-1.jpeg" alt="product" />
            </a>
            {/* card body   */}
            <div className="card-body">
              <a href="product.hrml">
                <h2>Slim Shirts</h2>
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
              {/* price section  */}
              <div className="price">$120</div>
            </div>
          </div>
          {/* product item   */}
          <div className="card">
            <a href="product.html">
              {/* image size: 680px by 830px  */}
              <img className="medium" src="./images/product-1.jpeg" alt="product" />
            </a>
            {/* card body   */}
            <div className="card-body">
              <a href="product.hrml">
                <h2>Slim Shirts</h2>
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
              {/* price section   */}
              <div className="price">$120</div>
            </div>
          </div>
          {/* product item   */}
          <div className="card">
            <a href="product.html">
              {/* image size: 680px by 830px   */}
              <img className="medium" src="./images/product-1.jpeg" alt="product" />
            </a>
            {/* card body   */}
            <div className="card-body">
              <a href="product.hrml">
                <h2>Slim Shirts</h2>
              </a>
              {/* rating  */}
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
              {/* price section   */}
              <div className="price">$120</div>
            </div>
          </div>
          {/* product item   */}
          <div className="card">
            <a href="product.html">
              {/* image size: 680px by 830px   */}
              <img className="medium" src="./images/product-1.jpeg" alt="product" />
            </a>
            {/* card body   */}
            <div className="card-body">
              <a href="product.hrml">
                <h2>Slim Shirts</h2>
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
              {/* price section   */}
              <div className="price">$120</div>
            </div>
          </div>
          {/* product item   */}
          <div className="card">
            <a href="product.html">
              {/* image size: 680px by 830px   */}
              <img className="medium" src="./images/product-1.jpeg" alt="product" />
            </a>
            {/* card body   */}
            <div className="card-body">
              <a href="product.hrml">
                <h2>Slim Shirts</h2>
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
                  <i className="fa fa-star-half-o"></i>
                </span>
              </div>
              {/* price section   */}
              <div className="price">$120</div>
            </div>
          </div>
        </div>
      </main>

      {/* footer section  */}
      <footer className="row center">All right reserverd</footer>
    </div>
  );
}

export default App;
