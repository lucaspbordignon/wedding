import cn from "classnames";

const SaveTheDateContent = () => {
  return (
    <section className="flex flex-col w-full h-screen items-center justify-center gap-20 mt-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="relative col-span-2">
          <div
            className={cn(
              "absolute w-full -rotate-90 font-sans text-lg font-light tracking-[.35rem]",
              "top-20 -left-24 w-52"
            )}
          >
            SAVE THE DATE
          </div>
        </div>

        <div className="col-span-10 flex flex-col justify-center text-7xl">
          <h1 className="-mb-3">29</h1>
          <h1>mar</h1>
          <h1>25</h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center font-sans gap-1">
        <p className="text-2xl font-medium">Gabriela & Lucas</p>
        <p className="text-xl font-light">Florianópolis - SC</p>
      </div>
    </section>
  );
};

export default SaveTheDateContent;
