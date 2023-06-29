import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";
import Discount_percentage from "../helpers/Discount_percentage";

const Product = (curElem) => {
  const { product_id, product_name, image_url, discount_price, product_category } = curElem;
  // console.log(product_category, product_id, product_name, discount_price)
  return (
    <NavLink to={`/singleproduct/${product_id}`}>
      <div className="card">
        <figure>
          <img src={image_url} alt={product_name} />
          {/* <figcaption className="caption">{product_category}</figcaption> */}
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{product_name}</h3>
            <p className="card-data--price">{<FormatPrice price={discount_price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
