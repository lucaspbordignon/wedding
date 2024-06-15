import clsx from "clsx";
import Button from "@wedding/components/Button";
import Header from "@wedding/components/Header";

const Page = () => (
  <main
    className={clsx(
      "min-h-screen w-full flex flex-col bg-white p-6 pt-32 gap-y-8",
      "font-sans font-extralight text-black relative"
    )}
  >
    <section className="absolute inset-x-0 top-0">
      <Header />
    </section>

    <h1 className="text-4xl font-header font-bold text-primary">Le Barbaron</h1>

    <section className="flex flex-col">
      <p>Praia Brava</p>
      <p>Av. Tom Traugott Wildi, 215</p>
      <p>Florianópolis - SC, 88056-800</p>
    </section>

    <section className="flex flex-col gap-y-4">
      <img
        alt="location"
        src="/assets/location.png"
        className="object-contain w-full max-h-96"
      />
    </section>

    <section className="absolute inset-x-0 bottom-6 px-6 w-full flex flex-col gap-y-4">
      <a
        href="https://maps.apple.com/?address=Avenida%20Tom%20Traugott%20Wildi,%208%E2%80%93119,%20Praia%20Brava,%20Florian%C3%B3polis%20-%20SC,%2088056-800,%20Brazil&auid=905360198410052461&ll=-27.393396,-48.414694&lsp=9902&q=Le%20BarBaron"
        target="_blank"
        className="w-full"
      >
        <Button>Ver no mapa</Button>
      </a>
    </section>
  </main>
);

export default Page;
