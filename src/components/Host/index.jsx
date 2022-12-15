import React from "react";


const Host = ({ host }) => {
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <div className="product__content__right__host">
      <div className="product__content__right__host__name">
        <p className="product__content__right__host__name__firstname">{name}</p>
        <p className="product__content__right__host__name__lastname">{lastname}</p>
      </div>

      <img src={host.picture} alt="" className="product__content__right__host__picture" />
    </div>
  );
};

export default Host;