import { Database } from "@wedding/lib/db/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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
>()(
  persist(
    (set) => ({
      inviteeGroup: undefined,

      setInviteeGroup: (input) => set({ inviteeGroup: input }),
    }),
    {
      name: "authentication",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthenticationState;
