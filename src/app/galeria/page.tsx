import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";

const Page = () => (
  <ContainerBase className="justify-between px-0">
    <Header />

    <section className="grid grid-cols-2 size-full">
      <div className="col-span-1 relative bg-primary">
        <span className="text-white font-header text-xl absolute top-1/2 left-16">
          pré-wedding
        </span>

        <img
          src="/assets/cover.png"
          loading="eager"
          className="object-cover size-full opacity-40"
        />
      </div>

      <div className="col-span-1 size-full bg-primary px-6 py-8">
        <h1 className="text-3xl font-header text-white font-medium">Galeria</h1>
      </div>

      <div className="col-span-1 relative bg-primary">
        <span className="text-white font-header text-xl absolute top-1/2 left-16">
          a festa pelos convidados
        </span>

        <img
          src="/assets/cover.png"
          loading="eager"
          className="object-cover size-full opacity-40"
        />
      </div>

      <div className="col-span-1 relative bg-primary">
        <span className="text-white font-header text-xl absolute top-1/2 left-16">
          a festa pelo fotografo
        </span>

        <img
          src="/assets/cover.png"
          loading="eager"
          className="object-cover size-full opacity-40"
        />
      </div>
    </section>
  </ContainerBase>
);

export default Page;
