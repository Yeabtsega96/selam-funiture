import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";

import Button from "../components/Button";
import SEO from "../components/common/SEO";

import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Selam Furniture"
        description="The page you are looking for doesn't exist or may have been moved."
        url="https://selamfurniture.com/404"
      />

      <main className="not-found">
        <div className="not-found-content">

          <p className="error-code">404</p>

          <h1>Oops! Page Not Found</h1>

          <p className="description">
            The page you're looking for doesn't exist, may have been
            moved, or the URL might be incorrect.
          </p>

          <div className="not-found-actions">
            <Link to="/">
              <Button>
                <FaHome aria-hidden="true" />
                Back Home
              </Button>
            </Link>

            <Button
              variant="secondary"
              onClick={() => window.history.back()}
            >
              <FaArrowLeft aria-hidden="true" />
              Go Back
            </Button>
          </div>

        </div>
      </main>
    </>
  );
};

export default NotFound;