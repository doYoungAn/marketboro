import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import _api from '~/services/api.service';
import BaseLayout from '~/components/layout/base';
import Slider from '~/components/slider';
import ProductItem from '~/components/product/item';
import Location from '~/components/location';
import Store from '~/components/store';
import Loading from '~/components/base-ui/loading';
import CustomError from '~/components/base-ui/error';

interface IMainPageProps extends RouteComponentProps {}

const MainPage: FC<IMainPageProps> = ({ history }): JSX.Element => {
  
  const [selectVendorId, setSelectVendorId] = useState<number>(null);
  const [vendors, setVendors] = useState<IVendor[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts();
  }, [selectVendorId]);

  const getVendors = async () => {
    try {
      const newVendors = await _api.getVendors([], false);
      console.log(newVendors);
      setVendors(newVendors);
      setSelectVendorId(newVendors[0].id);
    } catch(e) {
      setVendors([]);
      setSelectVendorId(null);
    }
  };

  const getProducts = async () => {
    try {
      if (selectVendorId === null) return;
      setIsLoading(true);
      const newProducts = await _api.getProducts(selectVendorId);
      setProducts(newProducts);
      setIsLoading(false);
    } catch(e) {
      setProducts([]);
    }
  }

  return (
    <>
      <BaseLayout>
        <Slider />
        <Location onToggleArea={() => {getVendors()}} />
        <Store vendorId={selectVendorId} vendors={vendors} onToggleVendor={(vendorId) => {setSelectVendorId(vendorId)}} />
        {
          isLoading ?
          <Loading /> :
          <div data-uk-grid className="uk-padding-small">
            {products.map((product, index) => (
              <div key={index} className="uk-width-1-4">
                <ProductItem product={product} onClickThumbnail={() => {history.push('/product/1')}} />
              </div>
            ))}
          </div>
        }
        {
          !isLoading && products.length === 0 ?
          <CustomError text="등록된 상품이 없습니다." /> :
          void 0
        }
      </BaseLayout>
    </>
  );

};

export default MainPage;
