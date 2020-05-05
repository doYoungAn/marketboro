import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import _api from '~/services/api.service';
import BaseLayout from '~/components/layout/base';
import Slider from '~/components/slider';
import ProductItem from '~/components/product/item';
import Location from '~/components/location';
import Store from '~/components/store';

interface IMainPageProps extends RouteComponentProps {}

const MainPage: FC<IMainPageProps> = ({ history }): JSX.Element => {
  
  useEffect(() => {
    (async () => {
      try {
        const newProducts = await _api.getProducts();
        console.log(newProducts);
      } catch(e) {

      }
    })();
  }, []);

  return (
    <>
      <BaseLayout>
        <Slider />
        <Location />
        <Store />

        <div data-uk-grid className="uk-padding-small">
          <div className="uk-width-1-4">
            <ProductItem onClick={() => {history.push('/product/1')}} />
          </div>
          <div className="uk-width-1-4">
            <ProductItem onClick={() => {history.push('/product/1')}} />
          </div>
          <div className="uk-width-1-4">
            <ProductItem onClick={() => {history.push('/product/1')}} />
          </div>
          <div className="uk-width-1-4">
            <ProductItem onClick={() => {history.push('/product/1')}} />
          </div>
          <div className="uk-width-1-4">
            <ProductItem onClick={() => {history.push('/product/1')}} />
          </div>
        </div>
      </BaseLayout>
    </>
  );

};

export default MainPage;
