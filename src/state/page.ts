import { create } from "zustand";

interface PageState {
  /* Scrollbar progress for current page */
  scrollYProgress: number;
}

interface PageActions {
  setScrollYProgress: (input: number) => void;
}

const usePageState = create<PageState & PageActions>()((set) => ({
  scrollYProgress: 0,
  setScrollYProgress: (input) => set({ scrollYProgress: input }),
}));

export default usePageState;
