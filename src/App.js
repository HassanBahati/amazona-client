import React from "react";
import data from "./data";
import Product from './components/Product'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
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
        <Route path='/product/:id' component={ProductScreen}></Route>
        <Route path='/' component={HomeScreen} exact></Route>
        
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div> 
      </main>

      {/* footer section  */}
      <footer className="row center">All right reserverd</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
