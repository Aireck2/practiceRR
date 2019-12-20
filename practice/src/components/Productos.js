import React from "react";
import Producto from "./Producto";
import Header from "./Header";

class Productos extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="card">
          This is Productos
          <ul>
            <Producto />
          </ul>
        </div>
      </>
    );
  }
}
export default Productos;
