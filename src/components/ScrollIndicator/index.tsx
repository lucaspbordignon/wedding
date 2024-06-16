import clsx from "clsx";
import { ChevronDown } from "react-feather";

const ScrollIndicator = () => (
  <section
    style={{ left: "calc(50% - 1rem)", animationDuration: "3s" }}
    className={clsx(
      "absolute bottom-0 transform -translate-x-1/2",
      "text-white animate-bounce"
    )}
  >
    <ChevronDown className="-mb-5" size={32} />
    <ChevronDown size={32} />
  </section>
);

export default ScrollIndicator;
