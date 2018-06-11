import React from 'react';

const CardItem = ({ src }) => {
  if (!src) {
    return <div>Loading...</div>;
  }
  return (
    <div className="col col-md-4">
      <div className="card">
        <img className="card-img-top" src={src} alt="Card image cap" />
        <div className="card-body">
          <h5 classclassName="card-title">Lorem ipsum</h5>
          <p classclassName="card-text">
            Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
