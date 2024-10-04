import PageDivider from "../components/PageDivider";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

function TechStack() {
  return (
    <article id="tech" className="m-2 pb-8 xl:m-4 landscape:max-xl:h-fit">
      <PageDivider title="Tech" titleHighlight="stack" page="02" />
      <section className="max-container my-8 flex flex-col justify-between gap-16 px-4 text-text-white sm:px-8 xl:flex-row xl:items-center xl:px-[6rem]">
        <div>
          <h1 data-aos="fade-up" className="font-title text-2xl">
            Frontend & Design
          </h1>
          <ul data-aos="fade-up" className="flex flex-wrap gap-4 pt-6">
            {<TechList isFrontend={true} />}
          </ul>
        </div>
        <div>
          <h1 data-aos="fade-up" className="font-title text-2xl">
            Backend && Version Control && Databases
          </h1>
          <ul data-aos="fade-up" className="flex flex-wrap gap-4 pt-6">
            {<TechList isFrontend={false} />}
          </ul>
        </div>
      </section>
    </article>
  );
}
export default TechStack;

function TechList({ isFrontend }) {
  const frontend = [
    {
      src: "./svg/html-min.svg",
      alt: "HTML",
    },
    {
      src: "./svg/css-min.svg",
      alt: "CSS",
    },
    {
      src: "./svg/js-min.svg",
      alt: "JS",
    },
    {
      src: "./svg/jquery-min.svg",
      alt: "JQUERY",
    },
    {
      src: "./svg/sass-min.svg",
      alt: "SASS",
    },
    {
      src: "./svg/tailwind-min.svg",
      alt: "TAILWIND",
    },
    {
      src: "./svg/reactjs-min.svg",
      alt: "REACTJS",
    },
    {
      src: "./svg/figma-min.svg",
      alt: "FIGMA",
    },
  ];
  const backend = [
    {
      src: "./svg/ejs-min.svg",
      alt: "EJS",
    },
    {
      src: "./svg/express-min.svg",
      alt: "Express",
    },
    {
      src: "./svg/git-min.svg",
      alt: "GIT",
    },
    {
      src: "./svg/node-min.svg",
      alt: "NODEJS",
    },
    {
      src: "./svg/pgsql-min.svg",
      alt: "PosgreSQL",
    },
    {
      src: "./svg/api-min.svg",
      alt: "API",
    },
    {
      src: "./svg/axios-min.svg",
      alt: "AXIOS",
    },
  ];
  return isFrontend
    ? frontend.map(({ src, alt }) => (
        <li key={alt} className="flex group hover:-translate-y-1/2transition-transform  transition-all duration-500 hover:-translate-y-3 flex-col items-center justify-center">
          <img
            src={src}
            alt={alt}
          />
          <p className="group-hover:opacity-100 transition-opacity opacity-0">{alt}</p>
        </li>
      ))
    : backend.map(({ src, alt }) => (
        <li key={alt} className="flex group hover:-translate-y-1/2transition-transform  transition-all duration-500 hover:-translate-y-3 flex-col items-center justify-center">
          <img src={src} alt={alt} />
          <p className="group-hover:opacity-100 transition-opacity opacity-0">{alt}</p>
        </li>
      ));
}
