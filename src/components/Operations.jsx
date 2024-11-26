import React, { useState } from "react";
import tableCell from "../assets/images/table-cells-solid.svg";
import filter from "../assets/images/filter-solid.svg"
import { useDispatch, useSelector } from "react-redux";
import { changeTableCell } from "../utils/Redux/productSlice";
import { sortByAlphabet } from "../utils/services/services";
const Operations = ({setShowFilter}) => {
  const products = useSelector(state => state?.product?.filteredProduct)
  const dispatch = useDispatch()
  const [sortView, setSortView] = useState(false)

  const handleSort = (type) => {
    sortByAlphabet(products, dispatch, type)
  }
  return (
    <section className="operations">
      <div className="container">
        <div className="filter">
          <ul>
            <li>
              <a href="">
                <img src={filter} alt="" />
              </a>
            </li>
            <li>
              <a onClick={() => setShowFilter((prev) => !prev)}>Filter</a>
            </li>
          </ul>
        </div>
        <div className="item-cell">
          <ul>
            <li onClick={() => dispatch(changeTableCell(1))}>
              <a>
                <img src={tableCell} alt="" />
              </a>
            </li>
            <li onClick={() => dispatch(changeTableCell(2))}>
              <a>
                <img src={tableCell} alt="" />
              </a>
            </li>
            <li onClick={() => dispatch(changeTableCell(3))}>
              <a>
                <img src={tableCell} alt="" />
              </a>
            </li>
            <li onClick={() => dispatch(changeTableCell(4))}>
              <a>
                <img src={tableCell} alt="" />
              </a>
            </li>
            <li onClick={() => dispatch(changeTableCell(5))}>
              <a>
                <img src={tableCell} alt="" />
              </a>
            </li>
            <li onClick={() => dispatch(changeTableCell(6))}>
              <a>
                <img src={tableCell} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="sort">
          <div>
          <div className="sort-btn" onClick={() => setSortView(!sortView)}>
            Featured
          </div>
          <div className="sort-options" style={{display: sortView ? "block" : "none"}}>
            <ul>
              <li onClick={() => handleSort("alphabeta-z")}><a>Alphabetically, A-Z</a></li>
              <li onClick={() => handleSort("alphabetz-a")}><a>Alphabetically, Z-A</a></li>
              <li onClick={() => handleSort("lowtoHigh")}><a>Price, low to high</a></li>
              <li onClick={() => handleSort("hightoLow")}><a>Price, high to low</a></li>

            </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Operations;
