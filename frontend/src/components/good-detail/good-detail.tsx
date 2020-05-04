import React, { FC, useEffect } from 'react';

interface IGoodDetailProps {}

const GoodDetail: FC<IGoodDetailProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid>
        <div className="uk-width-1-1">
          <div className="uk-card uk-card-default uk-card-body uk-card-small">
            상품설명 이미지칸
          </div>
        </div>
      </div>
    </>
  );

};

export default GoodDetail;
