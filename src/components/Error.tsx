import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as Error;

  return error && error.message ? (
    <h1>{error.message}</h1>
  ) : (
    <>
      <h1>404: Page not found</h1>
      <Link to={'/'}><button >Go back</button></Link>
    </>
  );
};

export default Error;
