import Home from "./sections/Home";
import { lazy, memo } from "react";
const Work = lazy(() => import("./sections/Work"));

const Landing = memo(function Landing() {
  return (
    <>
      <Home />
      <Work />
    </>
  );
});

export default Landing;
