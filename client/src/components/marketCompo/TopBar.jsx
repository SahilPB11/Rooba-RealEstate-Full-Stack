import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div
      className="border border-gray-300"
      style={{
        width: "calc(100%)",
        height: "107px",
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem", // Adjust padding based on your design
        alignItems: "center", // Center items vertically
      }}
    >
      <Link
        to="/complete-profile"
        className="buttonStyles text-lg md:text-xl lg:text-2xl text-white"
        style={{ textDecoration: "none" }}
      >
        Complete Profile
      </Link>
      <img src="./logo/ring.svg" alt="Ring Logo" className="w-5" />
    </div>
  );
};
export default TopBar;
