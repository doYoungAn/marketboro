import React, { FC, useEffect } from 'react';

interface IProductDetailProps {}

const ProductDetail: FC<IProductDetailProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid className="uk-padding-small uk-animation-slide-bottom-small">
        <div className="uk-width-1-1">
          <div className="uk-card uk-card-default uk-card-body uk-card-small">
            <img src="https://s3.ap-northeast-2.amazonaws.com/gred/vendor/580/images/77_1588038488.jpg" alt=""/>
            <img src="https://s3.ap-northeast-2.amazonaws.com/gred/vendor/580/images/74_1587949088.jpg" alt=""/>
            <img src="https://s3.ap-northeast-2.amazonaws.com/gred/vendor/580/images/84_1587949109.jpg" alt=""/>
          </div>
        </div>
      </div>
    </>
  );

};

export default ProductDetail;
