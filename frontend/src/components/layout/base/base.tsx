import React, { FC, useEffect } from 'react';
import Header from '~/components/base-ui/header';
import Nav from '~/components/base-ui/nav';
import Inquiry from '~/components/base-ui/inquiry';
import Footer from '~/components/base-ui/footer';

interface IBaseLayoutProps {}

const BaseLayout: FC<IBaseLayoutProps> = ({ children }): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div className="uk-container uk-container-large uk-height-1-1 uk-background-muted uk-padding-remove" style={{ overflow: 'scroll' }}>
        <Header />
        <Nav />
        {children}
        {/* <Slider />
        <Location />
        <Store /> */}

        {/* <div data-uk-grid>
          <div className="uk-width-1-4">
            <Good onClick={() => {history.push('/good/1000')}} />
          </div>
          <div className="uk-width-1-4">
            <Good onClick={() => {history.push('/good/1000')}} />
          </div>
          <div className="uk-width-1-4">
            <Good onClick={() => {history.push('/good/1000')}} />
          </div>
          <div className="uk-width-1-4">
            <Good onClick={() => {history.push('/good/1000')}} />
          </div>
          <div className="uk-width-1-4">
            <Good onClick={() => {history.push('/good/1000')}} />
          </div>
        </div> */}

        <Inquiry />
        <Footer />
      </div>
    </>
  );

};

export default BaseLayout;
