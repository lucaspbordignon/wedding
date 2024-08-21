import Button from "@wedding/components/Button";

const StateGoing = () => (
  <section className="flex flex-col justify-between size-full mt-4">
    <section className="flex flex-col gap-y-2 h-full items-center">
      <img
        alt="icon"
        src="/assets/cheers.png"
        className="object-contain size-56"
      />

      <h2 className="font-header text-2xl font-bold">Presença confirmada!</h2>

      <p className="text-center px-4">
        Uhuuu. Estamos muito ansiosos para celebrar esse momento junto com
        vocês.
      </p>
    </section>

    <Button href="/">Voltar para o início</Button>
  </section>
);

export default StateGoing;
