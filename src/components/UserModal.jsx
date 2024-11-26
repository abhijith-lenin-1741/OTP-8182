import React from "react";
import { Button, Modal } from "antd";
import close from "../assets/images/xmark-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserModal } from "../utils/Redux/productSlice";

const UserModal = () => {
  const userModal = useSelector((state) => state?.product?.userModal);
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(toggleUserModal());
  };
  return (
    <Modal
      className="search-modal"
      open={userModal}
      onCancel={handleCancel}
      closeIcon={false}
      style={{
        maxWidth: "332px",
      }}
      footer={false}
      transitionName="custom-fade"
      maskTransitionName="custom-fade-mask"
    >
      <div className="search-area">
        <div className="top-section">
          <div className="top">
            <div className="container">
              <h1>Login</h1>
              <img
                src={close}
                alt="close"
                onClick={() => dispatch(toggleUserModal())}
              />
            </div>
          </div>
        </div>
        <div className="user-section">
          <div className="container">
            <div className="top">
              <span>Email</span>
              <input type="text" />
            </div>
            <div className="bottom">
              <span>Password</span>
              <input type="text" />
            </div>
            <button>Sign in</button>
            <div className="sign-option">
              <p>
                New customer? <span>Create your account</span>
              </p>
              <p>
                Lost password? <span>Recover password</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
