const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Kingsleyetukudo",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kingsley-etukudo-475578225/",
  },
  {
    label: "Twitter X",
    href: "https://x.com/codewithsadee_",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codewithsadee",
  },
  {
    label: "CodePen",
    href: "https://codepen.io/codewithsadee",
  },
];

import Logo from "../images/logo.svg";
import { ButtonPrimary } from "./Button";
const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href="mailto:etukudokingsley07@gmail.com"
              label="Start Project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up"> Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>{" "}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 reveal-up"> Socials</p>

              <ul>
                {socials.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-10 border-t border-zinc-300 py-8">
          <a href="/" className="logo reveal-up">
            <img src={Logo} width={40} height={40} alt="Logo" />
          </a>

          <p className="text-sm text-zinc-400 reveal-up">
            &copy; {new Date().getFullYear()} Kingsley Etukudo. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
