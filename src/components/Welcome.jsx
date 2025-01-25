import gsap from "gsap";
import SplitText from "../TextAnimations/SplitText/SplitText";
import { IoPersonOutline } from "react-icons/io5";
import { PiGithubLogo } from "react-icons/pi";
import { DiVisualstudio } from "react-icons/di";
import { useGSAP } from "@gsap/react";
import MovingComponent from "react-moving-text";
const Welcome = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".welcome",
      { opacity: 1 },
      { opacity: 0, zIndex: -1, duration: 2, delay: 3 }
    );
    // gsap.fromTo(".p1", { display: "none" }, { display: "",  });
    gsap.fromTo(".l2", { opacity: 0 }, { opacity: 1, delay: 0.7 });
    gsap.fromTo(".l3", { opacity: 0 }, { opacity: 1, delay: 1 });
    gsap.fromTo(
      ".p1",
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, delay: 1.9 }
    );
    gsap.fromTo(".Home", { display: "none" }, { display: "", delay: 5 });
    gsap.fromTo(".About", { display: "none" }, { display: "", delay: 5 });
    gsap.fromTo(".Navbar", { display: "none" }, { display: "", delay: 5 });
    gsap.fromTo(".Services", { display: "none" }, { display: "", delay: 5 });
    gsap.fromTo(".Skills", { display: "none" }, { display: "", delay: 5 });
    gsap.fromTo(".Contact", { display: "none" }, { display: "", delay: 5 });
    gsap.fromTo(".Footer", { display: "none" }, { display: "", delay: 5 });
  });
  return (
    <div className="welcome absolute top-0 left-0 h-full w-full flex flex-col 550:gap-10 440:gap-8 220:gap-6 justify-center items-center bg-base-200">
      <div className="flex 550:gap-10 440:gap-8 220:gap-6">
        <MovingComponent
          type="fadeInFromTop"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <div className="p-3 l1 rounded-full logo-wel">
            <IoPersonOutline className="text-3xl" />
          </div>
        </MovingComponent>
        <MovingComponent
          type="fadeInFromTop"
          duration="1000ms"
          delay="0.2s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <div className="p-3 l2 rounded-full logo-wel">
            <PiGithubLogo className="text-3xl" />
          </div>
        </MovingComponent>
        <MovingComponent
          type="fadeInFromTop"
          duration="1000ms"
          delay="0.4s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <div className="p-3 l3 rounded-full logo-wel">
            <DiVisualstudio className="text-3xl" />
          </div>
        </MovingComponent>
      </div>
      <div className="flex flex-col items-center justify-center 550:gap-10 440:gap-7 220:gap-4 md:text-6xl 550:text-5xl 440:text-4xl 220:text-2xl">
        <SplitText
          text="HELLO, WELCOME TO"
          className="p2 font-semibold text-blue-500"
          delay={90}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        <h1 className="p1 font-bold talk wel">SOKCHAN.YAN WEBSITE</h1>
      </div>
    </div>
  );
};

export default Welcome;
