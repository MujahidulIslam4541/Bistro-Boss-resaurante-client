import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import UseCarts from "../../../../hooks/UseCarts";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import USeAuth from "../../../../hooks/USeAuth";
import { useNavigate } from "react-router-dom";

const CheckOutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = UseAxiosSecure();
  const [transactionId, setTransactionId] = useState("");
  const [cart] = UseCarts();
  const [error, setError] = useState("");
  const { user } = USeAuth();
  const navigate=useNavigate()
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/content-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleCheckOutFromSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // check card element
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
      toast.error(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirmError", confirmError.message);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.id === "succeeded") {
        setTransactionId(paymentIntent.id);
      }

      // now save to  payment  in database
      const payment = {
        email: user.email,
        price: totalPrice,
        transactionId: paymentIntent.id,
        date: new Date(), //convert to moment js
        cartId: cart.map((item) => item._id),
        menuItemId: cart.map((item) => item.cartId),
        status: "pending",
      };
      const res = await axiosSecure.post("/payment", payment);
      console.log(payment.menuItemId);
      if(res.data?.paymentResult?.insertedId){
        toast.success('Payment successful')
        navigate('/dashboard/paymentHistory')
      }
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
        <button
          className="px-4 py-2 bg-[#D1A054] text-white mt-4 rounded-lg"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-500">{error.message}</p>
        <p>
          {transactionId && (
            <p className="text-green-500">
              {" "}
              Your Transaction id:{transactionId}
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default CheckOutFrom;
