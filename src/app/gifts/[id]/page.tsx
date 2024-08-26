import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";

import { client } from "@wedding/lib/db/server";
import Image from "next/image";
import Footer from "./Footer";

interface PageParams {
  params: {
    id: string;
  };
}

const Page = async ({ params: { id } }: PageParams) => {
  const supabase = client();

  const productsResponse = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();
  const product = productsResponse.data;

  return (
    <ContainerBase className="justify-between px-0">
      <Header />

      {product ? (
        <section className="flex flex-col items-center gap-16 size-full text-primary">
          <Image
            className="shadow"
            src={product.image_url!}
            width={320}
            height={320}
            alt={product?.name}
          />

          <div className="flex flex-col justify-start w-full px-24">
            <h2 className="text-3xl font-sans text-primary font-medium">
              {product.name}
            </h2>

            {product.description && (
              <h4 className="text-lg font-sans text-primary font-normal">
                {product.description}
              </h4>
            )}
          </div>

          <div className="flex flex-col justify-start w-full px-24">
            <h4 className="text-lg font-sans text-primary font-normal">
              R$ {product.price}
            </h4>
          </div>

          <Footer product={product} />
        </section>
      ) : (
        <section className="flex flex-col size-full text-primary">
          Produto não encontrado
        </section>
      )}
    </ContainerBase>
  );
};

export default Page;
