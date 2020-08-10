import React from "react";
import { useDispatch } from "react-redux";
import { getSearchResults } from "../SearchResults/SearchResultsSlice";
import MenuView from "./MenuView";
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

export default MenuContainer;
