import { Suspense } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Showcase() {
    const location = useLocation();
    const {project} = location.state;

    useEffect(() => {
        window.scrollTo(0, 0);
    })
    function goBackTop(){
       window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
  return (
    <Suspense fallback={<h1>Loading...</h1>} >
    <article id="showcase" className="m-2 h-[calc(100vh-1rem)] bg-primary xl:m-4 xl:h-[calc(100vh-2rem)] landscape:max-xl:h-[150vh]">
      <Navbar isFooter={false} />
      <main  className="relative my-8 flex flex-col items-center justify-center px-2">
        {/* Project type */}
        <h1 className="mb-2 animate-fade-in font-lato text-xs tracking-[0.2rem] text-black opacity-60 sm:px-1 sm:text-base">
          PROJECT SHOWCASE 
        </h1>
        {/* Project title  */}
        <p className="pb-5 animate-fade-in text-center font-playfair text-[2rem] font-extrabold leading-tight tracking-tighter sm:text-[4rem] sm:leading-tight xl:w-[46rem]">
          {project.title} 
        </p>
        <p className="text-center animate-fade-in font-lato font-light leading-[175%] tracking-normal sm:text-[1.125rem] sm:leading-[175%] xl:w-[46rem]">
          {project.showcaseDescription}
        </p>
        <div className="relative mb-10 mt-8 h-[3.5rem] w-[9.625rem] animate-fade-in border-2 border-secondary sm:h-[3.75rem] sm:w-[10.625rem]">
          {/* CTA Button with the animation logic of moving it on the x and y with transition */}
          <button className="h-[3.5rem] w-[9.625rem] -translate-x-2 -translate-y-2 bg-secondary font-lato text-xs text-white transition-all duration-500 hover:translate-x-0 hover:translate-y-0 sm:h-[3.75rem] sm:w-[10.625rem] sm:text-base">
            <a
              href={project.link}
              aria-label="visit source"
              className="p-4"
            >
              {project.buttonText}
            </a>
          </button>
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
        <img
          decoding="async"
          rel="preload"
          width={"100%"}
          height={"100%"}
          className="sm:w-[64rem] w-full animate-fade-in"
          src={project.showcaseImage}
          alt={project.alt}
        ></img>
        </Suspense>
      </main>
        <div onClick={goBackTop} aria-label="Go back to top" className=" cursor-pointer w-full flex justify-end max-container">
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
        </div>
      <Footer />
    </article>
    </Suspense>
  );
}
export default Showcase;
