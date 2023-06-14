// import React from 'react'

// const Payments = () => {
//   return (
//     <div>Payments</div>
//   )
// }

// export default Payments
// import React, { useState } from "react";
// import "./payment.css"; // Import the CSS file for styles

// const Payment = () => {
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

//   const handlePaymentMethodChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handlePaymentSubmit = (e) => {
//     e.preventDefault();
//     // Handle payment logic here

//     // For the sake of this example, let's assume the payment is completed successfully
//     setIsPaymentCompleted(true);
//   };

//   return (
//     <div className="payment-container">
//       {!isPaymentCompleted ? (
//         <form onSubmit={handlePaymentSubmit} className="payment-form">
//           <h2>Select Payment Method</h2>
//           <div className="payment-methods">
//             <label>
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="cod"
//                 checked={paymentMethod === "cod"}
//                 onChange={handlePaymentMethodChange}
//               />
//               Cash on Delivery (COD)
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="online"
//                 checked={paymentMethod === "online"}
//                 onChange={handlePaymentMethodChange}
//               />
//               Online Payment
//             </label>
//           </div>
//           {paymentMethod === "cod" && (
//             <div className="cod-options">
//               <h3>COD Options</h3>
//               {/* Include additional options for COD here */}
//             </div>
//           )}
//           {paymentMethod === "online" && (
//             <div className="online-payment-options">
//               <h3>Online Payment Options</h3>
//               {/* Include additional options for online payment here */}
//             </div>
//           )}
//           <button type="submit" className="payment-button">
//             Make Payment
//           </button>
//         </form>
//       ) : (
//         <h2 className="payment-success">Payment Successful. Thank you for shopping!</h2>
//       )}
//     </div>
//   );
// };

// export default Payment;


import React, { useState } from "react";
import "./payment.css"; // Import the CSS file for styles

const Payments = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [onlinePaymentOption, setOnlinePaymentOption] = useState("");
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleOnlinePaymentOptionChange = (e) => {
    setOnlinePaymentOption(e.target.value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment logic here

    // For the sake of this example, let's assume the payment is completed successfully
    setIsPaymentCompleted(true);
  };

  return (
    <div className="payment-container">
      {!isPaymentCompleted ? (
        <form onSubmit={handlePaymentSubmit} className="payment-form">
          <h2>Select Payment Method</h2>
          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={handlePaymentMethodChange}
              />
              Cash on Delivery (COD)
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="online"
                checked={paymentMethod === "online"}
                onChange={handlePaymentMethodChange}
              />
              Online Payment
            </label>
          </div>
          {paymentMethod === "cod" && (
            <div className="cod-options">
              <h3>COD Options</h3>
              {/* Include additional options for COD here */}
            </div>
          )}
          {paymentMethod === "online" && (
            <div className="online-payment-options">
              <h3>Online Payment Options</h3>
              <div className="online-options">
                <label>
                  <input
                    type="radio"
                    name="onlinePaymentOption"
                    value="upi"
                    checked={onlinePaymentOption === "upi"}
                    onChange={handleOnlinePaymentOptionChange}
                  />
                  UPI
                </label>
                <label>
                  <input
                    type="radio"
                    name="onlinePaymentOption"
                    value="card"
                    checked={onlinePaymentOption === "card"}
                    onChange={handleOnlinePaymentOptionChange}
                  />
                  Card
                </label>
              </div>
              {onlinePaymentOption === "upi" && (
                <div className="upi-options">
                  <h4>UPI Options</h4>
                  <label>
                    <input type="radio" name="upiOption" value="gpay" />
                    Google Pay
                  </label>
                  <label>
                    <input type="radio" name="upiOption" value="paytm" />
                    Paytm
                  </label>
                </div>
              )}
              {onlinePaymentOption === "card" && (
                <div className="card-options">
                  <h4>Card Options</h4>
                  <label>
                    <input type="radio" name="cardOption" value="credit" />
                    Credit Card
                  </label>
                  <label>
                    <input type="radio" name="cardOption" value="debit" />
                    Debit Card
                  </label>
                </div>
              )}
            </div>
          )}
          <button type="submit" className="payment-button">
            Make Payment
          </button>
        </form>
      ) : (
        <h2 className="payment-success">Payment Successful. Thank you for shopping!</h2>
      )}
    </div>
  );
};

export default Payments;
