import PageDivider from "../components/PageDivider";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

function TechStack() {
  return (
    <article id="tech" className="m-2 pb-8 xl:m-4 landscape:max-xl:h-fit sm:h-[calc(100vh-10rem)]">
      <PageDivider title="Tech" titleHighlight="stack" page="02" />
      <section className="max-container my-8 flex flex-col justify-between gap-16 px-4 text-text-white sm:px-8 xl:flex-row xl:items-center xl:px-[6rem]">
        <div>
          <h1 data-aos="fade-up" className="font-title text-2xl">
            Frontend & Design
          </h1>
          <ul
            data-aos="fade-up"
            className="flex flex-wrap justify-between gap-2 pt-6"
          >
            {<TechList isFrontend={true} />}
          </ul>
        </div>
        <div>
          <h1 data-aos="fade-up" className="font-title text-2xl">
            Backend && Version Control && Databases
          </h1>
          <ul
            data-aos="fade-up"
            className="flex flex-wrap justify-between gap-2 pt-6"
          >
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
      src: "./svg/html.svg",
      alt: "HTML",
    },
    {
      src: "./svg/css.svg",
      alt: "CSS",
    },
    {
      src: "./svg/js.svg",
      alt: "JS",
    },
    {
      src: "./svg/jquery.svg",
      alt: "JQUERY",
    },
    {
      src: "./svg/sass.svg",
      alt: "SASS",
    },
    {
      src: "./svg/tailwind.svg",
      alt: "TAILWIND",
    },
    {
      src: "./svg/reactjs.svg",
      alt: "REACTJS",
    },
    {
      src: "./svg/figma.svg",
      alt: "FIGMA",
    },
  ];
  const backend = [
    {
      src: "./svg/ejs.svg",
      alt: "EJS",
    },
    {
      src: "./svg/express.svg",
      alt: "Express",
    },
    {
      src: "./svg/git.svg",
      alt: "GIT",
    },
    {
      src: "./svg/node.svg",
      alt: "NODEJS",
    },
    {
      src: "./svg/pgsql.svg",
      alt: "PosgreSQL",
    },
    {
      src: "./svg/api.svg",
      alt: "API",
    },
    {
      src: "./svg/axios.svg",
      alt: "AXIOS",
    },
  ];
  return isFrontend
    ? frontend.map(({ src, alt }) => (
        <li key={alt}>
          <img src={src} alt={alt} />
        </li>
      ))
    : backend.map(({ src, alt }) => (
        <li key={alt}>
          <img src={src} alt={alt} />
        </li>
      ));
}
