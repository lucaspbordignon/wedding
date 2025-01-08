import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";
import Link from "next/link";

const Page = () => (
  <ContainerBase className="justify-between px-0">
    <Header />

    <section className="grid grid-cols-2">
      <Link
        href="https://alanvieira.pixieset.com/gabriela-e-lucas/"
        target="_blank"
      >
        <div className="col-span-1 h-[40vh] relative bg-primary">
          <span className="text-white font-header text-xl absolute top-1/2 left-8 md:left-16 z-20">
            pré-wedding
          </span>

          <img
            src="/assets/cover.jpg"
            loading="eager"
            className="object-cover size-full opacity-40"
          />
        </div>
      </Link>

      <div className="col-span-1 h-[40vh] size-full bg-primary px-6 py-8">
        <h1 className="text-3xl font-header text-white font-medium">Galeria</h1>

        <p className="text-white text-xm md:text-base mt-4">
          Após o casamento vamos compartilhar as fotos da festa por aqui.
        </p>

        <p className="text-white text-sm md:text-base mt-4">
          Enquanto isso, nosso pré wedding e outros registros já estão
          disponíveis.
        </p>

        <svg
          className="size-16"
          width="38"
          height="11"
          viewBox="0 0 38 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.56348 5.90278C15.6059 5.90278 23 8 36.5 5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M1.57397 6.13354C3.11421 4.6036 3.9081 2.53223 5.44825 1.00239C5.53974 0.911509 6.02222 3.44159 6.02222 3.8847C6.02222 4.75857 6.05081 5.57684 6.15774 6.42652C6.26502 7.27907 6.15774 8.63855 6.15774 9.5C6.15774 10.0468 4.28246 8.22957 4.01333 8.05772C2.99176 7.40539 2.15615 6.94394 1 6.56113"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div className="col-span-1 h-[40vh] relative bg-primary">
        <span className="text-white font-header text-xl absolute top-1/2 left-8 md:left-16 z-20">
          a festa <br />
          pelos convidados
          <p className="font-thin font-sans text-sm">câmeras analógicas</p>
        </span>

        <img
          src="/assets/galery-placeholder.jpg"
          loading="eager"
          className="object-cover size-full opacity-40"
        />
      </div>

      <div className="col-span-1 h-[40vh] relative bg-primary">
        <span className="text-white font-header text-xl absolute top-1/2  left-8 md:left-16 z-20">
          a festa <br /> pelo fotógrafo
        </span>

        <img
          src="/assets/cover.jpg"
          loading="eager"
          className="object-cover size-full opacity-40"
        />
      </div>
    </section>
  </ContainerBase>
);

export default Page;
