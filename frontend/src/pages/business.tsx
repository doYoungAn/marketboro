import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BaseLayout from '~/components/layout/base';
import StoreItem from '~/components/store-item';

interface IBusinessPageProps extends RouteComponentProps {}

const BusinessPage: FC<IBusinessPageProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <BaseLayout>
        <div data-uk-grid>
          <div className="uk-width-1-2">
            <StoreItem />
          </div>
          <div className="uk-width-1-2">
            <StoreItem />
          </div>
          <div className="uk-width-1-2">
            <StoreItem />
          </div>
        </div>
      </BaseLayout>
    </>
  );

};

export default BusinessPage;
