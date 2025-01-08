import clsx from "clsx";

const TemplateQuote = () => {
  return (
    <section
      className={clsx(
        "min-h-dvh w-full flex flex-col bg-primary p-6 justify-center items-center",
        "font-sans font-extralight text-white"
      )}
    >
      <section className="flex flex-col justify-start gap-y-16 max-w-screen-sm">
        <p>
          Nossa jornada até aqui foi repleta de momentos incríveis e aventuras.
          Nestes 6 anos dividimos felicidades e desafios, realizamos sonhos e
          planejamos novos, aprendemos e crescemos muito.
        </p>

        <p>
          Agora estamos prontos para embarcar nesta nova aventura juntos,{" "}
          <strong>o nosso para sempre</strong>.
        </p>

        <p>
          Cada um de vocês é muito importante para nós e fez parte da nossa
          história, por isso ficaremos muito felizes em celebrar mais esse
          momento das nossas vidas com vocês!
        </p>

        <p>- Gabi & Lucas</p>
      </section>
    </section>
  );
};

export default TemplateQuote;
