import React, { FC, useEffect } from 'react';

interface IStoreProps {}

const Store: FC<IStoreProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid className="uk-background-default uk-padding uk-margin-remove uk-flex uk-flex-center">
        <div className="uk-width-1-1 uk-text-center">
          <h4 className="uk-text-large">직배송 - 경기도 부천시</h4>
        </div>
        <div className="uk-width-1-1">
          <button className="uk-button uk-button-default uk-margin-right uk-margin-bottom">동서산업</button>
          <button className="uk-button uk-button-default uk-margin-right uk-margin-bottom">주식회사 뉴킹</button>
          <button className="uk-button uk-button-default uk-margin-right uk-margin-bottom">대명F&C</button>
          <button className="uk-button uk-button-default uk-margin-right uk-margin-bottom">올바른치킨 닭집닷컴 올식COS</button>
          <button className="uk-button uk-button-default uk-margin-right uk-margin-bottom">이너피스 양식식자재 (직배)</button>
          <button className="uk-button uk-button-default uk-margin-right uk-margin-bottom">SP유통(직배송)</button>
        </div>
      </div>
    </>
  );

};

export default Store;
