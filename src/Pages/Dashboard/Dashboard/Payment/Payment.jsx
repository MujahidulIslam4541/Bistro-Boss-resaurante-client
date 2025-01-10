import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../Components/sectionTitle/sectionTitle";
import { Elements } from "@stripe/react-stripe-js";

// TODO:add stripe Key
const stripPromise=loadStripe('')
const Payment = () => {
    return (
        <div>
            <SectionTitle heading='payment' subheading='---PLease Payment---'></SectionTitle>
            <div>
                <Elements stripe={stripPromise}></Elements>
            </div>
        </div>
    );
};

export default Payment;