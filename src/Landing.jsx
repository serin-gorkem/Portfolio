import Home from "./sections/Home";
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
  return (
    <>
      <Home />
      <div className="flex w-full justify-center">
        <ul className=" sm:my-36 flex w-24 justify-evenly self-center sm:w-32">
          <li className="aspect-square w-3 rounded-full bg-secondary sm:w-5"></li>
          <li className="aspect-square w-3 rounded-full bg-primary sm:w-5"></li>
          <li className="aspect-square w-3 rounded-full bg-primary sm:w-5"></li>
        </ul>
      </div>
      <Work />
      <div className="flex w-full justify-center">
        <ul className=" sm:my-36 flex w-24 justify-evenly self-center sm:w-32">
          <li className="aspect-square w-3 rounded-full bg-secondary sm:w-5"></li>
          <li className="aspect-square w-3 rounded-full bg-primary sm:w-5"></li>
          <li className="aspect-square w-3 rounded-full bg-primary sm:w-5"></li>
        </ul>
      </div>
      <WhatIDo />
      <div className="flex w-full justify-center">
        <ul className=" sm:my-36 flex w-24 justify-evenly self-center sm:w-32">
          <li className="aspect-square w-3 rounded-full bg-secondary sm:w-5"></li>
          <li className="aspect-square w-3 rounded-full bg-primary sm:w-5"></li>
          <li className="aspect-square w-3 rounded-full bg-primary sm:w-5"></li>
        </ul>
      </div>
      <Footer />
    </>
  );
});

export default Landing;
