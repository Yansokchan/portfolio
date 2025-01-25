import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="Services flex flex-col gap-10 items-center min-h-screen min-w-full 1320:px-20 lg:px-10"
    >
      <h1 className="mt-10 lg:text-6xl 550:text-5xl 400:text-4xl 310:text-3xl 220:text-2xl font-bold name">
        Services
      </h1>
      <div className="mb-20 grid gap-5 1320:grid-cols-3 800:grid-cols-2 310:grid-cols-1">
        <div className="relative p-[2px] card rounded-xl lg:w-96 md:w-[360px] 440:w-[330px] 310:w-[285px] 220:w-[200px] shadow card-hover">
          <div className="spin-ser"></div>
          <div className="card-body bg-base-100 z-10 rounded-xl">
            <h1 className="card-title text-4xl name">01</h1>
            <h2 className="card-title font-bold talk">Network Design</h2>
            <p className="font-semibold">What I Offer</p>
            <p>Custom solutions tailored for your business.</p>
            <p>
              Determine whether a wired, wireless, or hybrid setup works best,
              etc.
            </p>
            <div className="card-actions justify-end">
              <a href="#contact">
                <button className="btn btn-outline glass mt-3 btn-info btn-xs sm:btn-xs md:btn-sm lg:btn-md">
                  Interesting
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="relative p-[2px] card rounded-xl lg:w-96 md:w-[360px] 440:w-[330px] 310:w-[285px] 220:w-[200px] shadow card-hover">
          <div className="spin-ser"></div>
          <div className="card-body z-10 rounded-xl bg-base-100">
            <h1 className="card-title text-4xl name">02</h1>
            <h2 className="card-title font-bold talk">Security Solution</h2>
            <p className="font-semibold">What I Offer</p>
            <p>
              Network and data protection, Surveillance systems and monitoring.
            </p>
            <p>Endpoint security and threat management, etc.</p>
            <div className="card-actions justify-end">
              <a href="#contact">
                <button className="btn btn-outline glass mt-3 btn-info btn-xs sm:btn-xs md:btn-sm lg:btn-md">
                  Interesting
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="relatiev p-[2px] card rounded-xl lg:w-96 md:w-[360px] 440:w-[330px] 310:w-[285px] 220:w-[200px] shadow card-hover">
          <div className="spin-ser"></div>
          <div className="card-body z-10 bg-base-100 rounded-xl">
            <h1 className="card-title text-4xl name">03</h1>
            <h2 className="card-title font-bold talk">Setup & Maintenance</h2>
            <p className="font-semibold">What I Offer</p>
            <p>Routers, switches, firewalls, and essential software.</p>
            <p>24/7 monitoring, troubleshooting, and upgrades your network.</p>
            <div className="card-actions justify-end">
              <a href="#contact">
                <button className="btn btn-outline glass mt-3 btn-info btn-xs sm:btn-xs md:btn-sm lg:btn-md">
                  Interesting
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="relative p-[2px] card rounded-xl lg:w-96 md:w-[360px] 440:w-[330px] 310:w-[285px] 220:w-[200px] shadow card-hover">
          <div className="spin-ser"></div>
          <div className="card-body z-10 rounded-xl bg-base-100">
            <h1 className="card-title text-4xl name">04</h1>
            <h2 className="card-title font-bold talk">
              Frontend Web Development
            </h2>
            <p className="font-semibold">What I Offer</p>
            <p>Responsive Websites, Seamless experience across all devices.</p>
            <p>
              Cross-Browser Compatibility, Interactive elements and animations.
            </p>
            <div className="card-actions justify-end">
              <a href="#contact">
                <button className="btn btn-outline glass mt-3 btn-info btn-xs sm:btn-xs md:btn-sm lg:btn-md">
                  Interesting
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="relative p-[2px] card rounded-xl lg:w-96 md:w-[360px] 440:w-[330px] 310:w-[285px] 220:w-[200px] shadow card-hover">
          <div className="spin-ser"></div>
          <div className="card-body z-10 rounded-xl bg-base-100">
            <h1 className="card-title text-4xl name">05</h1>
            <h2 className="card-title font-bold talk">UX/UI Design</h2>
            <p className="font-semibold">What I Offer</p>
            <p>Pixel-Perfect Implementation, Responsive Design.</p>
            <p>
              Interactive Features, Fast Performance, Cross-Browser
              Compatibility.
            </p>
            <div className="card-actions justify-end">
              <a href="#contact">
                <button className="btn btn-outline glass mt-3 btn-info btn-xs sm:btn-xs md:btn-sm lg:btn-md">
                  Interesting
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="relative p-[2px] card rounded-xl lg:w-96 md:w-[360px] 440:w-[330px] 310:w-[285px] 220:w-[200px] shadow card-hover">
          <div className="spin-ser"></div>
          <div className="card-body rounded-xl z-10 bg-base-100">
            <h1 className="card-title text-4xl name">06</h1>
            <h2 className="card-title font-bold talk">
              Network devices/IT Products Sales
            </h2>
            <p className="font-semibold">What I Offer</p>
            <p>Hardware, Software and Licenses.</p>
            <p>
              Network setup and configuration, Maintenance and troubleshooting.
            </p>
            <div className="card-actions justify-end">
              <a href="#contact">
                <button className="btn btn-outline glass mt-3 btn-info btn-xs sm:btn-xs md:btn-sm lg:btn-md">
                  Interesting
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
