import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";

//import Price from "./Price";
//import Image from "./Image";
import { client } from "@wedding/lib/db/server";
import Link from "next/link";

const Page = async () => {
  const supabase = client();

  const productsResponse = await supabase.from("products").select("*");
  const products = productsResponse.data;

  return (
    <ContainerBase className="justify-between px-0">
      <Header />

      <section className="grid grid-cols-2 size-full">
        {products?.map((product) => (
          <Link href={`/gifts/${product.id}`} key={product.id}>
            <div className="col-span-1 relative bg-primary cursor-pointer hover:opacity-70">
              <span className="text-white font-header text-xl absolute top-1/2 left-16 flex flex-col gap-y-2">
                {product.name}

                <div className="text-white font-header text-sm w-10/12">
                  R${product.price}
                </div>
              </span>
            </div>
          </Link>
        ))}
      </section>
    </ContainerBase>
  );
};

export default Page;
