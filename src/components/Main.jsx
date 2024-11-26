import React, { useEffect, useState } from "react";
import { productDatas } from "../utils/products";
import { useDispatch, useSelector } from "react-redux";
import { addFilteredData, addProducts } from "../utils/Redux/productSlice";
import Pagination from "./Pagination";
import heart from "../assets/images/heart-regular.svg"


const Main = () => {
  const dispatch = useDispatch();
  const tableCell = useSelector((state) => state?.product?.tableCell);
  const filterdData = useSelector((state) => state.product.filteredProduct);
  const [productData, setProductData] = useState(productDatas);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(12);
  useEffect(() => {
    dispatch(addProducts(productData));
    dispatch(addFilteredData(productData));
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filterdData?.slice(firstPostIndex, lastPostIndex);
  return (
    <section className="main-section">
      <div className="container">
        {currentPosts?.map((product, index) => (
          <>
            <div
              className={`${
                tableCell == 1
                  ? "single-section"
                  : tableCell == 2
                  ? "double-section"
                  : tableCell == 3
                  ? "third-section"
                  : tableCell == 4
                  ? "fourth-section"
                  : tableCell == 5
                  ? "fifth-section"
                  : tableCell == 6
                  ? "sixth-section"
                  : ""
              } card`}
              key={index}
            >
              <img src={product?.img} alt="" />
              <div className="contents">
                <p className="name">{product?.name}</p>
                <p className="price">${product?.price}</p>
                {tableCell == 1 && (
                  <p className="desc">
                    {product?.desc?.split(" ").slice(0, 30).join(" ")}
                    {product?.desc?.split(" ").length > 30 && "..."}
                  </p>
                )}
              </div>
              {tableCell == 1 && <div className="checkout">
                <button className="quickview">Quick view</button>
                <button className="shop">QUICK SHOP</button>
              </div>}
            </div>
          </>
        ))}
      </div>
      <Pagination
        totalPosts={filterdData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        lastPostIndex={lastPostIndex}
        currentPage={currentPage}
      />
    </section>
  );
};

export default Main;
