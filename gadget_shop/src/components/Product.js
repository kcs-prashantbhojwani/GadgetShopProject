import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";

const Product = (curElem) => {
  const { product_id, product_name, model_img_url, discount_price, product_category } = curElem;
  return (
    <NavLink to={`/singleproduct/${product_id}`}>
      <div className="card">
        <figure>
          <img src={model_img_url} alt={product_name} />
          <figcaption className="caption">{product_category}</figcaption>
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
