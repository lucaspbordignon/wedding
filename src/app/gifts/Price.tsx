import Stripe from "stripe";

const Price = async ({ stripePriceId }: { stripePriceId: string }) => {
  const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  const priceResponse = await stripeClient.prices.retrieve(stripePriceId);

  return <span>R$ {(priceResponse.unit_amount ?? 1) / 100}</span>;
};

export default Price;
