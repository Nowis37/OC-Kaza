import React from "react";

const Tags = ({ getTag }) => {
  return (
      <li className="product__content__left__tags__tag">{getTag}</li>
  );
};

export default Tags;