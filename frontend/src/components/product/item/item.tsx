import React, { FC, useEffect } from 'react';
import Filter from '~/filters';

interface IProductItemProps {
  onClickThumbnail: () => void;
  product: IProduct;
}

const ProductItem: FC<IProductItemProps> = ({ onClickThumbnail, product }): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top" onClick={() => {onClickThumbnail()}}>
          <img src={product.thumbnail} alt=""/>
        </div>
        <div className="uk-card-body uk-card-small uk-text-center">
          <p className="uk-margin-remove">{product.vendor.name}</p>
          <p className="uk-margin-remove">[{product.vendor.name}] {product.name}</p>
          <p className="uk-margin-remove">국내산,5줄,1번망(15kg)/망단가/망</p>
          <h3 className="uk-card-title">{Filter.comma(product.salePrice)}원</h3>
          <button className="uk-button uk-button-default uk-width-1-1">장바구니</button>
        </div>
      </div>
    </>
  );

};

export default ProductItem;
