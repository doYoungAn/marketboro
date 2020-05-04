import React, { FC, useEffect } from 'react';

interface IGoodPreviewProps {}

const GoodPreview: FC<IGoodPreviewProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin">
        <div className="uk-card-media-left uk-cover-container">
          <img src="https://vader-prod.s3.amazonaws.com/1571422973-1562867102-free-rn-5-mens-running-shoe-rbzmbn-1571422966.jpg" alt="" data-uk-cover />
          <canvas width="600" height="400"></canvas>
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">[동서산업] 축산 돼지갈비(칠레,냉동,2*3cm,1kg)</h3>
          <p>1kg/봉단가/봉</p>
          <p>17% 5,800원</p>
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
              <button className="uk-button uk-button-default">-</button>
              <button className="uk-button uk-button-default">1</button>
              <button className="uk-button uk-button-default">+</button>
            </div>
            <span>5,800원</span>
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
      {/* <div data-uk-grid>
        
      </div> */}
    </>
  );

};

export default GoodPreview;
