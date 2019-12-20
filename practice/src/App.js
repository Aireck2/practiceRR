import React from "react";
import addProducto from "./components/addProducto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Productos from "./components/Productos";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Productos}></Route>
          <Route exact path="/productos" component={addProducto} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
