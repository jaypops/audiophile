import CheckoutForm from "@/components/layout/CheckoutForm";
import Summary from "@/components/layout/Summary";

export default function Checkout() {
  return (
    <div className="flex flex-row my-12 mx-35 justify-between">
      <CheckoutForm />
      <Summary />
    </div>
  );
}
