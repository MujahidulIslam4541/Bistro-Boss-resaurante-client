import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleCheckOutFromSubmit = (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // check card element
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
  };
  return (
    <div>
      <form onSubmit={handleCheckOutFromSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOutFrom;
