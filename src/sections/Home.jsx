import { lazy } from "react";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = lazy(() => import("../components/Navbar"));
const Highlight = lazy(() => import("../components/Highlight"));
const ImportAos = lazy(() => import("../components/ImportAos"));
/**
 * @description The Home component is the main page of the website, showcasing the developer's skills and services.
 */
function Home() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/gorkem-serin-097606227/",
      alt: "LinkedIn Logo",
      label: "Linkedin",
      src: "./svg/linkedin.svg",
    },
    {
      href: "https://github.com/serin-gorkem",
      alt: "Github Logo",
      label: "Github",
      src: "./svg/github.svg",
    },
    {
      href: "https://www.instagram.com/gorkemseriin/",
      alt: "Instagram Logo",
      label: "Instagram",
      src: "./svg/instagram.svg",
    },
  ];

  return (
    <>
      {/* h-[calc(100vh-xrem)] xrem = 16 * x px which is the length of margin top + bottom to keep box centered. */}
      <article
        id="home"
        className="relative m-2 h-[calc(100vh-1rem)] bg-secondary xl:m-4 xl:h-[calc(100vh-2rem)] landscape:max-xl:h-fit"
      >
        {/* Import AOS for animations */}
        <ImportAos />
        <Navbar isFooter={false} />
        <main className="max-container relative flex h-[calc(100vh-10rem)] flex-col justify-center p-4 text-text-white sm:h-[calc(100vh-14rem)] sm:px-8 xl:px-[6rem] landscape:max-xl:h-fit">
          <div className="absolute -bottom-10 right-0 flex h-24 w-full bg-primary sm:bottom-0 sm:items-center xl:-bottom-20 xl:right-20 xl:h-screen xl:w-24 xl:justify-center">
            <div
              data-aos="slide-down"
              data-aos-duration="1500"
              className="flex w-full items-center justify-evenly gap-8 px-2 sm:px-8 xl:flex-col xl:px-0"
            >
              {socialLinks.map(({ href, label, src }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-all duration-500 hover:-translate-y-3"
                >
                  <img src={src} alt={`${label} logo`} className="w-10" />
                </a>
              ))}
            </div>
          </div>
          <h1
            data-aos="fade-up"
            className="font-title text-3xl font-medium leading-tight tracking-tighter xs:text-4xl xs:leading-tight sm:text-[3rem] sm:leading-tight 3xl:text-[5rem] 3xl:leading-tight"
          >
            Hi, I&#39;m Gorkem,
          </h1>
          {/* Highlight is a component which adds custom highlights to selected texts. */}
          <div data-aos="fade-up">
            {
              <Highlight
                element={
                  <p className="font-title text-3xl font-medium leading-tight tracking-tighter xs:text-4xl xs:leading-tight sm:text-[3rem] sm:leading-tight 3xl:text-[5rem] 3xl:leading-tight">
                    Web Developer,
                  </p>
                }
              />
            }
          </div>
          <div data-aos="fade-up">
            {
              <Highlight
                element={
                  <p className="font-title text-3xl font-medium leading-tight tracking-tighter xs:text-4xl xs:leading-tight sm:text-[3rem] sm:leading-tight 3xl:text-[5rem] 3xl:leading-tight">
                    Web Designer,
                  </p>
                }
              />
            }
          </div>
          {/* This two is wrapped with a div because I wanted them to be one line. */}
          <div data-aos="fade-up" className="gap-1 sm:flex sm:gap-2">
            <h1 className="font-title text-3xl font-medium leading-tight tracking-tighter xs:text-4xl xs:leading-tight sm:text-[3rem] sm:leading-tight 3xl:text-[5rem] 3xl:leading-tight">
              and
            </h1>
            {
              <Highlight
                element={
                  <p className="font-title text-3xl font-medium leading-tight tracking-tighter xs:text-4xl xs:leading-tight sm:text-[3rem] sm:leading-tight 3xl:text-[5rem] 3xl:leading-tight">
                    Webflow Developer,
                  </p>
                }
              />
            }
          </div>
          <h2
            data-aos="fade-up"
            className="py-8 font-lato text-[0.875rem] font-light leading-[150%] tracking-[2%] sm:w-[40rem] sm:text-xl sm:leading-[150%] 3xl:w-[56.25rem] 3xl:text-2xl"
          >
            I design and build beautiful websites for businesses around the
            globe. If you need a modern and powerful website, send me an email.
            If we are a good fit, I will give you a time and cost estimate.
          </h2>
          <div className="flex gap-8">
            <div
              data-aos="fade-up"
              className="relative h-[3.5rem] w-[9.625rem] border-2 border-primary hover:border-highlight sm:h-[3.75rem] sm:w-[10.625rem]"
            >
              {/* CTA Button with the animation logic of moving it on the x and y with transition */}
              <Link smooth to="#work" className="p-2">
                <button onClick="va('send', 'event', 'Button', 'onclick', null, null, null);" className="h-[3.5rem] w-[9.625rem] -translate-x-4 -translate-y-2 bg-primary font-lato text-sm font-bold text-white transition-all duration-500 hover:-translate-x-[0.6rem] hover:-translate-y-[0.13rem] hover:bg-highlight sm:h-[3.75rem] sm:w-[10.625rem] sm:text-base">
                  see my work
                </button>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="relative h-[3.5rem] w-[6.625rem] border-2 border-primary hover:border-highlight sm:h-[3.75rem] sm:w-[5.625rem]"
            >
              {/* CTA Button with the animation logic of moving it on the x and y with transition */}
              <a
                className="p-2"
                href="https://drive.google.com/file/d/17aUD53d-_kGrmTcAGbSIzq8bEhIZbXL9/view?usp=sharing"
              >
                <button onClick="va('send', 'event', 'Button', 'onclick', null, null, null);" className="h-[3.5rem] w-[6.625rem] -translate-x-4 -translate-y-2 bg-primary font-lato text-sm font-bold text-white transition-all duration-500 hover:-translate-x-[0.6rem] hover:-translate-y-[0.13rem] hover:bg-highlight sm:h-[3.75rem] sm:w-[5.625rem] sm:text-base">
                  cv
                </button>
              </a>
            </div>
          </div>
        </main>
        {/* The SCROLL text with the animation
        keyframes:  
        "scroll": {
          "0%": { transform: "translate3d(0px,-100%,0px)" },
          "10%": { transform: "translate3d(0px,-100%,0px)" },
          "90%": { transform: "translate3d(0px,100%,0px)" },  
          "100%": { transform: "translate3d(0px,100%,0px)" },
        }
        animation: {
        'scroll-arrow': 'scroll 2s infinite',
      }
      The second div has overflow: hidden to make it look like it disappears.
       */}
        <div className="max-container pointer-events-none relative bottom-12 z-10 hidden justify-end sm:flex sm:px-8 xl:px-[6rem] 3xl:bottom-24">
          <div data-aos="slide-down" className="relative w-12 overflow-hidden">
            <div className="h-40 w-0.5 animate-scroll-arrow bg-highlight sm:block"></div>
            <p className="absolute -right-4 top-[1.3rem] rotate-90 font-lato font-medium text-highlight">
              SCROLL
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
export default Home;
