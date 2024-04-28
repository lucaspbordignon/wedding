import clsx from "clsx";

const TemplateSchedule = () => {
  return (
    <section
      className={clsx(
        "min-h-screen w-full flex flex-col bg-white p-6 pt-32 gap-y-8",
        "font-sans font-extralight text-black"
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

      <section className="flex flex-col gap-y-4">
        <button>Confirmar presença</button>
        <button>Ver local no mapa</button>
      </section>
    </section>
  );
};

export default TemplateSchedule;
