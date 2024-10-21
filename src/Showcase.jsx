import { lazy, memo, Suspense } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const ImportAos = lazy(() => import("./components/ImportAos"));

/**
 * @description The Showcase component displays a project's details and image.
 * @param {Object} props - The props object contains the project data.
 */

const Showcase = memo(function Showcase() {
  const location = useLocation();
  const { project } = location ?  location.state : null;
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
    /**
   * @description The goBackTop function scrolls the window to the top.
   */
  function goBackTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ImportAos/>
     {project ? (
      <article
        id="showcase"
        className="m-2 h-[calc(100vh-1rem)] bg-secondary text-text-white xl:m-4 xl:h-[calc(100vh-2rem)] landscape:max-xl:h-[150vh]"
      >
        <Navbar isFooter={false} />
        <main className="relative my-8 flex flex-col items-center justify-center px-2">
          {/* Project type */}
          <h1
            data-aos="fade-up"
            className="mb-2  font-lato text-xs tracking-[0.2rem] opacity-60 sm:px-1 sm:text-base"
          >
            PROJECT SHOWCASE
          </h1>
          {/* Project title  */}
          <p
            data-aos="fade-up"
            className=" pb-5 text-center font-title text-[2rem] font-extrabold leading-tight tracking-tighter sm:text-[4rem] sm:leading-tight xl:w-[46rem]"
          >
            {project.title}
          </p>
          <p
            data-aos="fade-up"
            className=" text-center font-lato font-light leading-[175%] tracking-normal sm:text-[1.125rem] sm:leading-[175%] xl:w-[46rem]"
          >
            {project.showcaseDescription}
          </p>
          <div
            data-aos="fade-up"
            className="relative h-[3.5rem] w-[9.625rem] my-4 border-2 border-primary hover:border-highlight sm:h-[3.75rem] sm:w-[10.625rem]"
          >
            {/* CTA Button with the animation logic of moving it on the x and y with transition */}
            <button className="h-[3.5rem] w-[9.625rem] -translate-x-4 -translate-y-2 bg-primary font-lato text-sm font-bold text-white transition-all duration-500 hover:-translate-x-[0.1rem] hover:-translate-y-[0.13rem] hover:bg-highlight sm:h-[3.75rem] sm:w-[10.625rem] sm:text-base">
              <a href={project.link} aria-label="visit source" className="p-4">
                {project.buttonText}
              </a>
            </button>
          </div>
          <Suspense fallback={<h1>Loading...</h1>}>
            <img
              data-aos="fade-up"
              decoding="async"
              rel="preload"
              width={"100%"}
              height={"100%"}
              className="w-full  sm:w-[64rem]"
              src={project.showcaseImage}
              alt={project.alt}
            ></img>
          </Suspense>
        </main>
        <div
          onClick={goBackTop}
          aria-label="Go back to top"
          className="max-container flex w-full cursor-pointer justify-end"
        >
          <svg
            width="48px"
            height="48px"
            className="bottom-0 right-10 z-50 animate-bounce"
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
                  stroke="#FF6500"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
        </div>
        <Footer />
      </article>
     ) : (<Navigate to="/"/>)}
    </Suspense>
  );
});
export default Showcase;
