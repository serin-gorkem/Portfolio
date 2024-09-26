import Home from "./sections/Home";
import PropTypes from "prop-types";
import { Suspense } from "react";
import { useEffect } from "react";
import { lazy, memo } from "react";
const Footer = lazy(() => import("./components/Footer"));
const Work = lazy(() => import("./sections/Work"));
const WhatIDo = lazy(() => import("./sections/WhatIDo"));

const Landing = memo(function Landing() {
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
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Suspense fallback={<h1>Loading...</h1>} >
      <Home />
      <PageIndicator page={1} />
      <Work />
      <PageIndicator page={2} />
      <WhatIDo />
      <PageIndicator page={3} />
      <Footer />
    </Suspense>
  );
});
function PageIndicator({ page }) {
  const listArray = [1, 2, 3];
  return (
    <div className="flex w-full justify-center py-10 sm:py-24">
      <ul className="flex w-24 justify-evenly gap-2 self-center sm:gap-4 3xl:w-36 3xl:gap-8">
        {listArray.map((index) => (
          <li
            key={index}
            className={`aspect-square w-3.5 rounded-full bg-primary sm:w-5 3xl:w-8 ${
              index === page ? "bg-secondary" : "bg-primary"
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
}

PageIndicator.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Landing;
