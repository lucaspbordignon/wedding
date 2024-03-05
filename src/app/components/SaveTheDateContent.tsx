const SaveTheDateContent = () => {
  return (
    <section className="flex flex-col w-full h-screen items-center justify-center gap-20">
      <div className="flex gap-4">
        <div className="-rotate-90 font-sans text-lg font-light h-min m-auto tracking-[.35rem]">
          SAVE THE DATE
        </div>

        <div className="flex flex-col justify-center text-7xl">
          <h1 className="-mb-3">29</h1>
          <h1>mar</h1>
          <h1>25</h1>
        </div>
      </div>

      <div className="flex flex-col justify-center font-sans gap-1">
        <p className="text-2xl font-medium">Gabriela & Lucas</p>
        <p className="text-xl font-thin">Florianópolis - SC</p>
      </div>
    </section>
  );
};

export default SaveTheDateContent;
