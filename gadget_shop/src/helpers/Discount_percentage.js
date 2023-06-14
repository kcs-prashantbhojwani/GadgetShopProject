import React from 'react'
import {AiOutlinePercentage} from "react-icons/ai"
import styled from "styled-components";
import FormatPrice from '../helpers/FormatPrice';

const Discount_percentage = ({discount_percentage, price}) => {
    // console.log(Discount_percentage)
    console.log(discount_percentage)
  return (
    <Wrapper>
        {/* <p>
        <FormatPrice price={price} />
        </p> */}
        {/* <p>({discount_percentage}
            <FaPercentage className='icon'/> Off
        )</p> */}
        <div className="icon-style">
        <FormatPrice price={price} />
        <p>({discount_percentage}<AiOutlinePercentage></AiOutlinePercentage> <b>Off</b>)</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    font-size: 30px;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;


export default Discount_percentage