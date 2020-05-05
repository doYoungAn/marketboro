import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BaseLayout from '~/components/layout/base';
import GoodPreview from '~/components/product/good-preview';
import GoodFilter from '~/components/product/good-filter';
import GoodDetail from '~/components/product/good-detail';
import BuyInformation from '~/components/product/buy-information';
import DeliveryInformation from '~/components/product/delivery-information';
import GoodInquiry from '~/components/product/good-inquiry';

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
