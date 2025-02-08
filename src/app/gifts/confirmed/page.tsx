import ContainerBase from "@wedding/components/ContainerBase";
import Button from "@wedding/components/Button";
import Header from "@wedding/components/Header";

const Page = async () => {
  return (
    <ContainerBase className="justify-between">
      <Header />

      <section className="flex flex-col justify-between items-center size-full">
        <section className="flex flex-col gap-y-2 h-full justify-center items-center">
          <p className="text-7xl mb-4 ">🤍</p>

          <h2 className="font-header text-2xl font-bold">Compra confirmada!</h2>

          <p className="text-center px-4">Muito obrigado pelo carinho!</p>
        </section>

        <section className="flex flex-col gap-2 w-full">
          <Button primary href="/">
            Voltar para o início
          </Button>

          <Button href="/gifts">Escolher mais um presente</Button>
        </section>
      </section>
    </ContainerBase>
  );
};

export default Page;
