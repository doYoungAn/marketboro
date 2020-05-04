import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BaseLayout from '~/components/layout/base';

interface ILocationPageProps extends RouteComponentProps {}

const LocationPage: FC<ILocationPageProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <BaseLayout>
      
      </BaseLayout>
    </>
  );

};

export default LocationPage;
