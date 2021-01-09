import React from "react";

const GifGridItem = ({ title, url }) => {
  return (
    <div className={`card animate__animated animate__fadeIn animate__delay-1s`}>
      <div className="img-wrapper">
        <img src={url} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
