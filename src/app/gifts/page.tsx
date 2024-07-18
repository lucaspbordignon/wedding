import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";
import Stripe from "stripe";

import Price from "./Price";
import Image from "./Image";

const Page = async () => {
  const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  const productsResponse = await stripeClient.products.list({ active: true });
  const products = productsResponse.data;

  return (
    <ContainerBase className="justify-between px-0">
      <Header />

      <section className="grid grid-cols-2 size-full">
        {products.map((product) => (
          <div className="col-span-1 relative bg-primary cursor-pointer hover:opacity-70">
            <span className="text-white font-header text-xl absolute top-1/2 left-16 flex flex-col gap-y-2">
              {product.name}

              <div className="text-white font-header text-sm w-10/12">
                {product.description}
              </div>

              <div className="text-white font-header text-sm w-10/12">
                <Price stripePriceId={product.default_price as string} />
              </div>
            </span>

            <Image product={product} />
          </div>
        ))}
      </section>
    </ContainerBase>
  );
};

export default Page;
