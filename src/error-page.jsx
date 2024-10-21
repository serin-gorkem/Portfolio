import { useRouteError } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center gap-5 bg-primary p-4 text-text-white 3xl:gap-16"
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-center font-lato text-5xl font-bold 3xl:text-[10rem]">
          Oops!
        </h1>
        <hr className="w-80 bg-black 3xl:w-[40rem]"></hr>
      </div>
      <p className="text-center font-lato text-3xl 3xl:text-[5rem]">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-center font-lato 3xl:text-[3rem]">
        <i>{error.statusText || error.message}</i>
      </p>
      <hr className="w-72 bg-black 3xl:w-[40rem]"></hr>
        <a
          href="mailto:gorkemserin@outlook.com"
          aria-label=" Contact me about the error."
          className="flex gap-4 justify-center items-center text-lg 3xl:text-[3rem]"
        >
          <img src="/svg/contact.svg" className="w-10"></img>
          Please contact me about your issue.
        </a>
      <Link to="/" className="flex items-center justify-between gap-4">
        <img src="/svg/home.svg" className="w-10"></img>
        <button> Go back to home</button>
      </Link>
    </div>
  );
}
