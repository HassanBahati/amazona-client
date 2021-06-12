import React from "react";
import {BrowserRouter, Link, Route} from 'react-router-dom'
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
          <Link className="brand" to="/">
            Amazona
          </Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
          <Link to="/sign-in">Sign In</Link>
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
