import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function ImportAos() {
  return useEffect(() => {
    AOS.init();
  }, []);
}

export default ImportAos;
