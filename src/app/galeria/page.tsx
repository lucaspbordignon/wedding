import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";
import Link from "next/link";

const Page = () => (
  <ContainerBase className="justify-between px-0">
    <Header />

    <section className="grid grid-cols-2">
      <Link
        href="https://alanvieira.pixieset.com/gabriela-e-lucas/cerimonia/"
        target="_blank"
      >
        <div className="col-span-1 h-[40vh] md:min-w-72 relative bg-primary">
          <span className="text-white font-header text-xl absolute top-[40%] left-8 md:left-16 z-20">
            cerimônia na praia
          </span>

          <img
            src="/assets/cerimonia.jpg"
            loading="eager"
            className="object-cover size-full opacity-40"
          />
        </div>
      </Link>

      <Link
        href="https://alanvieira.pixieset.com/gabriela-e-lucas/recepcaofesta/"
        target="_blank"
      >
        <div className="col-span-1 h-[40vh] md:min-w-72 relative bg-primary">
          <span className="text-white font-header text-xl absolute top-[40%] left-8 md:left-16 z-20">
            a festa <br /> pelo fotógrafo
          </span>

          <img
            src="/assets/festa.jpg"
            loading="eager"
            className="object-cover size-full opacity-40"
          />
        </div>

      </Link>

      <Link
        href="https://drive.google.com/drive/folders/15Jg7LQjJSEsKsPlJOaU10Vi99ksZ28z5?usp=sharing"
        target="_blank"
      >
        <div className="col-span-1 h-[40vh] md:min-w-72 relative bg-primary">
          <span className="text-white font-header text-xl absolute top-[40%] left-8 md:left-16 z-20">
            a festa <br />
            pelos convidados
            <p className="font-thin font-sans text-sm">câmeras analógicas</p>
          </span>

          <img
            src="/assets/analogicas.jpg"
            loading="eager"
            className="object-cover size-full opacity-40"
          />
        </div>
      </Link>


      <Link
        href="https://alanvieira.pixieset.com/gabriela-e-lucas/religioso/"
        target="_blank"
      >
        <div className="col-span-1 h-[40vh] md:min-w-72 relative bg-primary">
          <span className="text-white font-header text-xl absolute top-[40%] left-8 md:left-16 z-20">
            cerimônia religiosa
          </span>

          <img
            src="/assets/cover-c.jpg"
            loading="eager"
            className="object-cover size-full opacity-40"
          />
        </div>
      </Link>

    </section>
  </ContainerBase>
);

export default Page;
