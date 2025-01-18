import useAuthenticationState from "@wedding/state/authentication";
import clsx from "clsx";

const TemplateQuote = () => {
  const inviteeGroup = useAuthenticationState((state) => state.inviteeGroup);

  const isSingle = !inviteeGroup?.description?.includes("&") && !inviteeGroup?.description?.includes(",");

  return (
    <section
      className={clsx(
        "min-h-dvh w-full flex flex-col bg-primary px-6 pb-10 justify-center items-center",
        "font-sans font-extralight text-white"
      )}
    >
      <section className="flex flex-col justify-start gap-y-12 max-w-screen-sm">
        {inviteeGroup && (
          <h1 className="text-3xl font-header text-white font-medium">
            {inviteeGroup?.description}
          </h1>
        )}

        <section className="flex flex-col justify-start gap-y-8">
          <p>
            Nossa jornada até aqui foi repleta de momentos incríveis e
            aventuras. Nestes 6 anos dividimos felicidades e desafios,
            realizamos sonhos e planejamos novos, aprendemos e crescemos muito.
          </p>

          <p>
            Agora estamos prontos para embarcar nesta nova aventura juntos,{" "}
            <strong>o nosso para sempre</strong>.
          </p>

          <p>
            {isSingle ? "Você é" : "Vocês são"} muito {isSingle ? "importante" : "importantes"} para nós e {isSingle ? "faz" : "fazem"} parte da nossa
            história, por isso ficaremos muito felizes em celebrar mais esse
            momento juntos!
          </p>

          <p>Nos vemos em breve.</p>

          <p>
            Com amor e carinho,
            <br />- Gabi e Lucas
          </p>
        </section>
      </section>
    </section>
  );
};

export default TemplateQuote;
