import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../Components/sectionTitle/sectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";

// TODO:add stripe Key
const stripPromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading='payment' subheading='---PLease Payment---'></SectionTitle>
            <div>
                <Elements stripe={stripPromise}>
                    <CheckOutFrom></CheckOutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;