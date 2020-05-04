import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BaseLayout from '~/components/layout/base';

interface IPlanPageProps extends RouteComponentProps {}

const PlanPage: FC<IPlanPageProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <BaseLayout>
      
      </BaseLayout>
    </>
  );

};

export default PlanPage;
