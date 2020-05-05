import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BaseLayout from '~/components/layout/base';
import Header from '~/components/base-ui/header';
import Nav from '~/components/base-ui/nav';
import Inquiry from '~/components/base-ui/inquiry';
import Footer from '~/components/base-ui/footer';
import Slider from '~/components/slider';
import Good from '~/components/product/good';
import Location from '~/components/location';
import Store from '~/components/store';

interface IMainPageProps extends RouteComponentProps {}

const MainPage: FC<IMainPageProps> = ({ history }): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <BaseLayout>
        <Slider />
        <Location />
        <Store />

        <div data-uk-grid className="uk-padding-small">
          <div className="uk-width-1-4">
            <Good onClick={() => {history.push('/good')}} />
          </div>
          <div className="uk-width-1-4">
            <Good onClick={() => {history.push('/good')}} />
          </div>
          <div className="uk-width-1-4">
            <Good onClick={() => {history.push('/good')}} />
          </div>
          <div className="uk-width-1-4">
            <Good onClick={() => {history.push('/good')}} />
          </div>
          <div className="uk-width-1-4">
            <Good onClick={() => {history.push('/good')}} />
          </div>
        </div>
      </BaseLayout>
    </>
  );

};

export default MainPage;
