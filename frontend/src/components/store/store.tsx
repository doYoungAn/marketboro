import React, { FC, useEffect, useState } from 'react';
import _api from '~/services/api.service';

interface IStoreProps {
  vendorId: number;
  vendors: IVendor[];
  onToggleVendor: (vendorId: number) => void;
}

const Store: FC<IStoreProps> = ({ vendorId, vendors, onToggleVendor }): JSX.Element => {
  

  useEffect(() => {
    
  }, []);

  return (
    <>
      <div data-uk-grid className="uk-background-default uk-padding uk-margin-remove uk-flex uk-flex-center">
        <div className="uk-width-1-1 uk-text-center">
          <h4 className="uk-text-large">직배송 - 경기도 부천시</h4>
        </div>
        <div className="uk-width-1-1">
          <div data-uk-grid className="uk-child-width-1-6 uk-grid-small uk-padding-small">
            {vendors.map((vendor, index) => (
              <div key={index}>
                <button className={`uk-button uk-button-${vendorId === vendor.id ? 'primary' : 'default'}`} onClick={() => {onToggleVendor(vendor.id)}}>{vendor.name}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

};

export default Store;
