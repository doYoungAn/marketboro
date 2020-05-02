import React, { FC, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainPage = loadable(() => import('./pages/main'));

interface IAppProps {}

const App: FC<IAppProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    </>
  );

};

export default App;
