import React from 'react';
import data from './data';

function App() {
  return (
    <div className="grid-container">
      {/* header section   */}
      <header className="row">
        <div>
          <a className="brand" href="/">
            Amazona
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/sign-in">Sign In</a>
        </div>
      </header>
      {/* main section  */}
      <main>
        <div className="row center">
          {data.products.map((product) => (
          <Product key={product._id} product={product}/>
          ))}
        </div>
      </main>

      {/* footer section  */}
      <footer className="row center">All right reserverd</footer>
    </div>
  );
}

export default App;
