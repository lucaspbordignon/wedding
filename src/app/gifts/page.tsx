/* Revalidate pages every 5 minutes */
export const revalidate = 300;

import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";

import { client } from "@wedding/lib/db/server";
import Link from "next/link";

const Page = async () => {
  const supabase = client();

  const productsResponse = await supabase.from("products").select("*");
  const products = productsResponse.data;

  return (
    <ContainerBase className="justify-between md:max-w-screen-lg h-full">
      <Header />

      <section className="grid grid-cols-1 md:grid-cols-3 size-full gap-3">
        {products?.map((product) => (
          <Link
            className="col-span-1 relative bg-primary cursor-pointer hover:opacity-70 aspect-square"
            href={`/gifts/${product.id}`}
            key={product.id}
          >
            <div
              className="size-full bg-cover opacity-20"
              style={{
                backgroundImage: `url(${product.image_url})`,
              }}
            />
            <span className="text-white font-header text-xl absolute top-[45%] left-6 flex flex-col gap-y-2">
              {product.name}

              <div className="text-white font-header text-sm w-10/12">
                R${product.price}
              </div>
            </span>
          </Link>
        ))}
      </section>
    </ContainerBase>
  );
};

export default Page;
