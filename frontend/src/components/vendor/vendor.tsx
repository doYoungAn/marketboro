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
        <div data-uk-grid className="uk-grid-small uk-padding-small uk-padding-remove-bottom">
          {vendor.businesses.map((business, index) => (
            <span key={index} className="uk-badge uk-margin-right">{business.name}</span>
          ))}
        </div>
      </div>
    </>
  );

};

export default Vendor;
