import React, { useState } from "react";
import AddCategory from "./AddCategory";

import PropTypes from "prop-types";
import GifGrid from "./GifGrid";
import Popular from "./Popular";
const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div className="container">
      <h2>Gif Expert</h2>
      <p>What do you like to find</p>
      <Popular setCategories={setCategories} />
      <AddCategory setCategories={setCategories} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default GifExpertApp;
