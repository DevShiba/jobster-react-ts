import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <nav className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
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
