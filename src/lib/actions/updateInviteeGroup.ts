"use server";

import "server-only";

import { client } from "@wedding/lib/db/server";
import { Database } from "@wedding/lib/db/types";

type InviteeGroup = Database["public"]["Tables"]["invitee_groups"]["Row"];

const updateInviteeGroup = async (
  handle: string,
  params: Partial<Omit<InviteeGroup, "handle">>
): Promise<InviteeGroup | void> => {
  const supabase = client();

  const inviteeGroupsResponse = await supabase
    .from("invitee_groups")
    .update(params)
    .eq("handle", handle)
    .select();

  const inviteeGroups = inviteeGroupsResponse.data;

  return inviteeGroups?.[0];
};

export default updateInviteeGroup;
