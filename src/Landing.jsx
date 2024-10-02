import { Suspense } from "react";
import { useEffect } from "react";
import { lazy, memo } from "react";
const TechStack = lazy(() => import("./sections/TechStack"));
const Home = lazy(() => import("./sections/Home"));
const Work = lazy(() => import("./sections/Work"));
const Footer = lazy(() => import("./components/Footer"));
const WhatIDo = lazy(() => import("./sections/WhatIDo"));

/**
 * @description The Landing component is the main page of the website, showcasing the developer's skills and services.
 */

const Landing = memo(function Landing() {
  /*         
        Text:
        "title":['title Display', 'serif'],
        "lato":['Lato', 'sans-serif'],
        Colors:
        "primary":"#0B192C",
        "secondary":"#1E3E62",
        "text-white": "#FFFFFF",
        "highlight":"#FF6500"
  */
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Suspense fallback={<h1 className="flex justify-center text-text-white items-center h-screen">Loading...</h1>} >
      <Home />
      <Work />
      <TechStack/>
      <WhatIDo />
      <Footer />
    </Suspense>
  );
});

export default Landing;
