import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BaseLayout from '~/components/layout/base';

interface IDirectPageProps extends RouteComponentProps {}

const DirectPage: FC<IDirectPageProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <BaseLayout>
      
      </BaseLayout>
    </>
  );

};

export default DirectPage;
