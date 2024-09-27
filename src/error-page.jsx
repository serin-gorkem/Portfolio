import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col justify-center 3xl:gap-16 gap-5 p-4 items-center h-screen bg-primary">
    <div className="flex flex-col gap-8">
      <h1 className="text-5xl 3xl:text-[10rem] text-center font-bold font-lato" >Oops!</h1>
      <hr className="bg-black w-72 3xl:w-[40rem]"></hr>
    </div>
      <p className="text-3xl text-center 3xl:text-[5rem] font-lato">Sorry, an unexpected error has occurred.</p>
      <p className="text-center font-lato 3xl:text-[3rem]">
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="mailto:gorkemserin@outlook.com" aria-label=" Contact me about the error." className=" underline underline-offset-4 text-lg 3xl:text-[3rem] " >Please contact me about your issue.</a>
    </div>
  );
}