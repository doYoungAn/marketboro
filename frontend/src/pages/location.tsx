import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BaseLayout from '~/components/layout/base';
import StoreItem from '~/components/store-item';

interface ILocationPageProps extends RouteComponentProps {}

const LocationPage: FC<ILocationPageProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <BaseLayout>
        <h1 className="uk-text-large uk-padding-small">지역으로 찾기</h1>
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

export default LocationPage;
