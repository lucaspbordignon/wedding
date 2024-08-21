import Button from "@wedding/components/Button";

const StateNotGoing = () => (
  <section className="flex flex-col justify-between size-full mt-4">
    <section className="flex flex-col gap-y-2 h-full items-center">
      <p className="text-7xl">😭</p>

      <h2 className="font-header text-2xl font-bold">Ah! Que pena</h2>

      <p className="text-center text-primary px-4">
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
