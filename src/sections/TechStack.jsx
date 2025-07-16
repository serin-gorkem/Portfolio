import { lazy } from "react";
import PageDivider from "../components/PageDivider";
const ImportAos = lazy(() => import("../components/ImportAos"));

function TechStack() {
  return (
    <article id="tech" className="m-2 pb-8 xl:m-4 landscape:max-xl:h-fit">
      {/* Import AOS for animations */}
      <ImportAos />
      <PageDivider title="Tech" titleHighlight="stack" page="02" />
      <section className="max-container my-8 flex flex-col justify-between gap-16 px-4 text-text-white sm:px-8 xl:flex-row xl:items-center xl:px-[6rem]">
        <div>
          <h1 data-aos="fade-up" className="font-title text-2xl">
            Frontend & Design
          </h1>
          <ul data-aos="fade-up" className="flex flex-wrap gap-4 pt-6">
            {<TechList isFrontend={true} />}
          </ul>
          <p
            data-aos="fade-up"
            className="text-xs font-light opacity-70 sm:text-sm"
          >
            Click or hover icons for the names.
          </p>
        </div>
        <div>
          <h1 data-aos="fade-up" className="font-title text-2xl">
            Backend && Version Control && Databases
          </h1>
          <ul data-aos="fade-up" className="flex flex-wrap gap-4 pt-6">
            {<TechList isFrontend={false} />}
          </ul>
          <p
            data-aos="fade-up"
            className="text-xs font-light opacity-70 sm:text-sm"
          >
            Click or hover icons for the names.
          </p>
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
      alt: "Html logo",
    },
    {
      src: "./svg/css-min.svg",
      text: "CSS",
      alt: "CSS logo",
    },
    {
      src: "./svg/js-min.svg",
      text: "JavaScript",
      alt: "JS logo",
    },
    {
      src: "./svg/jquery-min.svg",
      text: "JQuery",
      alt: "JQUERY logo",
    },
    {
      src: "./svg/sass-min.svg",
      text: "SASS",
      alt: "SASS logo",
    },
    {
      src: "./svg/tailwind-min.svg",
      text: "Tailwind",
      alt: "TAILWIND logo",
    },
    {
      src: "./svg/react-min.svg",
      text: "React",
      alt: "REACT logo",
    },
    {
      src: "./svg/figma-min.svg",
      text: "Figma",
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
      text: "Git",
      alt: "GIT logo",
    },
    {
      src: "./svg/node-min.svg",
      text: "NodeJS",
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
      text: "Axios",
      alt: "AXIOS logo",
    },
    {
      src: "./svg/nextjs-fill-svgrepo-com.svg",
      text: "Next.js",
      alt: "Next.js logo",
    },
    {
      src: "./svg/typescript-official-svgrepo.svg",
      text: "Typescript",
      alt: "Typescript logo",
    },
  ];
  return isFrontend
    ? frontend.map(({ src, text, alt }) => (
        <li
          key={text}
          className="hover:-translate-y-1/2transition-transform group flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-3"
        >
          <img src={src} alt={alt} />
          <p className="opacity-0 transition-opacity group-hover:opacity-100">
            {text}
          </p>
        </li>
      ))
    : backend.map(({ src, text, alt }) => (
        <li
          key={text}
          className="hover:-translate-y-1/2transition-transform group flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-3"
        >
          <img src={src} alt={alt} />
          <p className="opacity-0 transition-opacity group-hover:opacity-100">
            {text}
          </p>
        </li>
      ));
}
