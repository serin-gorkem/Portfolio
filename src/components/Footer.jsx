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
        <p className="pb-1 font-lato font-light text-sm leading-relaxed tracking-[%2] opacity-60 sm:text-2xl sm:leading-relaxed xl:w-[61.25rem]">
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
                  className="font-lato font-light leading-relaxed tracking-[%2] opacity-70 sm:text-2xl sm:leading-relaxed"
                >
                  gorkemserin@outlook.com
                </a>
              }
            />
          }
        </div>
        {/*Lawnicons Line Brand Icons, SVG REPO -- https://www.svgrepo.com/collection/lawnicons-line-brand-icons/*/}
        <div aria-label="social accounts" className=" flex mb-8 gap-2">
          <a href="https://www.linkedin.com/in/gorkem-serin-097606227/" aria-label="Linkedin" className="hover:-translate-y-3 transition-all duration-500">
            <svg
              width="36px"
              height="36px"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <rect
                  width="132"
                  height="132"
                  x="30"
                  y="30"
                  stroke="#000000"
                  strokeWidth="12"
                  rx="16"
                />

                <path
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="12"
                  d="M66 86v44"
                />

                <circle cx="66" cy="64" r="8" fill="#000000" />

                <path
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeWidth="12"
                  d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"
                />
              </g>
            </svg>
          </a>
          <a href="https://github.com/serin-gorkem" aria-label="Github" className="hover:-translate-y-3 transition-all duration-500">
            <svg
              width="36px"
              height="36px"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="12"
                  d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"
                />
              </g>
            </svg>
          </a>
          <a href="https://www.instagram.com/gorkemseriin/" aria-label="Instagram" className="hover:-translate-y-3 transition-all duration-500">
            <svg
              width="36px"
              height="36px"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  stroke="#000000"
                  strokeWidth="12"
                  d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"
                />

                <circle
                  cx="96"
                  cy="96"
                  r="30"
                  stroke="#000000"
                  strokeWidth="12"
                />

                <circle cx="135" cy="57" r="9" fill="#000000" />
              </g>
            </svg>
          </a>
        </div>
        <Navbar isFooter={true} />
        <a
          href="https://www.linkedin.com/in/gorkem-serin-097606227/"
          aria-label="Link to my Linkedin"
          className="absolute -bottom-6 text-[0.625rem] opacity-60 sm:text-xs xl:-bottom-12 xl:text-xl"
        >
          © All rights reserved - Gorkem Serin
        </a>
      </section>
    </footer>
  );
}
export default Footer;
