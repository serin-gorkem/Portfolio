import Navbar from "../components/Navbar";
import Highlight from "../components/Highlight";

function Home() {
  return (
    <article
      id="home"
      className="max-container relative m-2 sm:h-[calc(100vh-4rem)] h-[calc(100vh-1rem)] bg-primary sm:m-8"
    >
      {/* h-[calc(100vh-2rem)] 2rem = 32px witch is the length of margin top + bottom. Whole calculation to keep box centered. */}
      <Navbar isFooter={false} />
      {/* h-[calc(100vh-10rem)] to make it more centered.*/}
      <main className="-z-10 flex h-[calc(100vh-10rem)] flex-col justify-center p-4 sm:h-[calc(100vh-14rem)] sm:px-8 xl:px-[10rem]">
        <h1 className="font-playfair text-3xl font-extrabold leading-tight sm:leading-tight 3xl:leading-tight tracking-tighter sm:text-[3rem] 3xl:text-[5rem]">
          Hi, I&#39;m Gorkem,
        </h1>
        {/* Highlight is a component which adds custom highlights to selected texts. */}
        {
          <Highlight
            element={
              <p className="font-playfair text-3xl font-extrabold leading-tight sm:leading-tight 3xl:leading-tight tracking-tighter sm:text-[3rem] 3xl:text-[5rem]">
                Web Developer,
              </p>
            }
          />
        }
        {
          <Highlight
            element={
              <p className="font-playfair text-3xl font-extrabold leading-tight sm:leading-tight 3xl:leading-tight tracking-tighter sm:text-[3rem] 3xl:text-[5rem]">
                Web Designer,
              </p>
            }
          />
        }

        {/* This two is wrapped with a div because I wanted them to be one line. */}
        <div className="flex gap-1 sm:gap-2">
          <h1 className="font-playfair text-3xl font-extrabold leading-tight sm:leading-tight 3xl:leading-tight tracking-tighter sm:text-[3rem] 3xl:text-[5rem]">
            and
          </h1>
          {
            <Highlight
              element={
                <p className="font-playfair text-3xl font-extrabold leading-tight sm:leading-tight 3xl:leading-tight tracking-tighter sm:text-[3rem] 3xl:text-[5rem]">
                  Webflow Developer,
                </p>
              }
            />
          }
        </div>
        <h2 className="py-8 font-lato text-[0.875rem] font-light leading-[150%] tracking-[2%] text-black opacity-70 sm:w-[40rem] sm:text-xl sm:leading-[150%] 3xl:w-[56.25rem] 3xl:text-2xl">
          I design and build beautiful websites for businesses around the globe.
          If you need a modern and powerful website, send me an email. If we are
          a good fit, I will give you a time and cost estimate.
        </h2>
        <div className="relative h-[2.75rem] w-[8.625rem] border-2 border-secondary sm:h-[3.75rem] sm:w-[10.625rem]">
          {/* CTA Button with the animation logic of moving it on the x and y with transition */}
          <button className="h-[2.75rem] w-[8.625rem] -translate-x-2 -translate-y-2 bg-secondary font-lato text-xs text-white transition-all duration-500 hover:translate-x-0 hover:translate-y-0 sm:h-[3.75rem] sm:w-[10.625rem] sm:text-base">
            see my work
          </button>
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
      <div className="pointer-events-none relative bottom-32 hidden justify-end px-4 pt-6 sm:flex sm:px-8 sm:py-12 xl:px-[10rem]">
        <div className="-bottom-10 flex w-16 items-start justify-start gap-10 overflow-hidden">
          <div className="h-40 w-0.5 animate-scroll-arrow bg-secondary sm:block"></div>
          <p className="absolute top-[4.3rem] rotate-90 font-lato font-medium">
            SCROLL
          </p>
        </div>
      </div>
    </article>
  );
}
export default Home;
