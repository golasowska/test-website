import React from 'react';
import { PulseLoader } from 'react-spinners';

const CardItem = ({ src }) => {
  if (!src) {
    return (
      <div className="sweet-loading m-auto">
        <PulseLoader color={'#ff5d00'} loading={true} />
      </div>
    );
  }
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={src} alt="lorem ipsum" />
        <div className="card-body">
          <h5 className="card-title">Lorem ipsum</h5>
          <p className="card-text">
            Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
