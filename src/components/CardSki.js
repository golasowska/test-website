import React from 'react';
import { PulseLoader } from 'react-spinners';

const CardSki = ({ src1, src2, title }) => {
  if (!src1 && !src2) {
    return (
      <div className="sweet-loading">
        <PulseLoader color={'#ff5d00'} loading={true} />
      </div>
    );
  }
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body card-body-ski">
          <p className="text-right date">{`${new Date().getDate()}-${new Date().getMonth() +
            1}-${new Date().getFullYear()}`}</p>
          <h5 className="card-title text-center">{title}</h5>
        </div>
        <img className="card-img-bottom" src={src1} alt="ski cam" />
        <img className="card-img-bottom" src={src2} alt="ski cam2" />
      </div>
    </div>
  );
};

export default CardSki;
