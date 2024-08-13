import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";
const Checkout = ({ bookingInfo, setIsOpen }) => {
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const axiosCommon = useAxiosCommon();
  const elements = useElements();
  useEffect(() => {
    getClient();
  }, []);
  const getClient = async () => {
    const { data } = await axiosCommon.post("/create-payment-intent", {
      totalPrice: bookingInfo?.totalPrice,
    });

    setClientSecret(data.clientSecret);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      setLoading(false);
      toast.error("Stripe or Element is missing");
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      setLoading(false);
      toast.error("Card Missing");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
            
          },
        },
      });

    if (confirmError) {
      console.log("Confirm Error ", confirmError);
      setLoading(false);
      toast.error(confirmError.message);
      return;
    }
    console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      try {
        const { data } = await axiosCommon.post("/booking", { bookingInfo });
        const { data: updateData } = await axiosCommon.patch(
          `/room-update/${bookingInfo?.roomId}`,
          { booked: true }
        );
        console.log(data, updateData);
        if(data.insertedId){
            toast.success('Room Booked Successfully!!!')
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <form className="mb-6" onSubmit={handleSubmit}>
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
      <div className="flex mt-4 border-t pt-6 justify-evenly">
        <button
          type="submit"
          disabled={!stripe || !clientSecret || loading}
          className="inline-flex justify-center rounded-md border border-transparent bg-green-100 disabled:cursor-not-allowed  px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          // onClick={() => modalHandler(selected)}
        >
          {loading ? (
            <ImSpinner9 size={24} className="animate-spin m-auto" />
          ) : (
            `Pay $${bookingInfo?.totalPrice}`
          )}
        </button>
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
      </div>
      {/* <button type="submit" disabled={!stripe}>
        Pay
      </button> */}
    </form>
  );
};
Checkout.propTypes = {
  bookingInfo: PropTypes.object,
  setIsOpen: PropTypes.func,
};

export default Checkout;
