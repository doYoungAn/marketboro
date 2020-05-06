import React, { FC, useEffect } from 'react';

interface ILoadingProps {}

const Loading: FC<ILoadingProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid className="uk-padding-small uk-flex uk-flex-center">
        <div data-uk-spinner="ratio: 3"></div>
      </div>
    </>
  );

};

export default Loading;
