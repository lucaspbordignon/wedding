import Button from "@wedding/components/Button";
import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";

const Page = () => (
  <ContainerBase className="justify-between lg:pt-20">
    <Header />

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
      <a href="https://maps.app.goo.gl/dq7WtmBwQhDTVJKH7" className="w-full">
        <Button>Ver no mapa</Button>
      </a>
    </section>
  </ContainerBase>
);

export default Page;
