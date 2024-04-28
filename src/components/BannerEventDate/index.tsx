import { animated } from "@react-spring/web";
import usePageState from "@wedding/state/page";

const BannerEventDate = () => {
  const scrollYProgress = usePageState((state) => state.scrollYProgress);

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  const scrollYProgressPercentage = scrollYProgress / windowHeight;

  const biasFactorTranslate = -32;
  const biasFactorLetterSpacing = Math.min(
    windowWidth * 0.05,
    (scrollYProgressPercentage + 0.1) * windowWidth * 0.05
  );

  const translateX = Math.min(
    (windowWidth / 2) * 0.75,
    scrollYProgressPercentage * (windowWidth / 2) - biasFactorTranslate
  );

  return (
    <section className="flex justify-center text-7xl">
      <div>
        <animated.h1
          style={{ translateX: translateX + biasFactorLetterSpacing }}
        >
          29
        </animated.h1>
        <animated.h1 style={{ translateX: translateX }}>mar</animated.h1>
        <animated.h1
          style={{ translateX: translateX + biasFactorLetterSpacing }}
        >
          25
        </animated.h1>
      </div>
    </section>
  );
};

export default BannerEventDate;
