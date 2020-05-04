import React, { FC, useEffect } from 'react';

interface IBuyInformationProps {}

const BuyInformation: FC<IBuyInformationProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid>
        <div className="uk-width-1-1">
          <div className="uk-card uk-card-default uk-card-body uk-card-small">
            구매정보
          </div>
        </div>
      </div>
    </>
  );

};

export default BuyInformation;
