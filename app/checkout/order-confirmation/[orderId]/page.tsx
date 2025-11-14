import CheckoutForm from "@/components/layout/checkout/CheckoutForm";
import Summary from "@/components/layout/Summary";

export default function OrderConfirmation() {
  return (
    <div className="flex flex-row my-12 mx-35 justify-between">
      <CheckoutForm />
      <Summary />
    </div>
  );
}