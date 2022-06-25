import React from "react";
import { BsMouse } from "react-icons/bs"
import MetaData from "../layout/MetaData";
import "./Home.css";
import ProductCard from './Product'


export const Home = () => {
  const product =
  {
    name: "Blue Shirt",
    images: [ {url: "https://i.ibb.co/DRST11n/1.webp"} ],
    price: "PKR 3000",
    _id: "abhisek"
  }
  return (
    <React.Fragment>
      <MetaData title = "AF Ecommerce" />

      <div className="banner">
        <p>Welcome to AF Ecommerce Store</p>
        <h1>FIND AMAZING PRODUCT BELOW</h1>

        <a href="#container">
          <button>
            Scroll <BsMouse />
          </button>
        </a>
      </div>

      <div className="homeHeading">Featured Products</div>
      <div className="container" id="container">
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </React.Fragment>

  )
}


export default Home;