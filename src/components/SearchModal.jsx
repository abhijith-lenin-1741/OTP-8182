import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addFilteredData, toggleModal } from "../utils/Redux/productSlice";
import close from "../assets/images/xmark-solid.svg";
import { searchProducts } from "../utils/services/services";
import { useNavigate } from "react-router-dom";
const SearchModal = () => {
  const modalStatus = useSelector((state) => state?.product?.modalOpen);
  const products = useSelector((state) => state?.product?.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchResponse, setSearchResponse] = useState();

  const handleCancel = () => {
    dispatch(toggleModal());
  };
  const handleChange = (e) => {
    const name = e.target.value;
    const response = searchProducts(products, name);
    setSearchResponse(response);
  };
  const handleNavigate = () => {
    dispatch(toggleModal());
    dispatch(addFilteredData(searchResponse));
  };
  const response = searchResponse ? searchResponse : products;
  let splitted = response;
  if (response?.length > 5) {
    splitted = response?.slice(0, 5);
  }
  return (
    <Modal
      className="search-modal"
      //   title="Basic Modal//"
      open={modalStatus}
      // onOk={handleOk}
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
              <h1>Search Our Site</h1>
              <img
                src={close}
                alt="close"
                onClick={() => dispatch(toggleModal())}
              />
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="bottom">
            <div className="container">
              <input
                type="text"
                placeholder="Search for products"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="inspire">
          <div className="container">
            <h3>
              {searchResponse ? "Search Results" : "Need some inspiration?"}
            </h3>
          </div>
        </div>
      </div>
      {/* product list */}
      <div className="product-list">
        <div className="container">
          {splitted?.length === 0 ? (
            <p>No item Found</p>
          ) : (
            splitted?.map((item, index) => {
              return (
                <div className="products" key={index}>
                  <img src={item?.img} alt="product-imgMen Baniyan's" />
                  <div className="desc">
                    <p>{item?.name}</p>
                    <p>{item?.price}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="viewall">
        <div className="container">
          {searchResponse?.length > 5 && (
            <p onClick={handleNavigate}>
              View All({response?.length}) <span>-></span>
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
