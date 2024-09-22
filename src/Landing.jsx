function Landing() {
  /* To open and close menu with toggle hidden attribute. */
  function openMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("-translate-y-20");
    menu.classList.toggle("opacity-0");
    menu.classList.toggle("pointer-events-none");
    document.querySelector(".menu-toggle").classList.toggle("hidden");
  }
  /*         
        Text:
        "playfair":['Playfair Display', 'serif'],
        "lato":['Lato', 'sans-serif'],
        "logo":['Azeret Mono', 'Lato', 'sans-serif'],
        Colors:
        "primary":"#CCE5D7",
        "secondary":"#3C4510",
        "highlight":"#E3FFEF" 
  */


  /* This function is used to highlight the hovered element with a gradient background. */
  function highlight(element) {
    return (
      <div className="group relative z-10 mr-2 w-fit">
        <div className="absolute bottom-0 -z-10 h-[36%] w-full bg-highlight transition-all duration-500 sm:group-hover:h-[100%]"></div>
        {element}
      </div>
    );
  }

  return (
    <section className="relative m-4 h-[calc(100vh-2rem)] bg-primary">
      {/* h-[calc(100vh-2rem)] 2rem = 32px witch is the length of margin top + bottom. Whole calculation to keep box centered. */}
      <nav className="flex items-center justify-between px-4 pt-6 sm:px-8 sm:py-12 xl:px-[10rem]">
        <h1 className="cursor-pointer font-logo text-xl font-semibold tracking-tight sm:text-2xl 3xl:text-4xl">
          Gorkem.
        </h1>
        <ul className="flex items-center gap-8">
          {highlight(
            <p className="hidden cursor-pointer sm:block sm:text-xl 3xl:text-2xl">
              my work
            </p>,
          )}
          {highlight(
            <p className="hidden cursor-pointer sm:block sm:text-xl 3xl:text-2xl">
              get in touch
            </p>,
          )}
        </ul>
        {/* source:"https://www.svgrepo.com/svg/511004/hamburger-md"*/}
        <svg
          className="h-14 w-14 cursor-pointer sm:hidden"
          onClick={openMenu}
          viewBox="-2.16 -2.16 28.32 28.32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>Menu</title>{" "}
            <g id="Page-1" strokeWidth="2.112" fill="none" fillRule="evenodd">
              {" "}
              <g id="Menu">
                {" "}
                <rect
                  id="Rectangle"
                  fillRule="nonzero"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  {" "}
                </rect>{" "}
                <line
                  x1="5"
                  y1="7"
                  x2="19"
                  y2="7"
                  id="Path"
                  stroke="#3C4510"
                  strokeWidth="2.112"
                  strokeLinecap="round"
                >
                  {" "}
                </line>{" "}
                <line
                  x1="5"
                  y1="17"
                  x2="19"
                  y2="17"
                  id="Path"
                  stroke="#3C4510"
                  strokeWidth="2.112"
                  strokeLinecap="round"
                >
                  {" "}
                </line>{" "}
                <line
                  x1="5"
                  y1="12"
                  x2="19"
                  y2="12"
                  id="Path"
                  stroke="#3C4510"
                  strokeWidth="2.112"
                  strokeLinecap="round"
                ></line>
              </g>
            </g>
          </g>
        </svg>
      </nav>
      {/* Right now I use hidden and block with onClick logic to apply functionality. In future updates this will change to apply animation properly. */}
      <div className="menu absolute z-20 flex -translate-y-20 opacity-0 transition-all duration-500 pointer-events-none  h-[6.25rem] w-full flex-col justify-center gap-3 bg-[#A4B9A0] p-4 font-playfair font-bold tracking-tight sm:hidden">
        <p className="cursor-pointer hover:text-primary">my work</p>
        <p className="cursor-pointer hover:text-primary">get in touch</p>
      </div>
      {/* h-[calc(100vh-10rem)] to make it more centered. The logic could be improved in the future updates. */}
      <main className="-z-10 flex h-[calc(100vh-10rem)] flex-col justify-center p-4 sm:h-[calc(100vh-12rem)] sm:px-8 xl:px-[10rem]">
        <h1 className="font-playfair text-2xl font-extrabold leading-tight tracking-tight sm:text-[3rem] 3xl:text-[6rem]">
          Hi, I&#39;m Gorkem,
        </h1>
        {highlight(
          <p className="font-playfair text-2xl font-extrabold leading-tight tracking-tight sm:text-[3rem] 3xl:text-[6rem]">
            Web Developer,
          </p>,
        )}
        {highlight(
          <p className="font-playfair text-2xl font-extrabold leading-tight tracking-tight sm:text-[3rem] 3xl:text-[6rem]">
            Web Designer,
          </p>,
        )}
        <div className="flex gap-1 sm:gap-2">
          <h1 className="font-playfair text-2xl font-extrabold leading-tight tracking-tight sm:text-[3rem] 3xl:text-[6rem]">
            and
          </h1>
          {highlight(
            <p className="font-playfair text-2xl font-extrabold leading-tight tracking-tight sm:text-[3rem] 3xl:text-[6rem]">
              Webflow Developer,
            </p>,
          )}
        </div>
        <h2 className="py-8 font-lato text-[0.875rem] font-light leading-[150%] tracking-[2%] text-secondary opacity-70 sm:w-[40rem] sm:text-xl sm:leading-[150%] 3xl:w-[56.25rem] 3xl:text-2xl">
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
      {/* The SCROLL text with the animation */}
      <div className="pointer-events-none hidden relative bottom-32 sm:flex justify-end px-4 pt-6 sm:px-8 sm:py-12 xl:px-[10rem]">
        <div className="-bottom-10 flex w-16 items-start justify-start gap-10 overflow-hidden">
          <div className="animate-scroll-arrow  h-40 w-0.5 bg-secondary sm:block"></div>
          <p className="absolute top-[4.3rem] rotate-90 font-lato font-medium">
            SCROLL
          </p>
        </div>
      </div>
    </section>
  );
}

export default Landing;