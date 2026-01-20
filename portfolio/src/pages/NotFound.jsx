import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="d-flex min-vh-100 align-items-center justify-content-center bg-dark text-light">
      <div className="text-center">
        <h1 className="mb-4 display-1 fw-bold">404</h1>
        <p className="mb-4 fs-4 text-secondary">Oops! Page not found</p>
        <a
                href="/"
                className="btn d-inline-flex align-items-center gap-2 px-4 py-2 text-white rounded-pill"
                style={{ 
                  fontSize: "1.25rem",
                  background: "linear-gradient(135deg, #7c3aed 0%, #713ca2 100%)"
                 }}
              >
                Return home
              </a>
      </div>
    </div>
  );
};

export default NotFound;
