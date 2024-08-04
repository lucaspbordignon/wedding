"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import getInviteeGroup from "@wedding/lib/actions/getInviteeGroup";
import useAuthenticationState from "@wedding/state/authentication";

const Authenticator = () => {
  const params = useSearchParams();
  const handle = params.get("h") ?? "";

  const inviteeGroup = useAuthenticationState((state) => state.inviteeGroup);
  const setInviteeGroup = useAuthenticationState(
    (state) => state.setInviteeGroup
  );

  const loadInviteeGroupData = async () => {
    if (!handle || Boolean(inviteeGroup)) return;

    const data = await getInviteeGroup(handle);

    setInviteeGroup(data!);
  };

  useEffect(() => {
    loadInviteeGroupData();
  }, [handle]);

  return null;
};

export default Authenticator;
