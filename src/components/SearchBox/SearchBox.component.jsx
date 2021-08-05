import React from "react";
import "./SearchBox.styles.scss";

export const SearchBox = ({ placeholder, handleSearch }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleSearch}
  />
);
