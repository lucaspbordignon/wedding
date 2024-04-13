import Stripe from "stripe";

const SUCCESS_BASE_URL = "https://www.gabrielalucas.com";
const CANCEL_BASE_URL = "https://www.gabrielalucas.com";

/**
 * Receives the cart items for a payment and returns the payment URL
 */
export const POST = async (request: Request) => {
  const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  const body = await request.json();

  const price = body.priceID;

  const session = await stripeClient.checkout.sessions.create({
    currency: "brl",
    line_items: [{ price, quantity: 1 }],
    mode: "payment",
    success_url: SUCCESS_BASE_URL,
    cancel_url: CANCEL_BASE_URL,
  });

  return Response.json({ url: session.url });
};
