import Button from "@wedding/components/Button";

const StateGoing = () => (
  <section className="flex flex-col justify-between size-full mt-4">
    <section className="flex flex-col gap-y-4 h-full">
      <img
        alt="icon"
        src="/assets/confirmed.png"
        className="object-contain w-full lg:max-h-[28rem]"
      />

      <h2>Presença confirmada!</h2>
      <p>
        Uhuuu. Estamos muito ansiosos para celebrar esse momento junto com
        vocês.
      </p>
    </section>

    <Button href="/">Voltar para o início</Button>
  </section>
);

export default StateGoing;
