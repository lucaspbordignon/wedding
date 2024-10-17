import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";
import Input from "@wedding/app/gifts/[id]/pix/Input";

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
    <ContainerBase className="justify-between">
      <Header />

      {product ? (
        <section className="flex flex-col items-center gap-6 size-full text-primary">
          <div className="flex flex-col justify-start w-full">
            <h2 className="text-3xl font-sans text-primary font-medium">
              {product.name}
            </h2>

            {product.description && (
              <h4 className="text-lg font-sans text-primary font-light">
                {product.description}
              </h4>
            )}

            <h4 className="text-lg font-sans text-primary font-normal mt-6">
              R$ {product.price}
            </h4>

            <p className="text-lg font-sans text-primary font-light mt-6">
              Para realizar o pagamento via PIX, utilize o QR code abaixo:
            </p>

            <section className="w-full flex items-center justify-center">
              <img
                src={product.payment_qr_code ?? ""}
                className="object-contain"
                width={320}
                height={320}
              />
            </section>

            <p className="text-lg font-sans text-primary font-light mt-6">
              Ou, se preferir, copie e cole o código abaixo:
            </p>

            <Input value={product.payment_code ?? ""} />
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
