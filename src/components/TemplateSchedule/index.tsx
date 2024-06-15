import clsx from "clsx";
import Button from "@wedding/components/Button";

const TemplateSchedule = () => {
  return (
    <section
      className={clsx(
        "min-h-screen w-full flex flex-col bg-white p-6 pt-32 gap-y-8",
        "font-sans font-extralight text-black relative"
      )}
    >
      <h1 className="text-4xl font-header font-bold text-primary">
        Programação
      </h1>

      <section className="flex flex-col gap-y-4">
        <p>
          A cerimônia e a festa serão realizadas no dia 29 de março de 2025, às
          16h, no Le Barbaron.
        </p>

        <p>
          <strong>Endereço:</strong> Av. Tom Traugott Wildi, 215, Praia Brava.
          Florianópolis - SC, 88056-800.
        </p>
      </section>

      <hr />

      <section className="flex flex-col gap-y-4">
        <h6>
          <strong>Traje Esporte</strong>
        </h6>

        <p>
          O local é a beira mar, a cerimônia vai ser realizada na areia e a
          festa em um local fechado. Estamos contando com o sol, então fique a
          vontade para trazer seus óculos.
        </p>
      </section>

      <section className="absolute inset-x-0 bottom-6 px-6 w-full flex flex-col gap-y-4">
        <Button href="/rsvp">Confirmar presença</Button>

        <a
          href="https://maps.apple.com/?address=Avenida%20Tom%20Traugott%20Wildi,%208%E2%80%93119,%20Praia%20Brava,%20Florian%C3%B3polis%20-%20SC,%2088056-800,%20Brazil&auid=905360198410052461&ll=-27.393396,-48.414694&lsp=9902&q=Le%20BarBaron"
          target="_blank"
          className="w-full"
        >
          <Button>Ver local no mapa</Button>
        </a>
      </section>
    </section>
  );
};

export default TemplateSchedule;
