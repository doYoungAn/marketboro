import React, { FC, useEffect } from 'react';

interface IProductFilterProps {}

const ProductFilter: FC<IProductFilterProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid className="uk-padding-small">
        <div className="uk-width-1-1">
          <div className="uk-card uk-card-default uk-card-body uk-card-small">
            <button className="uk-button uk-button-default uk-width-1-4">상품설명</button>
            <button className="uk-button uk-button-default uk-width-1-4">구매정보</button>
            <button className="uk-button uk-button-default uk-width-1-4">배송정보</button>
            <button className="uk-button uk-button-default uk-width-1-4">상품문의</button>
          </div>
        </div>
      </div>
    </>
  );

};

export default ProductFilter;
