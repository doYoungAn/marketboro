import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BaseLayout from '~/components/layout/base';
import ProductSummary from '~/components/product/summary';
import ProductFilter from '~/components/product/filter';
import ProductDetail from '~/components/product/detail';
import BuyInfo from '~/components/product/buy-info';
import DeliveryInfo from '~/components/product/delivery-info';
import ProductInquiry from '~/components/product/inquiry';

interface IGoodPageProps extends RouteComponentProps {}

const GoodPage: FC<IGoodPageProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <BaseLayout>
        <ProductSummary />
        <ProductFilter />
        <ProductDetail />
        <BuyInfo />
        <DeliveryInfo />
        <ProductInquiry />
      </BaseLayout>
    </>
  );

};

export default GoodPage;
