import React, { useState } from "react";
import SearchIcon from "../assets/images/magnifying-glass-solid.svg";
import user from "../assets/images/user-regular.svg"
import heart from "../assets/images/heart-regular.svg"
import cart from "../assets/images/cart-shopping-solid.svg"
import { useDispatch } from "react-redux";
import { toggleModal, toggleUserModal } from "../utils/Redux/productSlice";
// import NavbarModal from "./NavbarModal";

const Navbar = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(true)
  return (
    <section className="navbar-section" onMouseLeave={() => setOpen(false)}>
      <div className="logo-heading">
        <img
          src="https://gecko5.myshopify.com/cdn/shop/files/logo.svg?v=13650740377954234292"
          alt="logo-img"
        />
      </div>
      <div className="nav-link">
        <ul>
          <li onMouseEnter={() => setOpen(true)}
            >
            <a href="">Demo</a>
            <div className="nav-modal">
              <table>
                <thead>
                  <tr>
                    <td>Homepages </td>
                    <td>Homepages </td>
                    <td>Homepages </td>
                    <td>Homepages </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li className="shop">
            <a href="">Shop</a>
            <div className="nav-modal">
              <table>
                <thead>
                  <tr>
                    <td>Homepages </td>
                    <td>Homepages </td>
                    <td>Homepages </td>
                    <td>Homepages </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span>NEW</span>
          </li>
          <li className="product">
            <a href="">Product</a>
            <div className="nav-modal">
              <table>
                <thead>
                  <tr>
                    <td>Homepages </td>
                    <td>Homepages </td>
                    <td>Homepages </td>
                    <td>Homepages </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span>HOT</span>
          </li>
          <li>
            <a href="">portfolio</a>
            <div className="nav-modal">
              <table>
                <thead>
                  <tr>
                    <td>Homepages </td>
                    <td>Homepages </td>
                    <td>Homepages </td>
                    <td>Homepages </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <a href="">lookbook</a>
            <div className="nav-modal">
              <table>
                <thead>
                  <tr>
                    <td>Homepages </td>
                    <td>Homepages </td>
                    <td>Homepages </td>
                    <td>Homepages </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <a href="">blog</a>
            <div className="nav-modal">
              <table>
                <thead>
                  <tr>
                    <td>Homepages </td>
                    <td>Homepages </td>
                    <td>Homepages </td>
                    <td>Homepages </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                  <tr>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                    <td>Demo Content</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>
      <div className="nav-icons">
        <ul>
          <li onClick={() => dispatch(toggleModal())}>
            <a>
              <img src={SearchIcon} alt="" />
            </a>
          </li>
          <li onClick={() => dispatch(toggleUserModal())}>
            <a>
              <img src={user} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={heart} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={cart} alt="" />
            </a>
          </li>
        </ul>
      </div>
      {/* <NavbarModal open={open}/> */}
    </section>
  );
};

export default Navbar;
