import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center">
      <h1>Oof!</h1>
      <img src="https://cdn.dribbble.com/userupload/10399773/file/original-6c32788fc1eeae2b8b2893b0badf4210.png?resize=1504x1128" className="w-1/4 my-3" alt="" />
      <p>Sorry, an unexpected error has occurred: <i>{error.statusText || error.message}</i></p>
    </div>
  );
}