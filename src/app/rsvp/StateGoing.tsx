import Button from "@wedding/components/Button";
import updateInviteeGroup from "@wedding/lib/actions/updateInviteeGroup";
import useAuthenticationState from "@wedding/state/authentication";
import { useState } from "react";

const StateGoing = () => {
  const inviteeGroup = useAuthenticationState((state) => state.inviteeGroup);
  const setInviteeGroup = useAuthenticationState(
    (state) => state.setInviteeGroup
  );

  const [loading, setLoading] = useState(false);

  const onSaveResponse = async () => {
    setLoading(true);

    try {
      if (!inviteeGroup) throw new Error("Invitee group not found");

      const record = await updateInviteeGroup(inviteeGroup.handle, {
        attending: false,
      });

      if (!record) throw new Error("Failed to update invitee group");

      setInviteeGroup(record);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-between items-center size-full">
      <section className="flex flex-col gap-y-2 h-full justify-center items-center">
        <img
          alt="icon"
          src="/assets/cheers.png"
          className="object-contain size-56"
        />

        <h2 className="font-header text-2xl font-bold">Presença confirmada!</h2>

        <p className="text-center px-4">
          Uhuuu. Estamos muito ansiosos para celebrar esse momento junto com
          vocês.
        </p>
      </section>

      <section className="flex flex-col gap-2 w-full">
        <Button primary href="/">
          Voltar para o início
        </Button>

        <Button onClick={onSaveResponse} loading={loading}>
          Não vou conseguir ir!
        </Button>
      </section>
    </section>
  );
};

export default StateGoing;
