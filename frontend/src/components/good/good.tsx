import React, { FC, useEffect } from 'react';

interface IGoodProps {
  onClick: () => void
}

const Good: FC<IGoodProps> = ({ onClick }): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div className="uk-card uk-card-default" onClick={() => {onClick()}}>
        <div className="uk-card-media-top">
          <img src="https://vader-prod.s3.amazonaws.com/1571422973-1562867102-free-rn-5-mens-running-shoe-rbzmbn-1571422966.jpg" alt=""/>
        </div>
        <div className="uk-card-body uk-card-small uk-text-center">
          <p className="uk-margin-remove">동서산업</p>
          <p className="uk-margin-remove">[동서산업] 농산 양파(국내산,5줄,1번망) 15kg</p>
          <p className="uk-margin-remove">국내산,5줄,1번망(15kg)/망단가/망</p>
          <h3 className="uk-card-title">14,000원</h3>
          <button className="uk-button uk-button-default uk-width-1-1">장바구니</button>
        </div>
      </div>
    </>
  );

};

export default Good;
