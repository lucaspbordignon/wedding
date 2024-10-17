import Button from "@wedding/components/Button";
import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";
import clsx from "clsx";
import Link from "next/link";

const Page = () => (
  <ContainerBase className="justify-between h-full pb-4" wide>
    <Header />

    <section className="grid grid-cols-1 lg:grid-cols-2 lg:mb-2">
      <div className="col-span-1 min-h-[36vh] w-full relative bg-primary">
        <Link href="https://www.praiabrava.com.br/" target="_blank">
          <img
            src="/assets/brava-hotel.jpg"
            loading="eager"
            className="object-cover size-full"
          />
        </Link>
      </div>

      <div className="col-span-1 min-h-[36vh] w-full bg-primary px-6 py-8">
        <h1 className="text-3xl font-header text-white font-medium">
          Praia Brava Hotel
        </h1>

        <p className="text-white text-base mt-4 text-sm">
          <span className="font-normal">Recomendado pela proximidade</span>,
          sendo possível ir a pé pela rua ou pela própria praia 🏖️
        </p>

        <p className="text-white text-base mt-4 text-sm">
          Além disso, realizamos uma negociação direta com o hotel, e as diárias
          variam de R$280 (2 pessoas) a R$440 (4 pessoas) por quarto.
        </p>

        <p className="text-white text-base mt-4 text-sm">
          Recomendamos entrar em contato através do email{" "}
          <a href="mailto:reservas@praiabrava.com.br" className="font-medium">
            reservas@praiabrava.com.br
          </a>
          , assim eles poderão aplicar o desconto negociado.
        </p>

        <p className="text-white mt-4 text-sm">
          <Link
            href="https://www.praiabrava.com.br/"
            target="_blank"
            className="underline hidden lg:block"
          >
            Conheça o hotel
          </Link>

          <Button href="https://www.praiabrava.com.br" primary mobile>
            Conheça o hotel
          </Button>
        </p>

        <svg
          className="hidden lg:block size-16"
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
    </section>

    <section className="grid grid-cols-1 lg:grid-cols-3 w-full gap-2">
      <h3 className="col-span-1 block lg:hidden mt-6 mb-2 text-lg text-primary font-bold">
        Outros hotéis na região
      </h3>

      <div className="col-span-1 h-[40vh] relative bg-primary">
        <Link
          href="https://pontadascanas.hoteiscostanorte.com.br"
          target="_blank"
        >
          <span
            className={clsx(
              "text-white font-header text-xl absolute top-1/2 left-8 lg:left-24 z-20",
              "hover:opacity-70"
            )}
          >
            Costa Norte
          </span>

          <img
            src="/assets/costa.jpg"
            loading="eager"
            className="object-cover size-full opacity-30 hover:opacity-80"
          />
        </Link>
      </div>

      <div className="col-span-1 h-[40vh] relative bg-primary">
        <Link href="https://www.hoteltorresdacachoeira.com" target="_blank">
          <span
            className={clsx(
              "text-white font-header text-xl absolute top-1/2 left-8 lg:left-16 z-20",
              "hover:opacity-70"
            )}
          >
            Torres da Cachoeira
          </span>

          <img
            src="/assets/torres.jpg"
            loading="eager"
            className="object-cover size-full opacity-30 hover:opacity-80"
          />
        </Link>
      </div>

      <div className="col-span-1 h-[40vh] relative bg-primary">
        <Link
          href="https://www.slavierohoteis.com.br/hoteis/slaviero-ingleses-convention"
          target="_blank"
        >
          <span
            className={clsx(
              "text-white font-header text-xl absolute top-1/2 left-8 lg:left-16 z-20",
              "hover:opacity-70"
            )}
          >
            Slaviero Ingleses Convention
          </span>

          <img
            src="/assets/slaviero.jpg"
            loading="eager"
            className="object-cover size-full opacity-30 hover:opacity-80"
          />
        </Link>
      </div>
    </section>
  </ContainerBase>
);

export default Page;
