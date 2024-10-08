import { lazy } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Highlight = lazy(() => import("./Highlight"));
const PropTypes = lazy(() => import("prop-types"));

/**
 * @description The Navbar component helps user to navigate inside the page.
 * @param {Boolean} isFooter - A boolean prop that determines whether the navbar is a footer navbar or a home navbar.
 */
function Navbar({ isFooter }) {
  /* Open and close menu with toggle hidden attribute */
  const openMenu = () => {
    const menu = document.querySelector(".menu");
    menu?.classList.toggle("translate-y-6");
    menu?.classList.toggle("sm:-translate-y-5");
    menu?.classList.toggle("opacity-90");
    menu?.classList.toggle("pointer-events-none");
    document.querySelector(".menu-toggle")?.classList.toggle("hidden");
  };

  const goBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    openMenu();
  };

  const navLinks = [
    { to: "/#work", label: "my work" },
    { to: "/#tech", label: "tech stack" },
    { to: "/#about", label: "about me" },
  ];

  const renderNavLinks = (isFooter) =>
    navLinks.map((link) => (
      <Highlight
        key={link.to}
        element={
          <Link
            smooth
            to={link.to}
            className= {`cursor-pointer ${isFooter ? "text-sm sm:text-2xl 3xl:text-3xl" : "hidden text-xl xl:block 3xl:text-2xl"}`}
            aria-label={`Scroll to the ${link.label} section.`}
          >
              {link.label}
          </Link>
        }
      />
    ));

  return (
    <>
      {isFooter ? (
        <nav className="flex items-center justify-between pt-6">
          <Link smooth to="/#home">
            <img
              className="w-24 cursor-pointer sm:w-36"
              width="100"
              height="100"
              src="img/Logo.webp"
              alt="Logo"
              aria-label="My own logo."
            />
          </Link>
          <div className="flex gap-2 sm:items-center sm:gap-8">
            {renderNavLinks(isFooter)}
          </div>
        </nav>
      ) : (
        <>
          <nav className="max-container flex items-center justify-between px-4 pt-6 text-text-white sm:px-8 sm:py-12 xl:px-[6rem]">
            <Link smooth to="/#home">
              <img
                className="w-24 cursor-pointer sm:w-36 3xl:w-52"
                src="img/Logo.webp"
                width="100"
                height="100"
                alt="Logo"
                aria-label="My own logo."
              />
            </Link>
            <div className="flex items-center gap-8 font-title font-medium">
              {renderNavLinks(false)}
              <Highlight
                element={
                  <button
                    onClick={goBottom}
                    aria-label="Scroll to the footer section at the end of the page."
                  >
                    <div className="hidden cursor-pointer text-xl xl:block 3xl:text-2xl">
                      get in touch
                    </div>
                  </button>
                }
              />
            </div>
            <div
              className="group relative z-10 flex h-8 cursor-pointer flex-col xl:hidden"
              onClick={openMenu}
            >
              <hr className="h-full w-9 border-t-4 border-highlight" />
              <hr className="h-full w-9 border-t-4 border-highlight" />
              <hr className="h-full w-9 border-t-4 border-highlight" />
            </div>
          </nav>
          <div className="menu pointer-events-none absolute z-20 flex w-[calc(100vw-1rem)]
          flex-col justify-center gap-6 bg-primary px-4 py-8 sm:px-8 font-title font-bold tracking-tight text-text-white opacity-0 transition-all duration-500 xl:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                smooth
                onClick={openMenu}
                to={link.to}
                className="hover:text-highlight"
                aria-label={`Scroll to the ${link.label} section.`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={goBottom}
              aria-label="Scroll to the footer section at the end of the page."
            >
              <div className="cursor-pointer text-left hover:text-highlight">
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
