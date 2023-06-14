import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({model_img_url}) => {
//   const {model_img_url} = useState();
// console.log(
//     "🚀 ~ file: SingleProduct.js ~ line 6 ~ model_img_url ~ model_img_url",
//     model_img_url)

  return (
    <Wrapper>
    <div className="main-screen">
        <figure>
        <img src={model_img_url}  />
        </figure>
    </div>
    
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      align-items: center;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    // ustify-items: center;
    align-items: center;
    width: 100%;
    // order: 1;
    img {
      width: 500px;
      max-height: 100%;
      background-size: cover;
      align-items: center;
      object-fit: contain;
      cursor: pointer;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;