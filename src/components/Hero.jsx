import Avatar from "../images/avatar-1.png";
import HeroBanner from "../images/my_portrait.png";
import vue from "../images/vuejs.svg";
import react from "../images/react.svg";
import js from "../images/javascript.svg";
import CV from "../assets/KINGSLEY-ETUKUDO-Resume.pdf";
import { ButtonOutline, ButtonPrimary } from "./Button";
const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src={Avatar}
                alt="Kingsley Etukudo portrait"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>

            <div className=" flex items-center gap-1.5 text-sm text-zinc-400 tracking-wide">
              <span className=" relative w-2.5 h-2.5 bg-emerald-400 rounded-full">
                <span className="absolute w-2 h-2 rounded-full bg-emerald-400 inset-0 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className=" headline-1 max-w-[15ch] sm-w-[20ch] lg:max-w-[15ch] mt-5  mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="md:hidden">
            <img
              src={vue}
              alt=""
              className="absolute animate-pulse top-[270px] left-[200px]"
              width={30}
            />

            <img
              src={react}
              alt=""
              width={30}
              className="absolute right-20 top-[100px] animate-pulse"
            />
            <img
              src={js}
              alt=""
              width={30}
              className="absolute left-[150px] bottom-[250px] animate-pulse"
            />
          </div>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" href={CV} />
            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] ooverflow-hidden relative">
            <img
              src={vue}
              alt=""
              className="absolute animate-pulse top-[150px] left-[30px]"
              width={30}
            />

            <img
              src={react}
              alt=""
              width={30}
              className="absolute right-20 top-[100px] animate-pulse"
            />
            <img
              src={js}
              alt=""
              width={30}
              className="absolute left-[150px] bottom-[170px] animate-pulse"
            />
            <img
              src={HeroBanner}
              alt="Kingsley Etukudo"
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
