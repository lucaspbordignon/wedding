"use client";

import Button from "@wedding/components/Button";
import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";
import RadioGroup from "@wedding/components/RadioGroup";
import RadioGroupItem from "@wedding/components/RadioGroupItem";
import useAuthenticationState from "@wedding/state/authentication";

const Page = () => {
  const inviteeGroup = useAuthenticationState((state) => state.inviteeGroup);

  return (
    <ContainerBase className="justify-between">
      <Header />

      <section className="flex flex-col justify-between size-full gap-y-20">
        <section className="grid size-full h-1/2">
          <h1 className="text-5xl font-header text-primary font-medium">
            {inviteeGroup?.description}
          </h1>

          <p className="font-light">Podemos contar com a presença de vocês?</p>
          <p className="">Confirmar até 01/02/2025 </p>
        </section>

        <RadioGroup className="w-full flex flex-col gap-y-4" defaultValue="yes">
          <div className="w-full border border-primary p-6 rounded-lg flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Sim, estaremos lá!</label>
          </div>

          <div className="w-full border border-primary p-6 rounded-lg flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <label htmlFor="no">Infelizmente não poderemos ir</label>
          </div>
        </RadioGroup>

        <Button primary>Enviar</Button>
      </section>
    </ContainerBase>
  );
};

export default Page;
