import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BaseLayout from '~/components/layout/base';
import GoodPreview from '~/components/good-preview';
import GoodFilter from '~/components/good-filter';
import GoodDetail from '~/components/good-detail';
import BuyInformation from '~/components/buy-information';
import DeliveryInformation from '~/components/delivery-information';
import GoodInquiry from '~/components/good-inquiry';

interface IGoodPageProps extends RouteComponentProps {}

const GoodPage: FC<IGoodPageProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <BaseLayout>
        <GoodPreview />
        <GoodFilter />
        <GoodDetail />
        <BuyInformation />
        <DeliveryInformation />
        <GoodInquiry />
      </BaseLayout>
    </>
  );

};

export default GoodPage;
