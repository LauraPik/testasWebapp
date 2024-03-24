import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
} from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as service from "../services/auth";
import { signoutSuccess } from "../redux/user/userSlice";
import logo from "../assets/logo.jpg";

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const logout = () => {
    service.logout(currentUser.token, dispatch, signoutSuccess);
    navigate("/");
  };

  return (
    <Navbar className="  bg-gradient-to-r from-cyan-500 to-blue-500  border-b-4 border-indigo-500">
      <Link
        to="/dashboard"
        className="self-center whitespace-nowrap text-xl font-semibold"
      >
        <img src={logo} className="w-[30px]" alt="" />
      </Link>
      <div className="flex gap-2 md:order-2">
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">{currentUser.data.email}</span>
              <span className="block text-sm font-medium truncate"></span>
            </DropdownHeader>
            <Link to="/dashboard">
              <DropdownItem>{currentUser.data.role}</DropdownItem>
            </Link>
            <DropdownDivider />
            <DropdownItem onClick={logout}>Sign Out</DropdownItem>
          </Dropdown>
        ) : (
          <Link to="/">
            <button className="p-2 border-2 rounded-xl">Prisijungti</button>
          </Link>
        )}
      </div>
    </Navbar>
  );
};

export default Header;
