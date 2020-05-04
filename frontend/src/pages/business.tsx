import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BaseLayout from '~/components/layout/base';
import BusinessFilter from '~/components/business-filter';
import StoreItem from '~/components/store-item';

interface IBusinessPageProps extends RouteComponentProps {}

const BusinessPage: FC<IBusinessPageProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <BaseLayout>
        <h1 className="uk-text-large uk-padding-small">업종으로 찾기</h1>
        <BusinessFilter />
        <div data-uk-grid className="uk-padding-small">
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
