import React, { FC, useEffect } from 'react';

const filters: { type: ProductFilterType, name: string }[] = [
  {
    type: 'detail',
    name: '상품설명',
  },
  {
    type: 'buy',
    name: '구매정보',
  },
  {
    type: 'delivery',
    name: '배송정보',
  },
  {
    type: 'inquiry',
    name: '상품문의',
  }
];

interface IProductFilterProps {
  selectFilterType: ProductFilterType;
  onChangeFilter: (type: ProductFilterType) => void;
}

const ProductFilter: FC<IProductFilterProps> = ({ selectFilterType, onChangeFilter }): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid className="uk-padding-small">
        <div className="uk-width-1-1">
          <div className="uk-card uk-card-default uk-card-body uk-card-small">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`uk-button uk-button-${selectFilterType === filter.type ? 'primary' : 'default'} uk-width-1-4`}
                onClick={() => {onChangeFilter(filter.type)}}>
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );

};

export default ProductFilter;
