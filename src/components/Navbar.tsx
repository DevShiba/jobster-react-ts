import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Wrapper>
      <nav className="nav-center">
        <button type="button" className="toggle-btn">
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text"></h3>
        </div>
        <div className="btn-container">
          <button type="button" className="btn">
            User
          </button>
          <div className="dropdown">
            <button type="button" className="dropdown-btn">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
