import { Suspense } from "react";
import { lazy } from "react";
const Footer = lazy(() => import("./components/Footer"));
const Navbar = lazy(() => import("./components/Navbar"));
import { HashLink as Link } from "react-router-hash-link";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Showcase() {
  return (
    <article className="m-2 h-[calc(100vh-1rem)] bg-primary xl:m-4 xl:h-[calc(100vh-2rem)] landscape:max-xl:h-[150vh]">
      <Navbar isFooter={false} />
      <main className="relative my-8 flex flex-col items-center justify-center px-2">
        {/* Project type */}
        <h1 className="mb-2 font-lato text-xs tracking-[0.2rem] text-black opacity-60 sm:px-1 sm:text-base">
          PROJECT SHOWCASE
        </h1>
        {/* Project title  */}
        <p className="pb-5 text-center font-playfair text-[2rem] font-extrabold leading-tight tracking-tighter sm:text-[4rem] sm:leading-tight xl:w-[46rem]">
          Elysium Hotel Website <br></br> Design
        </p>
        <p className="text-center font-lato font-light leading-[175%] tracking-normal sm:text-[1.125rem] sm:leading-[175%] xl:w-[26rem]">
          This is a homepage design and build for a concept project - a chat
          application. I designed the page first then built a responsive web
          page using Webflow.
        </p>
        <div className="relative mb-10 mt-8 h-[3.5rem] w-[9.625rem] animate-fade-in border-2 border-secondary sm:mb-2 sm:h-[3.75rem] sm:w-[10.625rem]">
          {/* CTA Button with the animation logic of moving it on the x and y with transition */}
          <button className="h-[3.5rem] w-[9.625rem] -translate-x-2 -translate-y-2 bg-secondary font-lato text-xs text-white transition-all duration-500 hover:translate-x-0 hover:translate-y-0 sm:h-[3.75rem] sm:w-[10.625rem] sm:text-base">
            <a
              href="https://www.figma.com/design/19B4Ts2SMJCerIFwftbOGr/Responsive-Design-Template-(Copy)?node-id=2027-7&t=dTFkvUlk6xMYySfz-1"
              aria-label="visit source"
            >
              visit figma file
            </a>
          </button>
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
        <img
          decoding="async"
          rel="preload"
          width={"100%"}
          height={"100%"}
          className="sm:w-[64rem] w-full"
          src="./Hotel-Showcase.webp"
          alt="hotel page design full page image"
        ></img>
        </Suspense>
      </main>
        <Link smooth to={"#top"} aria-label="Go back to top" className="w-full flex justify-end max-container">
          <svg
            width="48px"
            height="48px"
            className=" z-50 bottom-0 right-10 animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <g id="Arrow / Arrow_Circle_Up">
                <path
                  id="Vector"
                  d="M15 11L12 8M12 8L9 11M12 8V16M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
        </Link>
      <Footer />
    </article>
  );
}
export default Showcase;
