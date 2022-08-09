import "./PageNotFound.css";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1 className="empty-products">Sorry! 404 page not found!</h1>
      <Link to="/products" className="go-to-products ct-btn">
        Back to products
      </Link>
    </div>
  );
};

export { PageNotFound };
