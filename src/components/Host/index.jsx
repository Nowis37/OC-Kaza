import React from "react";
import PropTypes from 'prop-types'


const Host = ({ host }) => {
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  Host.propTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
  }

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