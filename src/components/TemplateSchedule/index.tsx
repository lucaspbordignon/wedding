import Button from "@wedding/components/Button";
import ContainerBase from "@wedding/components/ContainerBase";

const TemplateSchedule = () => {
  return (
    <ContainerBase>
      <section
        id="schedule"
        className="flex flex-col justify-between h-full gap-y-6"
      >
        <section className="flex flex-col gap-y-8">
          <h1 className="text-4xl font-header font-bold text-primary">
            Programação
          </h1>

          <section className="flex flex-col gap-y-4">
            <p>
              A cerimônia e a festa serão realizadas no dia 29 de março de 2025,
              às 15h30, no Le Barbaron.
            </p>
          </section>

          <hr />

          <section className="flex flex-col gap-y-4">
            <h6>
              <strong>Recomendações de traje</strong>
            </h6>

            <p>
              O local é a beira mar, a cerimônia vai ser realizada na areia e a
              festa em um local fechado com deck de madeira.
            </p>


            <p>
              <strong>Mulheres:</strong> Vestidos mais leves, longos ou midi. Recomendamos uso de salto bloco
            </p>

            <p>
              <strong>Homens:</strong> Camisa, calça e sapato social
            </p>
          </section>
        </section>

        <section className="w-full flex flex-col gap-y-4">
          <Button href="/rsvp" className="text-primary">Confirmar presença</Button>

          <a
            href="https://maps.app.goo.gl/dq7WtmBwQhDTVJKH7"
            className="w-full"
          >
            <Button className="text-primary">Ver local no mapa</Button>
          </a>
        </section>
      </section>
    </ContainerBase>
  );
};

export default TemplateSchedule;
