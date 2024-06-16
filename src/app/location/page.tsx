import Button from "@wedding/components/Button";
import ContainerBase from "@wedding/components/ContainerBase";

const Page = () => (
  <ContainerBase className="justify-between">
    <section className="w-full flex flex-col gap-y-8">
      <h1 className="text-4xl font-header font-bold text-primary">
        Le Barbaron
      </h1>

      <section className="flex flex-col">
        <p>Praia Brava</p>
        <p>Av. Tom Traugott Wildi, 215</p>
        <p>Florianópolis - SC, 88056-800</p>
      </section>

      <img
        alt="location"
        src="/assets/location.png"
        className="object-contain w-full lg:max-h-[28rem]"
      />
    </section>

    <section className="w-full flex flex-col gap-y-4">
      <a
        href="https://maps.apple.com/?address=Avenida%20Tom%20Traugott%20Wildi,%208%E2%80%93119,%20Praia%20Brava,%20Florian%C3%B3polis%20-%20SC,%2088056-800,%20Brazil&auid=905360198410052461&ll=-27.393396,-48.414694&lsp=9902&q=Le%20BarBaron"
        className="w-full"
      >
        <Button>Ver no mapa</Button>
      </a>
    </section>
  </ContainerBase>
);

export default Page;
