import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import LogoWall from "../TextAnimations/LogoWall/LogoWall";
import bootstrap from "../assets/bootstrap.png";
import gsap from "../assets/gsap.png";
import material from "../assets/material.png";
import vitejs from "../assets/vitejs.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import daisyui from "../assets/daisyui.png";
import js from "../assets/js.png";
import tw from "../assets/tw.png";
const Contact = () => {
  const logoImgs = [
    { imgUrl: bootstrap, altText: "React Bits Logo" },
    { imgUrl: gsap, altText: "React Bits Logo" },
    { imgUrl: material, altText: "React Bits Logo" },
    { imgUrl: vitejs, altText: "React Bits Logo" },
    { imgUrl: daisyui, altText: "React Bits Logo" },
    { imgUrl: html, altText: "React Bits Logo" },
    { imgUrl: css, altText: "React Bits Logo" },
    { imgUrl: js, altText: "React Bits Logo" },
    { imgUrl: tw, altText: "React Bits Logo" },
  ];
  const [click, setclick] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "68a4d70f-7e45-422f-bf56-42afeed37f1c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      document.getElementById("modal").showModal();
    }
  };
  return (
    <div
      id="contact"
      className="Contact relative flex items-center bg-base-200 flex-col lg:gap-20 md:gap-10 220:gap-6 2xl:px-48 lg:px-20"
    >
      <h1 className="mt-10 lg:text-6xl 550:text-5xl 400:text-4xl 310:text-3xl 220:text-2xl font-bold name text-blue-500">
        ContactME
      </h1>
      <div className=" 440:px-10 220:px-3 w-full flex 1080:flex-row 220:flex-col 220:gap-14 justify-between 1080:items-start 220:items-center">
        <div className="flex flex-col 1080:gap-10 sm:gap-5 220:gap-3 1080:max-w-[450px]">
          <h1 className="talk text-blue-500 lg:text-4xl 550:text-3xl 400:text-2xl 310:text-xl font-semibold">
            Let's talk
          </h1>
          <p className="lg:text-2xl 550:text-xl 400:text-[19px] 310:text-[18px]">
            I'm currently avaliable to take on new project, so feel free to send
            me a message about anything that you want me to work on. You can
            contact anytime.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <MdOutlineMarkEmailRead className="lg:text-3xl md:text-2xl 310:text-xl" />
              <p className="contact lg:text-2xl md:text-xl 310:text-[18px] 220:text-[14px]">
                yansokchan05@gmail.com
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <LuPhoneCall className="lg:text-3xl md:text-2xl 310:text-xl" />
              <p className="contact lg:text-2xl md:text-xl 310:text-[18px] 220:text-[14px]">
                855+| 975948051
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <FaMapLocationDot className="lg:text-3xl md:text-2xl 310:text-xl" />
              <p className="contact lg:text-[22px] md:text-xl 310:text-[17px] 220:text-[13px]">
                Khan Chbar Ampov, Phnom Penh, Cambodia.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col p-[3px] 1080:max-w-[450px]">
          <div className="before"></div>
          <div className="flex flex-col 550:gap-10 310:gap-5 rounded-xl z-10 lg:p-10 440:p-7 220:p-3 bg-base-200">
            <div className="content flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <h1 className="talk text-blue-500 lg:text-4xl 550:text-3xl 400:text-2xl 310:text-xl font-semibold">
                  Get in touch
                </h1>
                <p>
                  Have something to discuss? Send me a message and let's talk.
                </p>
              </div>
              <FiShare2 className="lg:text-4xl 550:text-3xl 400:text-2xl 220:text-xl font-bold text-cyan-300 mt-2 " />
            </div>
            <form
              className="flex flex-col 550:gap-5 310:gap-3"
              onSubmit={onSubmit}
            >
              <label className="input input-info flex items-center gap-2">
                Name
                <input
                  required
                  type="text"
                  name="name"
                  className="grow talk"
                  placeholder="Your name"
                />
              </label>
              <label className="input input-info flex items-center gap-2">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="grow talk"
                  placeholder="abc123@gmail.com"
                />
              </label>
              <textarea
                required
                name="message"
                className="textarea textarea-info talk"
                placeholder="Message"
              ></textarea>

              <button
                type="submit"
                className="btn text-white btn-hover btn-active bg-gradient-to-r from-cyan-500 border-0 to-blue-600"
              >
                <IoIosSend /> Send Message
              </button>
              <dialog id="modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Your message has been sent successfully.
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button onClick={() => location.reload()} className="btn">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </form>
          </div>
        </div>
      </div>
      {localStorage.getItem("theme") === "dark" ? (
        <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="60s"
          bgColor="#191e24"
          bgAccentColor="#111111"
        />
      ) : (
        <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="60s"
          bgColor="#f2f2f2"
          bgAccentColor="#ffffff"
        />
      )}
    </div>
  );
};

export default Contact;
