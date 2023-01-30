import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2>My Home Page</h2>
      <p>
        Go to <Link to="/products">list of products</Link>
      </p>
    </div>
  );
};

export default HomePage;
