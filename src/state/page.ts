import { create } from "zustand";

interface PageState {
  /* Scrollbar progress for current page */
  scrollYProgress: number;

  /* Menu Controls */
  isMenuOpen: boolean;
}

interface PageActions {
  setScrollYProgress: (input: number) => void;
  setIsMenuOpen: (input: boolean) => void;
}

const usePageState = create<PageState & PageActions>()((set) => ({
  scrollYProgress: 0,
  isMenuOpen: false,

  setScrollYProgress: (input) => set({ scrollYProgress: input }),
  setIsMenuOpen: (input) => set({ isMenuOpen: input }),
}));

export default usePageState;
