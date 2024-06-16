import clsx from "clsx";

const TemplateQuote = () => {
  return (
    <section
      className={clsx(
        "min-h-screen w-full flex flex-col bg-primary p-6 justify-center items-center",
        "font-sans font-extralight text-white"
      )}
    >
      <section className="flex flex-col justify-start gap-y-9 max-w-screen-sm">
        <p>
          Vocês fizeram parte da nossa história, e ficaremos muito felizes em
          celebrar mais esse momento importante nas nossas vidas com vocês!
        </p>

        <p>- Gabi & Lucas</p>
      </section>
    </section>
  );
};

export default TemplateQuote;
