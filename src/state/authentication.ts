import { Database } from "@wedding/lib/db/types";
import { create } from "zustand";

type InviteeGroup = Database["public"]["Tables"]["invitee_groups"]["Row"];

interface AuthenticationState {
  /* Loaded invitee group */
  inviteeGroup: InviteeGroup | undefined;
}

interface AuthenticationActions {
  setInviteeGroup: (input: InviteeGroup) => void;
}

const useAuthenticationState = create<
  AuthenticationState & AuthenticationActions
>()((set) => ({
  inviteeGroup: undefined,

  setInviteeGroup: (input) => set({ inviteeGroup: input }),
}));

export default useAuthenticationState;
