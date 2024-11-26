import { addFilteredData } from "../Redux/productSlice";

export const sortByAlphabet = (products, dispatch, type) => {
    const sortFunctions = {
      "alphabeta-z": (a, b) => a.name.localeCompare(b.name),
      "alphabetz-a": (a, b) => b.name.localeCompare(a.name),
      "lowtoHigh": (a, b) => parseFloat(a.price) - parseFloat(b.price),
      "hightoLow": (a, b) => parseFloat(b.price) - parseFloat(a.price),
    };
  
    const sortedProducts = [...products].sort(sortFunctions[type] || (() => 0));
    dispatch(addFilteredData(sortedProducts));
  };

export const searchProducts = (products, name) => {
  const filtered_result = products?.filter((product) => {
    return product?.name?.toLowerCase()?.includes(name?.toLowerCase());
  })
  return filtered_result
}