import Navbar from "../components/Navbar";
import Highlight from "../components/Highlight";
import { HashLink as Link } from "react-router-hash-link";

function Home() {
  return (
    <>
      {/* h-[calc(100vh-xrem)] xrem = 16 * x px which is the length of margin top + bottom to keep box centered. */}
      <article
        id="home"
        className="m-2 h-[calc(100vh-1rem)] bg-primary xl:m-4 xl:h-[calc(100vh-2rem)]"
      >
        <Navbar isFooter={false} />
        <main className="max-container -z-10 flex h-[calc(100vh-10rem)] flex-col justify-center p-4 sm:h-[calc(100vh-14rem)] sm:px-8 xl:px-[6rem]">
          <h1 className="font-playfair animate-fade-in text-3xl font-extrabold leading-tight tracking-tighter sm:text-[4rem] sm:leading-tight 3xl:text-[6rem] 3xl:leading-tight">
            Hi, I&#39;m Gorkem,
          </h1>
          {/* Highlight is a component which adds custom highlights to selected texts. */}
          <div className="animate-fade-in">
          {
            <Highlight
              element={
                <p className="font-playfair text-3xl font-extrabold leading-tight tracking-tighter sm:text-[4rem] sm:leading-tight 3xl:text-[6rem] 3xl:leading-tight">
                  Web Developer,
                </p>
              }
            />
          }
          </div>
          <div className="animate-fade-in">
          {
            <Highlight
              element={
                <p className="font-playfair text-3xl font-extrabold leading-tight tracking-tighter sm:text-[4rem] sm:leading-tight 3xl:text-[6rem] 3xl:leading-tight">
                  Web Designer,
                </p>
              }
            />
          }
          </div>

          {/* This two is wrapped with a div because I wanted them to be one line. */}
          <div className="flex gap-1 animate-fade-in sm:gap-2">
            <h1 className="font-playfair text-3xl font-extrabold leading-tight tracking-tighter sm:text-[4rem] sm:leading-tight 3xl:text-[6rem] 3xl:leading-tight">
              and
            </h1>
            {
              <Highlight
                element={
                  <p className="font-playfair text-3xl font-extrabold leading-tight tracking-tighter sm:text-[4rem] sm:leading-tight 3xl:text-[6rem] 3xl:leading-tight">
                    Webflow Developer,
                  </p>
                }
              />
            }
          </div>
          <h2 className="py-8 font-lato animate-fade-in text-[0.875rem] font-light leading-[150%] tracking-[2%] text-black opacity-70 sm:w-[40rem] sm:text-xl sm:leading-[150%] 3xl:w-[56.25rem] 3xl:text-2xl">
            I design and build beautiful websites for businesses around the
            globe. If you need a modern and powerful website, send me an email.
            If we are a good fit, I will give you a time and cost estimate.
          </h2>
          <div className="relative animate-fade-in h-[2.75rem] w-[8.625rem] border-2 border-secondary sm:h-[3.75rem] sm:w-[10.625rem]">
            {/* CTA Button with the animation logic of moving it on the x and y with transition */}
            <Link smooth to="#work">
              <button className="h-[2.75rem] w-[8.625rem] -translate-x-2 -translate-y-2 bg-secondary font-lato text-xs text-white transition-all duration-500 hover:translate-x-0 hover:translate-y-0 sm:h-[3.75rem] sm:w-[10.625rem] sm:text-base">
                see my work
              </button>
            </Link>
          </div>
        </main>
        {/* The SCROLL text with the animation
        keyframes:  
        "scroll": {
          "0%": { transform: "translate3d(0px,-100%,0px)" },
          "10%": { transform: "translate3d(0px,-100%,0px)" },
          "90%": { transform: "translate3d(0px,100%,0px)" },
          "100%": { transform: "translate3d(0px,100%,0px)" },
        }
        animation: {
        'scroll-arrow': 'scroll 2s infinite',
      }
      The second div has overflow: hidden to make it look like it disappears.
       */}
        <div className="max-container pointer-events-none relative bottom-12 z-10 hidden justify-end sm:flex sm:px-8 xl:px-[6rem]">
          <div className="relative w-12 overflow-hidden">
            <div className="h-40 w-0.5 animate-scroll-arrow bg-secondary sm:block"></div>
            <p className="absolute -right-5 top-[1.3rem] rotate-90 font-lato font-medium">
              SCROLL
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
export default Home;
