import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>
        <b>404 Error</b>
      </h2>
      <p>That Page cannot be found</p>
      <Link to="/">Back to the Home page....</Link>
    </div>
  );
};

export default NotFound;
