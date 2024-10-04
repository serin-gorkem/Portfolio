import { lazy } from "react";
const Navbar = lazy(() => import("../components/Navbar"));
const Highlight = lazy(() => import("../components/Highlight"));
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();
/**
 * @description The Footer component displays the developer's contact information and social media links.
 */
function Footer() {
  return (
    <footer data-aos="fade-up" id="footer" className="m-2 relative bg-secondary text-text-white xl:m-4">
      <section className="max-container relative w-full p-4 py-8 sm:px-8 sm:py-16 xl:px-[6rem]">
        <div className="mb-4 flex gap-1 sm:h-12 sm:gap-1 xl:mb-8">
          <h1 className="font-title text-3xl font-extrabold tracking-tighter sm:pb-10 sm:text-5xl xl:pb-8">
            Want to
          </h1>
          {
            <Highlight
              element={
                <h1 className="font-title text-3xl font-extrabold tracking-tighter sm:text-5xl">
                  work?
                </h1>
              }
            />
          }
        </div>
        <p className="pb-1 font-lato text-sm font-medium leading-relaxed tracking-[%2] opacity-60 sm:text-2xl sm:leading-relaxed xl:w-[61.25rem]">
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
                  className="font-lato font-medium leading-relaxed tracking-[%2] opacity-70 sm:text-2xl sm:leading-relaxed"
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
          <a
            href="https://www.linkedin.com/in/gorkem-serin-097606227/"
            aria-label="Linkedin"
            className="transition-all duration-500 hover:-translate-y-3"
          >
          <img src="./svg/linkedin.svg" alt="linkedin logo" className="w-10"></img>
          </a>
          <a
            href="https://github.com/serin-gorkem"
            aria-label="Github"
            className="transition-all duration-500 hover:-translate-y-3"
          >
          <img src="./svg/github.svg" alt="linkedin logo" className="w-10"></img>
          </a>
          <a
            href="https://www.instagram.com/gorkemseriin/"
            aria-label="Instagram"
            className="transition-all duration-500 hover:-translate-y-3"
          >
          <img src="./svg/instagram.svg" alt="linkedin logo" className="w-10"></img>
          </a>
        </div>
        <Navbar isFooter={true} />
        <a
          href="https://www.linkedin.com/in/gorkem-serin-097606227/"
          aria-label="Link to my Linkedin"
          className=" absolute -bottom-6 text-[0.625rem] opacity-60 sm:text-xs xl:-bottom-12 pb-1 xl:pb-2 xl:text-xl"
        >
          © All rights reserved - Gorkem Serin
        </a>
      </section>
    </footer>
  );
}
export default Footer;
