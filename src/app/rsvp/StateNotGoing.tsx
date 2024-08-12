import Button from "@wedding/components/Button";

const StateNotGoing = () => (
  <section className="flex flex-col justify-between size-full mt-4">
    <section className="flex flex-col gap-y-4 h-full">
      <img
        alt="icon"
        src="/assets/rejected.png"
        className="object-contain w-full lg:max-h-[28rem]"
      />

      <h2>Ah! Que pena</h2>
      <p>
        Se conseguir mudar seus planos, pode alterar a confirmação aqui pelo
        site até o dia 01/02/2025.
      </p>
    </section>

    <Button href="/" primary>
      Voltar para o início
    </Button>
    <Button href="/rsvp">Vou conseguir ir!</Button>
  </section>
);

export default StateNotGoing;
