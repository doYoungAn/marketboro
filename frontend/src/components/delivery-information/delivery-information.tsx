import React, { FC, useEffect } from 'react';

interface IDeliveryInformationProps {}

const DeliveryInformation: FC<IDeliveryInformationProps> = (): JSX.Element => {
  
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

export default DeliveryInformation;
