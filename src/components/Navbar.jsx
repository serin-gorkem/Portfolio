import { HashLink as Link } from "react-router-hash-link";
import Highlight from "./Highlight";
import PropTypes from "prop-types";

function Navbar({ isFooter }) {
  /* To open and close menu with toggle hidden attribute. */
  function openMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("-translate-y-20");
    menu.classList.toggle("opacity-0");
    menu.classList.toggle("pointer-events-none");
    document.querySelector(".menu-toggle").classList.toggle("hidden");
  }

  return (
    <>
    {/* Since I want two types of navigation bar, instead of codding it from scratch, I used a logic to show me a footer navbar if the props isFooter true, and home navbar if false. */}
      {isFooter ? (
        <nav className="flex items-center justify-between pt-6">
          <Link smooth to="/#home">
            <div className="cursor-pointer font-logo text-xl font-bold tracking-normal sm:text-2xl 3xl:text-4xl">
              Gorkem.
            </div>
          </Link>
          <div className="flex items-center gap-2 sm:gap-8">
            {
              <Highlight
                element={
                  <Link
                    smooth
                    to="/#home"
                    aria-label="Scroll to the work section."
                  >
                    <div className="cursor-pointer sm:block sm:text-2xl 3xl:text-3xl">
                      home
                    </div>
                  </Link>
                }
              />
            }
            {
              <Highlight
                element={
                  <Link
                    smooth
                    to="/#work"
                    aria-label="Scroll to the work section."
                  >
                    <div className="cursor-pointer sm:block sm:text-2xl 3xl:text-3xl">
                      my work
                    </div>
                  </Link>
                }
              />
            }
            {
              <Highlight
                element={
                  <Link
                    smooth
                    to="/#whatIDo"
                    aria-label="Scroll to the work section at the end of the page."
                  >
                    <div className="cursor-pointer sm:block sm:text-2xl 3xl:text-3xl">
                      what I do
                    </div>
                  </Link>
                }
              />
            }
          </div>
          {/* source:"https://www.svgrepo.com/svg/511004/hamburger-md"*/}
        </nav>
      ) : (
        <>
          <nav className="flex items-center max-container justify-between px-4 pt-6 sm:px-8 sm:py-12 xl:px-[6rem]">
            <Link smooth to="/#home">
              <div className="cursor-pointer font-logo text-xl font-semibold tracking-tight sm:text-2xl 3xl:text-4xl">
                Gorkem.
              </div>
            </Link>
            <div className="flex items-center font-playfair font-bold gap-8">
              {
                <Highlight
                  element={
                    <Link
                      smooth
                      to="/#work"
                      aria-label="Scroll to the work section."
                    >
                      <div className="hidden cursor-pointer sm:block text-xl 3xl:text-2xl">
                        my work
                      </div>
                    </Link>
                  }
                />
              }
              {
                <Highlight
                  element={
                    <Link
                      smooth
                      to="/#footer"
                      aria-label="Scroll to the work section at the end of the page."
                    >
                      <div className="hidden cursor-pointer sm:block text-xl 3xl:text-2xl">
                        get in touch
                      </div>
                    </Link>
                  }
                />
              }
            </div>
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
                <g
                  id="Page-1"
                  strokeWidth="2.112"
                  fill="none"
                  fillRule="evenodd"
                >
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
          <div className="menu pointer-events-none absolute flex z-20 h-[6.25rem] w-[calc(100vw-1rem)] -translate-y-20 flex-col justify-center gap-3 bg-[#A4B9A0] p-4 font-playfair font-bold tracking-tight opacity-0 transition-all duration-500 sm:hidden">
            <Link smooth to="/#work" aria-label="Scroll to the work section.">
              <div className="cursor-pointer hover:text-primary">my work</div>
            </Link>
            <Link
              smooth
              to="/#footer"
              aria-label="Scroll to the work section at the end of the page."
            >
              <div className="cursor-pointer hover:text-primary">
                get in touch
              </div>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;

Navbar.propTypes = {
  isFooter: PropTypes.bool,
};