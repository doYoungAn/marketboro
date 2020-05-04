import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BaseLayout from '~/components/layout/base';
import GoodPreview from '~/components/good-preview';

interface IGoodPageProps extends RouteComponentProps {}

const GoodPage: FC<IGoodPageProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <BaseLayout>
        <GoodPreview />
      </BaseLayout>
    </>
  );

};

export default GoodPage;
