import React, { FC, useEffect } from 'react';

interface IVendorProps {
  vendor: IVendor;
}

const Vendor: FC<IVendorProps> = ({ vendor }): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div className="uk-card uk-card-default uk-card-body uk-card-small uk-animation-slide-bottom">
        <h3 className="uk-card-title">{vendor.name}</h3>
        <p>{vendor.description}</p>
        {vendor.businesses.map((business, index) => (
          <span key={index} className="uk-badge uk-margin-right uk-margin-bottom">{business.name}</span>
        ))}
      </div>
    </>
  );

};

export default Vendor;
