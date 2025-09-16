import axios from "axios";
import toast from "react-hot-toast";

export const placeOrder = async ({
  planId,
  getToken,
  onSuccess,
  backendUrl,
}) => {
  try {
    // Check if RazorPay key is configured
    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!razorpayKey) {
      toast.error(
        "Payment feature is not available in this version. Will be updated in next version."
      );
      return;
    }

    const token = await getToken();
    const response = await axios.post(
      `${backendUrl}/orders?planId=${planId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.status >= 200 && response.status < 300) {
      initializePayment({
        order: response.data.data,
        getToken,
        onSuccess,
        backendUrl,
      });
    } else {
      toast.error("Unexpected response from server");
    }
  } catch (error) {
    toast.error(
      error.response?.data?.message || error.message || "Failed to create order"
    );
  }
};

const initializePayment = ({ order, getToken, onSuccess, backendUrl }) => {
  // Double check RazorPay key availability
  const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;
  if (!razorpayKey) {
    toast.error(
      "Payment feature is not available in this version. Will be updated in next version."
    );
    return;
  }

  const options = {
    key: razorpayKey,
    amount: order.amount,
    currency: order.currency,
    name: "Credit Payment",
    description: "Credit Payment",
    order_id: order.id,
    receipt: order.receipt,
    handler: async (paymentDetails) => {
      try {
        const token = await getToken();
        const response = await axios.post(
          `${backendUrl}/orders/verify`,
          paymentDetails,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.status >= 200 && response.status < 300) {
          if (response.data.success) {
            toast.success("Credits added successfully!");
            onSuccess?.();
          } else {
            toast.error(response.data.message || "Payment verification failed");
          }
        } else {
          toast.error("Payment verification failed");
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            error.message ||
            "Payment verification error"
        );
      }
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
