import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IMainPageProps extends RouteComponentProps {}

const MainPage: FC<IMainPageProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
        <div>
            main page!!!
        </div>
    </>
  );

};

export default MainPage;
