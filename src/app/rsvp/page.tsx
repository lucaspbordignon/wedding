"use client";

import ContainerBase from "@wedding/components/ContainerBase";
import Header from "@wedding/components/Header";
import useAuthenticationState from "@wedding/state/authentication";
import StateGoing from "@wedding/app/rsvp/StateGoing";
import StateNotGoing from "@wedding/app/rsvp/StateNotGoing";
import Default from "@wedding/app/rsvp/Default";

const Page = () => {
  const inviteeGroup = useAuthenticationState((state) => state.inviteeGroup);

  const isNotResponded = !inviteeGroup || inviteeGroup.attending === null;
  const isConfirmed = inviteeGroup && inviteeGroup.attending;
  const isRejected = inviteeGroup && !inviteeGroup.attending;

  return (
    <ContainerBase className="justify-between">
      <Header />

      {isConfirmed && <StateGoing />}
      {isRejected && <StateNotGoing />}
      {isNotResponded && <Default />}
    </ContainerBase>
  );
};

export default Page;
