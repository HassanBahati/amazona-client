import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

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
        <Route path='/cart/:id?' component={CartScreen}></Route>
        <Route path='/product/:id' component={ProductScreen}></Route>
        <Route path='/' component={HomeScreen} exact></Route>
        
       
      </main>

      {/* footer section  */}
      <footer className="row center">All right reserverd</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
