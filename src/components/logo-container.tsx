import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      {/* <img
        src="/assets/svg/logo.svg"
        alt=""
        className="min-w-10 min-h-10 object-contain"
      /> */}

<img
  src="/assets/svg/logo.svg"
  alt="Logo"
  className="object-contain"
  style={{ height: "140px", width: "auto", marginTop: "-70px", marginBottom: "-60px" }}
/>



    </Link>
  );
};
