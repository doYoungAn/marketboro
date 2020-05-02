import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '~/components/base-ui/header';
import Nav from '~/components/base-ui/nav';
import Inquiry from '~/components/base-ui/inquiry';
import Footer from '~/components/base-ui/footer';

interface IMainPageProps extends RouteComponentProps {}

const MainPage: FC<IMainPageProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div className="uk-container-large uk-height-1-1 uk-background-muted">
        <Header />
        <Nav />
        <Inquiry />
        <Footer />
      </div>
    </>
  );

};

export default MainPage;
