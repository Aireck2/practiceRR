import React from "react";
import Header from "./Header";

class addProducto extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <input type="text" placeholder="Product name" />
          <input type="text" placeholder="Price" />
          <button> Add Product </button>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default addProducto;
