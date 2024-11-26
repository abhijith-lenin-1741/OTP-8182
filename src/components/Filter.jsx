import { Slider, Switch } from "antd";
import { useEffect, useState } from "react";
import { Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilteredData,
  getCurrentColor,
  getCurrentSelectedSize,
} from "../utils/Redux/productSlice";
const Filter = ({ setShowFilter }) => {
  const dispatch = useDispatch();
  const selectedSize = useSelector((state) => state?.product?.selectedSize);
  const products = useSelector((state) => state?.product?.items);
  const [disabled, setDisabled] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [priceInterval, setPriceInterval] = useState({
    lowestPrice: 0,
    highestPrice: 0,
    calculatedLowest: 0,
    calculatedHighest: 0,
  });

  useEffect(() => {
    let prices = products.map((product) => parseFloat(product.price) || 0);
    const lowestPrice = Math.min(...prices);
    const highestPrice = Math.max(...prices);
    setPriceInterval({
      lowestPrice,
      highestPrice,
    });
  }, []);
  const onChange = (checked) => {
    setDisabled(checked);
  };
  const handleSize = (e) => {
    dispatch(getCurrentSelectedSize(e.target.name));
    const size = e.target.name;
    const filtered_item = products?.filter((item) => item?.size === size);
    dispatch(addFilteredData(filtered_item));
    setShowFilter((prev) => !prev);
  };
  const handleColor = (color) => {
    dispatch(getCurrentColor(color))
    const filtered_item = products?.filter((item) => item?.color === color);
    dispatch(addFilteredData(filtered_item));
    setShowFilter((prev) => !prev);
  }
  const inputSubmit = () => {
    const filtered_item = products?.filter((item) =>
      item?.name?.toLowerCase()?.includes(inputSearch.toLowerCase())
    );
    dispatch(addFilteredData(filtered_item));
    setShowFilter((prev) => !prev);
  };
  const handlePriceChange = (e) => {
    setPriceInterval((prev) => ({
      ...prev,
      calculatedLowest: e[0],
      calculatedHighest: e[1],
    }));
  };

  const handlePriceFilter = () => {
    const filteredData = products?.filter(
      (item) =>
        parseInt(item?.price) > priceInterval?.calculatedLowest &&
        parseInt(item?.price) < priceInterval?.calculatedHighest
    );
    dispatch(addFilteredData(filteredData));
    setShowFilter((prev) => !prev);
  };
  console.log("selectedSizex", selectedSize);
  return (
    <section className="filter-section">
      <div className="container">
        <ul className="filter-item">
          <li>
            <a href="">By Title</a>

            <input
              type="text"
              placeholder="search for product title"
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <button onClick={inputSubmit}>Filter</button>
          </li>
          <li>
            <a href="">By Price</a>

            <Slider
              range
              defaultValue={[
                priceInterval.lowestPrice,
                priceInterval.highestPrice,
              ]}
              disabled={disabled}
              onChange={handlePriceChange}
              min={priceInterval?.lowestPrice}
              max={priceInterval?.highestPrice}
              step={100}
            />
            <p>
              Price: $
              {priceInterval?.calculatedLowest > 0
                ? priceInterval?.calculatedLowest
                : priceInterval?.lowestPrice}{" "}
              — $
              {priceInterval?.calculatedHighest > 0
                ? priceInterval?.calculatedHighest
                : priceInterval?.highestPrice}
            </p>

            <button onClick={handlePriceFilter}>Filter</button>
          </li>
          <li>
            <a href="">By Size</a>
            <Checkbox
              onChange={handleSize}
              className="check-box"
              name="L"
              checked={selectedSize == "L"}
            >
              L
            </Checkbox>
            <Checkbox
              onChange={handleSize}
              className="check-box"
              name="M"
              checked={selectedSize == "M"}
            >
              M
            </Checkbox>
            <Checkbox
              onChange={handleSize}
              className="check-box"
              name="S"
              checked={selectedSize == "S"}
            >
              S
            </Checkbox>
            <Checkbox
              onChange={handleSize}
              className="check-box"
              name="XL"
              checked={selectedSize == "XL"}
            >
              XL
            </Checkbox>
            <Checkbox
              onChange={handleSize}
              className="check-box"
              name="XS"
              checked={selectedSize == "XS"}
            >
              XS
            </Checkbox>
          </li>
          <li>
            <a href="">By Color</a>
            <ul className="color">
              <li onClick={() => handleColor("grey")}>
                <a style={{ background: "#a8bcd4" }}></a>
              </li>
              <li onClick={() => handleColor("orange")}>
                <a style={{ background: "#cea525" }}></a>
              </li>
              <li onClick={() => handleColor("yellow")}>
                <a style={{ background: "yellow" }}></a>
              </li>
              <li onClick={() => handleColor("green")}>
                <a style={{ background: "green" }}></a>
              </li>
              <li onClick={() => handleColor("black")}>
                <a style={{ background: "black" }}></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Filter;
