import Button from "@wedding/components/Button";
import updateInviteeGroup from "@wedding/lib/actions/updateInviteeGroup";
import useAuthenticationState from "@wedding/state/authentication";
import { useState } from "react";

const StateNotGoing = () => {
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
        attending: true,
      });

      if (!record) throw new Error("Failed to update invitee group");

      setInviteeGroup(record);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-between size-full ">
      <section className="flex flex-col gap-y-2 h-full justify-center items-center">
        <p className="text-7xl">😭</p>

        <h2 className="font-header text-2xl font-bold">Ah! Que pena</h2>

        <p className="text-center text-primary px-4">
          Se conseguir mudar seus planos, pode alterar a confirmação aqui pelo
          site até o dia 01/02/2025.
        </p>
      </section>

      <section className="flex flex-col gap-2 w-full">
        <Button href="/" primary>
          Voltar para o início
        </Button>

        <Button onClick={onSaveResponse} loading={loading}>
          Vou conseguir ir!
        </Button>
      </section>
    </section>
  );
};

export default StateNotGoing;
