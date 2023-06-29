import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productContext";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { Container } from "./styles/Container";
import FormatPrice from "./helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Discount_percentage from "./helpers/Discount_percentage";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "http://127.0.0.1:8000/search/all_available_products_category_wise";


const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { product_id } = useParams();

  const {
    product_id: alias,
    product_name,
    brand_name,
    selling_mrp_price,
    discount_price,
    product_category,
    quantity,
    image_url,
    discount_percentage,
    // reviews,
    available_colors,
    // stars,
  } = singleProduct;
  // console.log("TOTAL1", singleProduct)

  useEffect(() => {
    getSingleProduct(`${API}?product_id=${product_id}`);
  }, []);

    // if (isSingleLoading) {
    //   return <div className="page_loading">Loading.....</div>;
    // }

  return (
    <Wrapper>
      <PageNavigation title={product_name} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <MyImage image_url={image_url} />
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{product_name}</h2>
            {/* <Star stars={stars} reviews={reviews} /> */}
            <p className="product-data-price">  
              MRP:
              <del>
                {/* <FormatPrice price={selling_mrp_price + 3500} /> */}
                <FormatPrice price={selling_mrp_price} />
              </del>
            </p>
            <Discount_percentage discount_percentage={discount_percentage} price={discount_price}/>
            {/* <p className="product-data-price product-data-real-price">
              Deal of the Day:
              <span>
               <FormatPrice price={discount_price} /> 
               <Discount_percentage discount_percentage={discount_percentage}/> 
               </span>
            </p> */}
            {/* <p>{description}</p> */}
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Gadget Shop Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {quantity > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                Category : <span> {product_category} </span>
              </p>
              <p>
                Brand :<span> {brand_name} </span>
              </p>
              <hr />
            {quantity > 0 && <AddToCart product={singleProduct} />}
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;