import React from "react";

const Popular = ({ setCategories }) => {
  return (
    <div className="popular">
      <h3>Popular</h3>
      <div className="popular-wrapper">
        <button onClick={() => setCategories((cats) => ["Overwatch", ...cats])}>
          Overwatch
        </button>
        <button onClick={() => setCategories((cats) => ["Capitol", ...cats])}>
          Capitol
        </button>
        <button onClick={() => setCategories((cats) => ["Pokemon", ...cats])}>
          Pokemon
        </button>
        <button onClick={() => setCategories((cats) => ["Cats", ...cats])}>
          Cats
        </button>
        <button onClick={() => setCategories((cats) => ["Covid", ...cats])}>
          Covid
        </button>
        <button
          onClick={() => setCategories((cats) => ["Animal Crossing", ...cats])}
        >
          Animal Crossing
        </button>
      </div>
    </div>
  );
};

export default Popular;
