import { Typewriter } from "react-simple-typewriter";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { PiGithubLogo } from "react-icons/pi";
import pf from "../assets/profile.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Home = () => {
  useGSAP(() => {
    gsap.fromTo(".img", { scale: 0 }, { scale: 1, duration: 1.5, delay: 5 });
    gsap.fromTo(
      ".typing",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 5 }
    );
    gsap.fromTo(
      ".hello",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 5.3 }
    );
    gsap.fromTo(
      ".n",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, delay: 5.5 }
    );
    gsap.fromTo(
      ".des",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 5.8 }
    );
    gsap.fromTo(
      ".b2",
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, delay: 6.1 }
    );
    gsap.fromTo(
      ".b1",
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, delay: 7 }
    );
    gsap.fromTo(
      ".s1",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 7.5 }
    );
    gsap.fromTo(
      ".s2",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 8 }
    );
    gsap.fromTo(
      ".s3",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 8.5 }
    );
    gsap.fromTo(
      ".s4",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 9 }
    );
    gsap.fromTo(
      ".s5",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 9.5 }
    );
  });
  return (
    <div
      id="home"
      className="Home hero bg-base-200 min-h-screen 1320:px-8 lg:px-10"
    >
      <div className="hero-content flex items-center w-full justify-between flex-col lg:flex-row-reverse">
        <div className="img relative p-[3px] rounded-full z-0">
          <div className="spin-pf"></div>
          <div className="bg-base-200  rounded-full">
            <img src={pf} className="w-[300px] rounded-full" />
          </div>
        </div>
        <div className="info">
          <div className="flex flex-col lg:items-start 220:items-center lg:gap-3 550:gap-2 400:gap-1">
            <p className="typing lg:text-3xl 550:text-2xl 400:text-xl talk py-1">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Presale Network",
                  "Network Engineer",
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </p>
            <h1 className="hello font-semibold lg:text-6xl 550:text-5xl 400:text-4xl 310:text-2xl">
              Hello I'm
            </h1>
            <h1 className="n lg:text-6xl 550:text-5xl 400:text-4xl 310:text-2xl text-blue-500 font-bold name">
              SOKCHAN YAN
            </h1>
            <p className="des py-2 max-w-[700px] lg:text-3xl 550:text-2xl 400:text-xl">
              I am a junior frontend developer & Network Engineer from Tboung
              Khmum in Cambodia with 3months of experience.
            </p>
            <div className="flex md:gap-5 310:gap-4 items-center">
              <a href="cv.pdf" download="sokchanyan.pdf">
                <button className="b1 btn btn-hover text-white glass bg-gradient-to-r from-cyan-300 to-blue-500">
                  Download My CV
                </button>
              </a>
              <a href="#contact" className="b2 font-semibold talk letTalk">
                Hire Me Now!
              </a>
            </div>

            <div className="flex 400:gap-5 220:gap-3 items-center justify-start  mt-5">
              <a
                target="blank"
                className="s1 400:p-3 220:p-2 rounded-full so-logo"
                title="Linkedin"
                href="https://www.linkedin.com/in/sokchan-yan-74277b335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <FiLinkedin className="400:text-3xl 220:text-2xl" />
              </a>
              <a
                target="blank"
                className="s2 400:p-3 220:p-2 rounded-full so-logo"
                title="Telegram"
                href="https://t.me/YanSokchan"
              >
                <TbBrandTelegram className="400:text-3xl 220:text-2xl" />
              </a>
              <a
                target="blank"
                className="s3 400:p-3 220:p-2 rounded-full so-logo"
                title="Facebook"
                href="https://www.facebook.com/kh.boyloy.1?mibextid=JRoKGi"
              >
                <FiFacebook className="400:text-3xl 220:text-2xl" />
              </a>
              <a
                target="blank"
                className="s4 400:p-3 220:p-2 rounded-full so-logo"
                title="Instagram"
                href="https://www.instagram.com/ouknhachan?igsh=cXoyenZrd2hhdnI4"
              >
                <FaInstagram className="400:text-3xl 220:text-2xl" />
              </a>
              <a
                target="blank"
                className="s5 400:p-3 220:p-2 rounded-full so-logo"
                title="Github"
                href="https://github.com/Yansokchan"
              >
                <PiGithubLogo className="400:text-3xl 220:text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
