import { FaArrowAltCircleUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const TopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  }, []);

  return (
    <button
      id="toTop"
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
      className={`top-btn
        fixed border-2 border-blue-500 z-10 rounded-full 440:bottom-16 440:right-10 440:text-5xl 220:bottom-10 220:right-5  220:text-4xl bg-blue-500 ${
          isVisible ? "block" : "hidden"
        }`}
    >
      <FaArrowAltCircleUp />
    </button>
  );
};

export default TopBtn;
