import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <div>Error</div>;<Link to="/">back home</Link>
    </div>
  );
};
export default Error;
