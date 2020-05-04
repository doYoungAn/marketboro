import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BaseLayout from '~/components/layout/base';

interface IBusinessPageProps extends RouteComponentProps {}

const BusinessPage: FC<IBusinessPageProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <BaseLayout>
      
      </BaseLayout>
    </>
  );

};

export default BusinessPage;
