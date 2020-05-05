import React, { FC, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainPage = loadable(() => import('~/pages/main'));
const ProductPage = loadable(() => import(`~/pages/product`));
const PlanPage = loadable(() => import(`~/pages/plan`));
const DirectPage = loadable(() => import(`~/pages/direct`));
const BusinessPage = loadable(() => import(`~/pages/business`));
const LocationPage = loadable(() => import(`~/pages/location`));

interface IAppProps {}

const App: FC<IAppProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <Switch>
        <Route path="/main" component={MainPage} />
        <Route path="/product/:productId" component={ProductPage} />
        <Route path="/plan" component={PlanPage} />
        <Route path="/direct" component={DirectPage} />
        <Route path="/business" component={BusinessPage} />
        <Route path="/location" component={LocationPage} />
      </Switch>
    </>
  );

};

export default App;
