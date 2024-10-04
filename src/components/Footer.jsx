import { lazy } from "react";
const Navbar = lazy(() => import("../components/Navbar"));
const Highlight = lazy(() => import("../components/Highlight"));
const ImportAos = lazy(() => import("../components/ImportAos"));

/**
 * @description The Footer component displays the developer's contact information and social media links.
 */
function Footer() {
  {
    /* Import AOS for animations */
  }
  <ImportAos />;
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/gorkem-serin-097606227/",
      alt: "LinkedIn Logo",
      label: "Linkedin",
      src: "./svg/linkedin.svg",
    },
    {
      href: "https://github.com/serin-gorkem",
      alt: "Github Logo",
      label: "Github",
      src: "./svg/github.svg",
    },
    {
      href: "https://www.instagram.com/gorkemseriin/",
      alt: "Instagram Logo",
      label: "Instagram",
      src: "./svg/instagram.svg",
    },
  ];

  return (
    <footer
      data-aos="fade-up"
      id="footer"
      className="relative m-2 bg-secondary text-text-white xl:m-4"
    >
      <section className="max-container relative w-full p-4 py-8 sm:px-8 sm:py-16 xl:px-[6rem]">
        <div className="mb-4 flex gap-1 sm:h-12 sm:gap-1 xl:mb-8">
          <h1 className="font-title text-3xl font-medium tracking-tighter sm:pb-10 sm:text-5xl xl:pb-8">
            Want to
          </h1>
          {
            <Highlight
              element={
                <h1 className="font-title text-3xl font-medium tracking-tighter sm:text-5xl">
                  work?
                </h1>
              }
            />
          }
        </div>
        <p className="pb-1 font-lato text-sm font-light leading-relaxed tracking-[%2] sm:text-2xl sm:leading-relaxed xl:w-[61.25rem]">
          If you need a modern and powerful website for your business, startup
          or yourself, I am available for work. You can email me directly at:
        </p>
        <div className="mb-10">
          {
            <Highlight
              element={
                <a
                  href="mailto: gorkemserin@outlook.com"
                  aria-label="Go to the mail application to send me mail."
                  className="font-lato font-light leading-relaxed tracking-[%2] sm:text-2xl sm:leading-relaxed"
                >
                  gorkemserin@outlook.com
                </a>
              }
            />
          }
        </div>
        {/*Lawnicons Line Brand Icons, SVG REPO -- https://www.svgrepo.com/collection/lawnicons-line-brand-icons/*/}
        <div
          aria-label="social accounts"
          className="mb-8 flex items-center gap-8"
        >
          {socialLinks.map(({ href, label, src }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="transition-all duration-500 hover:-translate-y-3"
            >
              <img src={src} alt={`${label} logo`} className="w-10" />
            </a>
          ))}
        </div>
        <Navbar isFooter={true} />
        <a
          href="https://www.linkedin.com/in/gorkem-serin-097606227/"
          aria-label="Link to my Linkedin"
          className="absolute -bottom-6 pb-1 text-[0.625rem] opacity-60 sm:text-xs xl:-bottom-12 xl:pb-2 xl:text-xl"
        >
          © All rights reserved - Gorkem Serin
        </a>
      </section>
    </footer>
  );
}
export default Footer;
