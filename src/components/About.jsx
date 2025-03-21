import Logo from "../images/logo.svg";
const About = () => {
  const aboutItems = [
    {
      label: "Project done",
      number: 45,
    },
    {
      label: "Years of experience",
      number: 5,
    },
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] ">
            Welcome! I&apos;m Kingsley, a professional web developer
            specializing in creating visually compelling and highly functional
            websites. With a keen eye for design and a strong technical
            foundation, I transform your vision into a seamless digital
            experience that excels in both aesthetics and performance.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map((item, index) => (
              <div key={index} className="">
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">
                    {item.number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{item.label}</p>
              </div>
            ))}

            <img
              src={Logo}
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
