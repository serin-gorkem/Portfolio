function Work() {
  return (
    <article id="work" className="max-container flex flex-col relative mx-2 my-32 sm:mx-8">
        <ul className="mb-24 flex w-24 justify-evenly self-center sm:w-32">
          <li className="aspect-square w-3 rounded-full bg-secondary sm:w-5"></li>
          <li className="aspect-square w-3 rounded-full bg-primary sm:w-5"></li>
          <li className="aspect-square w-3 rounded-full bg-primary sm:w-5"></li>
        </ul>
      {/* Outer div */}
      <section className="flex flex-col items-center justify-between xl:flex-row">
        {/* Left - Top div */}
        <section className="flex flex-col justify-between gap-6 text-secondary sm:w-11/12 sm:gap-9">
          <div>
            {/* Project type */}
            <h1 className="font-lato text-sm leading-[150%] tracking-wide text-black opacity-60 sm:text-xl">
              Web Design Work
            </h1>
            {/* Project title  */}
            <p className="font-playfair text-2xl font-extrabold leading-tight tracking-tighter sm:w-[26rem] sm:text-6xl">
              Elysium Hotel Website Design
            </p>
          </div>
          {/* Project Specs */}
          <ul className="flex flex-wrap gap-2 font-lato font-medium text-black">
            <li className="flex w-28 justify-center bg-primary py-1 text-xs sm:w-36">
              Figma
            </li>
            <li className="flex w-28 justify-center bg-primary py-1 text-xs sm:w-36">
              Website Design
            </li>
            <li className="flex w-28 justify-center bg-primary py-1 text-xs sm:w-36">
              Concept
            </li>
          </ul>
          {/* Project summary */}
          <p className="leading-2 font-lato font-light tracking-normal sm:w-[26rem] sm:text-[1.125rem]">
            This is a homepage design and build for a concept project - a chat
            application. I designed the page first then built a responsive web
            page using Webflow.
          </p>
          <div className="relative h-[2.75rem] w-[8.625rem] border-2 border-secondary sm:h-[3.75rem] sm:w-[10.625rem]">
            {/* CTA Button with the animation logic of moving it on the x and y with transition */}
            <button className="h-[2.75rem] w-[8.625rem] -translate-x-2 -translate-y-2 bg-secondary font-lato text-xs text-white transition-all duration-500 hover:translate-x-0 hover:translate-y-0 sm:h-[3.75rem] sm:w-[10.625rem] sm:text-base">
              see this work
            </button>
          </div>
        </section>
        {/* Right - Bottom div */}
        <section className="relative my-6 flex aspect-square h-full w-full items-center justify-center bg-primary p-4 sm:my-9 xl:w-1/2">
          <img
            src="./Hotel.webp"
            decoding="async"
            rel="preload"
            width={"100%"}
            height={"100%"}
            className="w-full"
            alt="hotel design landing page"
          ></img>
          <img
            src="./dots.webp"
            decoding="async"
            rel="preload"
            width={"100%"}
            height={"100%"}
            className="absolute -bottom-6 left-0 -z-10 aspect-square w-32 sm:-left-6"
            alt="decoration dots 10 by 10"
          ></img>
        </section>
      </section>
      {/* */}
    </article>
  );
}

export default Work;
