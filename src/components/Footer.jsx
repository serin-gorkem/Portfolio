import Highlight from "../components/Highlight";
import { lazy } from "react";
const Navbar = lazy(() => import("../components/Navbar"));
function Footer() {
  return (
    <footer id="footer" className="m-2 bg-primary xl:m-4">
    <section className="max-container relative w-full p-4 py-8 sm:px-8 sm:py-16 xl:px-[6rem]">
      <div className="mb-4 flex gap-1 sm:h-12 sm:gap-1 xl:mb-8">
        <h1 className="font-playfair text-3xl font-extrabold tracking-tighter sm:pb-10 sm:text-5xl xl:pb-8">
          Want to
        </h1>
        {
          <Highlight
            element={
              <h1 className="font-playfair text-3xl font-extrabold tracking-tighter sm:text-5xl">
                work?
              </h1>
            }
          />
        }
      </div>
      <p className="pb-8 font-lato font-light leading-relaxed tracking-[%2] opacity-60 sm:text-2xl sm:leading-relaxed xl:w-[61.25rem] xl:pb-16">
        If you need a modern and powerful website for your business, startup
        or yourself, I am available for work. You can email me directly at :
      </p>
      <div className="mb-20">
        {
          <Highlight
            element={
              <a
                href="mailto: gorkemserin@outlook.com"
                aria-label="Go to the mail application to send me mail."
                className="font-lato font-light leading-relaxed tracking-[%2] opacity-70 sm:text-2xl sm:leading-relaxed"
              >
                gorkemserin@outlook.com
              </a>
            }
          />
        }
      </div>
      <Navbar isFooter={true} />
      <a
        href="https://www.linkedin.com/in/gorkem-serin-097606227/"
        aria-label="Link to my Linkedin"
        className="absolute -bottom-6 text-[0.625rem] opacity-40 sm:text-xs xl:-bottom-12 xl:text-xl"
      >
        © All rights reserved - Gorkem Serin
      </a>
    </section>
  </footer>
  );
}
export default Footer;
