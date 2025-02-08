import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";
import Input from "@wedding/app/gifts/[id]/pix/Input";
import ConfirmedButton from "@wedding/app/gifts/[id]/pix/ConfirmedButton";

interface PageParams {
  params: {
    id: string;
  };
}

const Page = async ({ params: { id } }: PageParams) => {
  return (
    <ContainerBase className="justify-between h-full">
      <Header />

      <section className="flex flex-col items-center gap-6 size-full text-primary">
        <div className="flex flex-col justify-start w-full">
          <h2 className="text-2xl lg:text-3xl font-sans text-primary font-medium mb-1">
            Pix de qualquer valor
          </h2>

          <h4 className="text-base font-sans text-primary font-light">
            Agradecemos muito sua contribuição para nosso casamento! 🫶
            Seu presente significa muito para nós e nos ajudará a construir
            nossa nova vida juntos. Muito obrigado pelo carinho!
          </h4>

          <hr className="border-0 border-b border-gray-100 my-3" />

          <p className="text-base font-sans text-primary font-light mt-6">
            Para realizar o pagamento via PIX, utilize o QR code abaixo:
          </p>

          <section className="w-full flex items-center justify-center my-4">
            <img
              src="https://elsoezhobpdlrxpdggfg.supabase.co/storage/v1/object/public/wedding//pix-qr.png"
              className="object-contain aspect-square"
              width={280}
              height={280}
            />
          </section>

          <p className="text-base font-sans text-primary font-light mt-6 mb-4">
            Ou, se preferir, copie e cole o código a seguir:
          </p>

          <Input value="00020126580014br.gov.bcb.pix0136de4760bc-f910-418c-98dd-e6e7fd16d5a65204000053039865802BR5921Lucas Pedro Bordignon6008Brasilia62230519daqr41710329212844263049EB0" />

          <hr className="border-0 border-b border-gray-100 my-6" />

          <ConfirmedButton />
        </div>
      </section>
    </ContainerBase>
  );
};

export default Page;
