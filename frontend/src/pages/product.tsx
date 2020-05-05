import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import _api from '~/services/api.service';
import BaseLayout from '~/components/layout/base';
import ProductSummary from '~/components/product/summary';
import ProductFilter from '~/components/product/filter';
import ProductDetail from '~/components/product/detail';
import BuyInfo from '~/components/product/buy-info';
import DeliveryInfo from '~/components/product/delivery-info';
import ProductInquiry from '~/components/product/inquiry';

interface IGoodPageProps extends RouteComponentProps<{productId?: string}> {}

const GoodPage: FC<IGoodPageProps> = ({ match }): JSX.Element => {
  
  const [selectFilterType, setSelectFilterType] = useState<ProductFilterType>('detail');

  useEffect(() => {
    (async () => {
      try {
        const productId: number = parseInt(match.params.productId);
        if (isNaN(productId)) throw('invalid productId');
        const newProduct = await _api.getProductById(productId);
        console.log(newProduct);
      } catch(e) {

      }
    })();
  }, []);

  return (
    <>
      <BaseLayout>
        <ProductSummary />
        <ProductFilter selectFilterType={selectFilterType} onChangeFilter={(type: ProductFilterType) => {setSelectFilterType(type)}} />
        {
          {
            'detail':   <ProductDetail />,
            'buy':      <BuyInfo />,
            'delivery': <DeliveryInfo />,
            'inquiry':  <ProductInquiry />
          }[selectFilterType]
        }
      </BaseLayout>
    </>
  );

};

export default GoodPage;
