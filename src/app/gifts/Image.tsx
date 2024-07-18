"use client";

import Stripe from "stripe";

const Image = ({ product }: { product: Stripe.Product }) => {
  const redirectToCheckout = async (priceID: string) => {
    const response = await fetch("/api/v1/payments/create", {
      method: "POST",
      body: JSON.stringify({ priceID }),
    });

    const responseJSON = await response.json();

    window.location.href = responseJSON.url;
  };

  return (
    <img
      src={product.images[0]}
      loading="eager"
      className="object-cover size-full opacity-40"
      onClick={() => redirectToCheckout(product.default_price as string)}
    />
  );
};

export default Image;
