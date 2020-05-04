import React, { FC, useEffect } from 'react';

interface IGoodInquiryProps {}

const GoodInquiry: FC<IGoodInquiryProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid>
        <div className="uk-width-1-1">
          <div className="uk-card uk-card-default uk-card-body uk-card-small">
            상품문의
          </div>
        </div>
      </div>
    </>
  );

};

export default GoodInquiry;
