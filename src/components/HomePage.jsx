import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Clothing from "./Clothing";
import Operations from "./Operations";
import Main from "./Main";
import Footer from "./Footer";
import Filter from "./Filter";
import { Provider } from "react-redux";
import store from "../utils/Redux/store";
import SearchModal from "./SearchModal";
import UserModal from "./UserModal";

const HomePage = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <Provider store={store}>
      <Header />
      <Navbar />
      <Clothing />
      <Operations setShowFilter={setShowFilter} />
      {showFilter && <Filter setShowFilter={setShowFilter}/>}
      <Main />
      <SearchModal />
      <UserModal />
      <Footer />
    </Provider>
  );
};

export default HomePage;
