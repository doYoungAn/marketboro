import React, { FC, useEffect, useState } from 'react';
import Comma from '~/filters/comma';

interface ISummaryProps {
  product: IProduct;
}

const Summary: FC<ISummaryProps> = ({ product }): JSX.Element => {
  
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {

  }, []);

  const minusQuantity = (): void => {
    quantity > 1 ? setQuantity(quantity - 1) : alert('수량은 1 이상이여야 합니다.');
  };

  return (
    <>
      <div data-uk-grid className="uk-padding-small">
        <div className="uk-width-1-1">
          <div data-uk-grid className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin">
            <div className="uk-card-media-left uk-cover-container">
              <img src={product ? product.thumbnail : ''} alt="" data-uk-cover />
              <canvas width="600" height="400"></canvas>
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">[{product ? product.vendor.name : void 0}] {product ? product.name : void 0}</h3>
              <p>1kg/봉단가/봉</p>
              <p>{product ? Math.floor(product.price / product.salePrice * 10) : void 0}% {product ? Comma(product.salePrice) : ''}원</p>
              <hr/>
              <div data-uk-grid className="uk-margin-remove-top">
                <div className="uk-width-1-4">배송유형</div>
                <div className="uk-width-expand">직배송 | 평균 1일 소요</div>
              </div>
              <div data-uk-grid className="uk-margin-remove-top">
                <div className="uk-width-1-4">배송비</div>
                <div className="uk-width-expand">10,000원</div>
              </div>
              <div data-uk-grid className="uk-margin-remove-top">
                <div className="uk-width-1-4">주문마감시간</div>
                <div className="uk-width-expand">오후 5:00 까지</div>
              </div>
              <hr/>
              <div className="uk-flex uk-flex-between">
                <div className="uk-flex">
                  <button className="uk-button uk-button-default" onClick={() => {minusQuantity()}}>-</button>
                  <button className="uk-button uk-button-default">{quantity}</button>
                  <button className="uk-button uk-button-default" onClick={() => {setQuantity(quantity + 1)}}>+</button>
                </div>
                <span>{product ? Comma(product.salePrice * quantity) : void 0}원</span>
              </div>
              <div className="uk-flex uk-flex-between uk-margin-top">
                <button className="uk-button uk-button-default">
                  <span data-uk-icon="star"></span>
                </button>
                <button className="uk-width-1-3 uk-button uk-button-default">장바구니</button>
                <button className="uk-width-1-3 uk-button uk-button-default">바로구매</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default Summary;
