/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  const [status, setStatus] = useState("");
 const [money, setMoney] = useState(0)

  const makePayment = () => {
    // add the code here and display both error and succes message in the status state
    console.log("payment triggered ")
  };

  const setMoneyhandler = (e)=>{
    setMoney(e.target.value)
    // await for the response and set the stauts with success or failure 
    setStatus('')
  }
  return (
    <section>
      <h5>Integrate with payment gateway system: </h5>
      <br />

      <input
        type='text'
        value={money}
        onChange={setMoneyhandler}
      />
      <button onClick={makePayment}>Pay </button>

      <hr></hr>
      {status && <span>Your payment is : {status}</span>}
    </section>
  );
};

export default Payment;
