import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";
import Input from "@wedding/app/gifts/[id]/pix/Input";
import ConfirmedButton from "@wedding/app/gifts/[id]/pix/ConfirmedButton";

import { client } from "@wedding/lib/db/server";

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
    <ContainerBase className="justify-between h-full">
      <Header />

      {product ? (
        <section className="flex flex-col items-center gap-6 size-full text-primary">
          <div className="flex flex-col justify-start w-full">
            <h2 className="text-2xl lg:text-3xl font-sans text-primary font-medium mb-1">
              {product.name}
            </h2>

            {product.description && (
              <h4
                className="text-base font-sans text-primary font-light"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            )}

            <h4 className="text-2xl font-sans text-primary font-normal mt-6">
              R$ {product.price}
            </h4>

            <hr className="border-0 border-b border-gray-100 my-3" />

            <p className="text-base font-sans text-primary font-light mt-6">
              Para realizar o pagamento via Pix, utilize o QR code abaixo:
            </p>

            <section className="w-full flex items-center justify-center my-4">
              <img
                src={product.payment_qr_code ?? ""}
                className="object-contain aspect-square"
                width={280}
                height={280}
              />
            </section>

            <p className="text-lg font-sans text-primary font-light mt-6 mb-4">
              Ou, se preferir, copie e cole o código a seguir:
            </p>

            <Input value={product.payment_code ?? ""} />

            <hr className="border-0 border-b border-gray-100 my-6" />

            <ConfirmedButton />
          </div>
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
