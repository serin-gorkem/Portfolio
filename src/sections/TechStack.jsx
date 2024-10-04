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
      text: "HTML",
      alt:"Html logo"
    },
    {
      src: "./svg/css-min.svg",
      text: "CSS",
      alt: "CSS logo",
    },
    {
      src: "./svg/js-min.svg",
      text: "JS",
      alt: "JS logo",
    },
    {
      src: "./svg/jquery-min.svg",
      text: "JQUERY",
      alt: "JQUERY logo",
    },
    {
      src: "./svg/sass-min.svg",
      text: "SASS",
      alt: "SASS logo",
    },
    {
      src: "./svg/tailwind-min.svg",
      text: "TAILWIND",
      alt: "TAILWIND logo",
    },
    {
      src: "./svg/reactjs-min.svg",
      text: "REACTJS",
      alt: "REACTJS logo",
    },
    {
      src: "./svg/figma-min.svg",
      text: "FIGMA",
      alt: "FIGMA logo",
    },
  ];
  const backend = [
    {
      src: "./svg/ejs-min.svg",
      text: "EJS",
      alt: "EJS logo",
    },
    {
      src: "./svg/express-min.svg",
      text: "Express",
      alt: "Express logo",
    },
    {
      src: "./svg/git-min.svg",
      text: "GIT",
      alt: "GIT logo",
    },
    {
      src: "./svg/node-min.svg",
      text: "NODEJS",
      alt: "NODEJS logo",
    },
    {
      src: "./svg/pgsql-min.svg",
      text: "PostgreSQL",
      alt: "PostgreSQL logo",
    },
    {
      src: "./svg/api-min.svg",
      text: "API",
      alt: "API logo",
    },
    {
      src: "./svg/axios-min.svg",
      text: "AXIOS",
      alt: "AXIOS logo",
    },
  ];
  return isFrontend
    ? frontend.map(({ src, text,alt }) => (
        <li key={text} className="flex group hover:-translate-y-1/2transition-transform  transition-all duration-500 hover:-translate-y-3 flex-col items-center justify-center">
          <img
            src={src}
            alt={alt}
          />
          <p className="group-hover:opacity-100 transition-opacity opacity-0">{text}</p>
        </li>
      ))
    : backend.map(({ src, text,alt }) => (
        <li key={text} className="flex group hover:-translate-y-1/2transition-transform  transition-all duration-500 hover:-translate-y-3 flex-col items-center justify-center">
          <img src={src} alt={alt} />
          <p className="group-hover:opacity-100 transition-opacity opacity-0">{text}</p>
        </li>
      ));
}
