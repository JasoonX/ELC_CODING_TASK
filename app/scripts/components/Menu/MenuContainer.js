import axios from "axios";
import React from "react";
import MenuView from "./MenuView.js";
import { useDispatch } from "react-redux";
import { getSearchResults } from "../SearchResults/SearchResultsSlice";
const links = [
  "HOLIDAY",
  "WHAT'S NEW",
  "PRODUCTS",
  "BESTSELLERS",
  "GOODBYES",
  "STORES",
  "INSPIRATION",
];

const MenuContainer = () => {
  const dispatch = useDispatch();

  const onSearch = (value) => {
    dispatch(getSearchResults(value));
  };

  return <MenuView links={links} onSearch={onSearch} />;
};

module.exports = MenuContainer;
