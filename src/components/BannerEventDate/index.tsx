import { animated } from "@react-spring/web";
import usePageState from "@wedding/state/page";

const HORIZONTAL_MARGIN = 20;
const BIAS_FACTOR_TRANSLATE = -32;

const THREE_DIGIT_WIDTH = 72;
const TWO_DIGIT_WIDTH = 10;

const BannerEventDate = () => {
  const scrollYProgress = usePageState((state) => state.scrollYProgress);

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  const scrollYProgressPercentage = scrollYProgress / windowHeight;

  const translateXTwoDigit = Math.min(
    windowWidth / 2 - HORIZONTAL_MARGIN - TWO_DIGIT_WIDTH,
    scrollYProgressPercentage * (windowWidth / 2) - BIAS_FACTOR_TRANSLATE
  );

  const translateXThreeDigit = Math.min(
    windowWidth / 2 - HORIZONTAL_MARGIN - THREE_DIGIT_WIDTH,
    scrollYProgressPercentage * (windowWidth / 2) - BIAS_FACTOR_TRANSLATE
  );

  return (
    <section className="flex justify-center text-7xl">
      <div>
        <animated.h1 style={{ translateX: translateXTwoDigit }}>29</animated.h1>

        <animated.h1
          style={{ translateX: translateXThreeDigit }}
          className="mb-3"
        >
          mar
        </animated.h1>

        <animated.h1 style={{ translateX: translateXTwoDigit }}>25</animated.h1>
      </div>
    </section>
  );
};

export default BannerEventDate;
