import React from 'react';

const CardSki = ({ src1, src2, title }) => {
  if (!src1 && !src2) {
    return <div>Loading...</div>;
  }
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <p className="text-right">{`${new Date().getDate()}-${new Date().getMonth() +
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
