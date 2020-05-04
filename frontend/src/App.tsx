import React, { FC, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainPage = loadable(() => import('~/pages/main'));
const GoodPage = loadable(() => import(`~/pages/good`));
const DirectPage = loadable(() => import(`~/pages/direct`));

interface IAppProps {}

const App: FC<IAppProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <Switch>
        <Route path="/main" component={MainPage} />
        <Route path="/good" component={GoodPage} />
        <Route path="/direct" component={DirectPage} />
      </Switch>
    </>
  );

};

export default App;
