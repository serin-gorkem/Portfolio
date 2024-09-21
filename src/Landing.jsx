function Landing() {
          
  /* To open and close menu with toggle hidden attribute. */
  function openMenu() {
    document.querySelector(".menu").classList.toggle("hidden");
    document.querySelector(".menu-toggle").classList.toggle("hidden");
  }

  return (
    <section className="relative m-4 h-[calc(100vh-2rem)] bg-primary">
      {/* h-[calc(100vh-2rem)] 2rem = 32px witch is the length of margin top + bottom. Whole calculation to keep box centered. */}
      <nav className="flex items-center justify-between px-4 pt-6 sm:px-8 sm:py-12 xl:px-[10rem]">
        <h1 className="cursor-pointer font-logo text-xl font-semibold tracking-tight sm:text-2xl 3xl:text-4xl">
          Gorkem.
        </h1>
        <ul className="flex items-center gap-8">
          <li className="hidden cursor-pointer bg-gradient-to-t from-highlight to-transparent sm:block sm:text-xl 3xl:text-2xl">
            my work
          </li>
          <li className="hidden cursor-pointer sm:block sm:text-xl 3xl:text-2xl">
            get in touch
          </li>
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
      <div className="menu absolute flex hidden h-[6.25rem] w-full flex-col justify-center gap-3 bg-secondary bg-opacity-15 p-4 font-playfair font-bold tracking-tight sm:hidden">
        <p className="cursor-pointer">my work</p>
        <p className="cursor-pointer">get in touch</p>
      </div>
      {/* h-[calc(100vh-9rem)] to make it more centered. The logic could be improved in the future updates. */}
      <main className="flex h-[calc(100vh-9rem)] flex-col justify-center p-4 sm:px-8 xl:px-[10rem]">
      {/* <br> to keep consistency on the visual of text. */}
        <h1 className="font-playfair text-4xl font-extrabold leading-tight tracking-tight sm:text-[3rem] 3xl:text-[6rem]">
          Hi, I&#39;m Gorkem,<br></br> Web Developer,<br></br> Web Designer
          <br></br> and Webflow Developer
        </h1>
        <h2 className="py-8 font-lato text-[0.875rem] font-light leading-[150%] tracking-[2%] text-secondary opacity-70 sm:w-[40rem] sm:text-xl sm:leading-[150%] 3xl:w-[56.25rem] 3xl:text-2xl">
          I design and build beautiful websites for businesses around the globe.
          If you need a modern and powerful website, send me an email. If we are
          a good fit, I will give you a time and cost estimate.
        </h2>
        <div className="h-[3.75rem] w-[10.625rem] border-2 border-secondary">
        {/* There will be animatons for the button with translate properties. This is the top layer and will be get down with the base layer. */ }
          <button className="h-[3.75rem] w-[10.625rem] -translate-x-2 -translate-y-2 bg-secondary font-lato text-white">
            see my work
          </button>
      {/* The SCROLL text with the animation will be placed here. */}
        </div>
      </main>
    </section>
  );
}

export default Landing;
