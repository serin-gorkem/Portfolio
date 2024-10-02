import { lazy } from "react";
import { HashLink as Link } from "react-router-hash-link";
const Highlight = lazy(() => import("./Highlight"));
const PropTypes = lazy(() => import("prop-types"));
/**
 * @description The Navbar component helps user to navigate inside the page.
 * @param {Boolean} isFooter - A boolean prop that determines whether the navbar is a footer navbar or a home navbar.
 */
function Navbar({ isFooter }) {
  /* To open and close menu with toggle hidden attribute. */
  function openMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("-translate-y-20");
    menu.classList.toggle("opacity-0");
    menu.classList.toggle("pointer-events-none");
    document.querySelector(".menu-toggle").classList.toggle("hidden");
  }
  function goBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  return (
    <>
      {/* Since I want two types of navigation bar, instead of codding it from scratch, I used a logic to show me a footer navbar if the props isFooter true, and home navbar if false. */}
      {isFooter ? (
        <nav className="flex items-center justify-between pt-6">
          <Link smooth to="/#home">
            <img
              className="w-24 cursor-pointer sm:w-36"
              width="100"
              height="100"
              src="Logo.webp"
              alt="Logo"
              aria-label="My own logo."
            ></img>
          </Link>
          <div className="flex gap-2 sm:items-center sm:gap-8">
            {
              <Highlight
                element={
                  <Link
                    smooth
                    to="/#work"
                    aria-label="Scroll to the work section."
                  >
                    <div className="cursor-pointer text-sm sm:block sm:text-2xl 3xl:text-3xl">
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
                    to="/#tech"
                    aria-label="Scroll to the work section."
                  >
                    <div className="cursor-pointer text-sm sm:block sm:text-2xl 3xl:text-3xl">
                      tech stack
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
                    <div className="cursor-pointer text-sm sm:block sm:text-2xl 3xl:text-3xl">
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
          <nav className="max-container flex items-center text-text-white justify-between px-4 pt-6 sm:px-8 sm:py-12 xl:px-[6rem]">
            <Link smooth to="/#home">
              <img
                className="w-24 cursor-pointer sm:w-36 3xl:w-52"
                src="Logo.webp"
                width="100"
                height="100"
                alt="Logo"
                aria-label="My own logo."
              ></img>
            </Link>
            <div className="flex items-center gap-8 font-title font-medium">
              {
                <Highlight
                  element={
                    <Link
                      smooth
                      to="/#work"
                      aria-label="Scroll to the work section."
                    >
                      <div className="hidden cursor-pointer text-xl sm:block 3xl:text-2xl">
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
                      to="/#tech"
                      aria-label="Scroll to the work section."
                    >
                      <div className="hidden cursor-pointer text-xl sm:block 3xl:text-2xl">
                        tech stack
                      </div>
                    </Link>
                  }
                />
              }
              {
                <Highlight
                  element={
                    <button
                      onClick={goBottom}
                      aria-label="Scroll to the work section at the end of the page."
                    >
                      <div className="hidden cursor-pointer text-xl sm:block 3xl:text-2xl">
                        get in touch
                      </div>
                    </button>
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
                      stroke="#FF6500"
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
                      stroke="#FF6500"
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
                      stroke="#FF6500"
                      strokeWidth="2.112"
                      strokeLinecap="round"
                    ></line>
                  </g>
                </g>
              </g>
            </svg>
          </nav>
          <div className="menu pointer-events-none absolute z-20 flex h-[8.25rem] w-[calc(100vw-1rem)] -translate-y-20 flex-col justify-center gap-3 text-text-white bg-primary p-4 font-title font-bold tracking-tight opacity-0 transition-all duration-500 sm:hidden">
            <Link smooth to="/#work" aria-label="Scroll to the work section.">
              <div className="cursor-pointer hover:text-highlight">my work</div>
            </Link>
            <Link smooth to="/#tech" aria-label="Scroll to the work section.">
              <div className="cursor-pointer hover:text-highlight">tech stack</div>
            </Link>
            <button
              className="text-left"
              onClick={goBottom}
              aria-label="Scroll to the footer section at the end of the page."
            >
              <div className="cursor-pointer hover:text-highlight">
                get in touch
              </div>
            </button>
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