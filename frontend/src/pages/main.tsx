import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import _api from '~/services/api.service';
import BaseLayout from '~/components/layout/base';
import Slider from '~/components/slider';
import ProductItem from '~/components/product/item';
import Location from '~/components/location';
import Store from '~/components/store';

interface IMainPageProps extends RouteComponentProps {}

const MainPage: FC<IMainPageProps> = ({ history }): JSX.Element => {
  
  const [selectVendorId, setSelectVendorId] = useState<number>(1000);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const newProducts = await _api.getProducts(1000);
        console.log(newProducts);
        setProducts(newProducts);
      } catch(e) {

      }
    })();
  }, []);

  return (
    <>
      <BaseLayout>
        <Slider />
        <Location />
        <Store vendorId={selectVendorId} onToggleVendor={(vendorId) => {setSelectVendorId(vendorId)}} />
        <div data-uk-grid className="uk-padding-small">
          {products.map((product, index) => (
            <div key={index} className="uk-width-1-4">
              <ProductItem product={product} onClickThumbnail={() => {history.push('/product/1')}} />
            </div>
          ))}
        </div>
      </BaseLayout>
    </>
  );

};

export default MainPage;
