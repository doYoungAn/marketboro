import React, { FC, useEffect } from 'react';

interface IStoreItemProps {}

const StoreItem: FC<IStoreItemProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div className="uk-card uk-card-default uk-card-body uk-card-small uk-animation-slide-bottom">
        <h3 className="uk-card-title">더착한푸드몰</h3>
        <p>다양한 상품! 빠른배송! 종합 식자재 유통사 더착한푸드몰. 월, 공휴일 다음날은 11시, 수~금요일은 오후2시까지 주문건에 대해 택배로 당일발송을 원칙으로 합니다.</p>
        <span className="uk-badge uk-margin-right uk-margin-bottom">한식</span>
        <span className="uk-badge uk-margin-right uk-margin-bottom">한식</span>
        <span className="uk-badge uk-margin-right uk-margin-bottom">한식</span>
        <span className="uk-badge uk-margin-right uk-margin-bottom">한식</span>
        <span className="uk-badge uk-margin-right uk-margin-bottom">한식</span>
        <span className="uk-badge uk-margin-right uk-margin-bottom">한식</span>
        <span className="uk-badge uk-margin-right uk-margin-bottom">한식</span>
        <span className="uk-badge uk-margin-right uk-margin-bottom">한식</span>
        <span className="uk-badge uk-margin-right uk-margin-bottom">한식</span>
        <span className="uk-badge uk-margin-right uk-margin-bottom">한식</span>
        <span className="uk-badge uk-margin-right uk-margin-bottom">한식</span>
        <span className="uk-badge uk-margin-right uk-margin-bottom">한식</span>
      </div>
    </>
  );

};

export default StoreItem;
