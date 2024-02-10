import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page' className='flex flex-col flex-wrap items-center justify-center gap-5 h-screen bg-gray-950 text-white'>
      <h1 className='text-3xl text-center font-bold '>
        {error.statusText || error.message}
      </h1>
      <p className='text-md text-center m-2 text-gray-200'>Please try again later or report this error to the administrator.</p>
      <div>&copy; 2024 | Rajveer Mahida 🚀</div>
    </div>
  );
}
