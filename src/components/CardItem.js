import React from 'react';

const CardItem = ({ src }) => {
  if (!src) {
    return <div>Loading...</div>;
  }
  return (
    <div className="col col-md-4">
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
