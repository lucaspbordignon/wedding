"use client";

import Button from "@wedding/components/Button";
import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";
import RadioGroup from "@wedding/components/RadioGroup";
import RadioGroupItem from "@wedding/components/RadioGroupItem";
import updateInviteeGroup from "@wedding/lib/actions/updateInviteeGroup";
import useAuthenticationState from "@wedding/state/authentication";
import clsx from "clsx";
import { useState } from "react";

const Page = () => {
  const inviteeGroup = useAuthenticationState((state) => state.inviteeGroup);
  const setInviteeGroup = useAuthenticationState(
    (state) => state.setInviteeGroup
  );

  const [selected, setSelected] = useState<"yes" | "no">("yes");
  const [loading, setLoading] = useState(false);

  const onSaveResponse = async () => {
    setLoading(true);

    try {
      if (!inviteeGroup) throw new Error("Invitee group not found");

      const attending = selected === "yes";

      const record = await updateInviteeGroup(inviteeGroup.handle, {
        attending,
      });

      if (!record) throw new Error("Failed to update invitee group");

      setInviteeGroup(record);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerBase className="justify-between">
      <Header />

      <section className="flex flex-col justify-between size-full mt-4">
        <section className="flex flex-col gap-4 w-full">
          <h1 className="text-5xl font-header text-primary font-medium">
            {inviteeGroup?.description}
          </h1>

          <div className="flex flex-col gap-y-1">
            <p className="font-light">
              Podemos contar com a presença de vocês?
            </p>
            <p className="text-sm">Confirmar até 01/02/2025 </p>
          </div>
        </section>

        <RadioGroup
          className="w-full flex flex-col gap-y-4"
          defaultValue="yes"
          onValueChange={(value) => setSelected(value as "yes" | "no")}
        >
          <div
            className={clsx(
              "w-full border p-6 rounded-lg flex items-center space-x-2",
              {
                "border-primary": selected === "yes",
              }
            )}
          >
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Sim, estaremos lá!</label>
          </div>

          <div
            className={clsx(
              "w-full border p-6 rounded-lg flex items-center space-x-2",
              {
                "border-primary": selected === "no",
              }
            )}
          >
            <RadioGroupItem value="no" id="no" />
            <label htmlFor="no">Infelizmente não poderemos ir</label>
          </div>
        </RadioGroup>

        <Button primary onClick={onSaveResponse} loading={loading}>
          Enviar
        </Button>
      </section>
    </ContainerBase>
  );
};

export default Page;
