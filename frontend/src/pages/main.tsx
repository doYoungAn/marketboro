import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '~/components/base-ui/header';
import Nav from '~/components/base-ui/nav';
import Inquiry from '~/components/base-ui/inquiry';
import Footer from '~/components/base-ui/footer';
import Slider from '~/components/slider';
import Good from '~/components/good';
import Location from '~/components/location';

interface IMainPageProps extends RouteComponentProps {}

const MainPage: FC<IMainPageProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div className="uk-container uk-container-large uk-height-1-1 uk-background-muted" style={{ overflow: 'scroll' }}>
        <Header />
        <Nav />
        <Slider />
        <Location />

        <div data-uk-grid>
          <div className="uk-width-1-4">
            <Good />
          </div>
          <div className="uk-width-1-4">
            <Good />
          </div>
          <div className="uk-width-1-4">
            <Good />
          </div>
          <div className="uk-width-1-4">
            <Good />
          </div>
          <div className="uk-width-1-4">
            <Good />
          </div>
        </div>

        <Inquiry />
        <Footer />
      </div>
    </>
  );

};

export default MainPage;
