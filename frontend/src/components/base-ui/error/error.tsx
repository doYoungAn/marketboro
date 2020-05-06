import React, { FC, useEffect } from 'react';

interface IErrorProps {
  text?: string;
}

const Error: FC<IErrorProps> = ({ text = '' }): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid className="uk-padding-small uk-text-center">
        <div className="uk-width-1-1">
          <div className="uk-card uk-card-default uk-card-body">
            <span data-uk-icon="warning"></span>
            <div className="uk-margin-top">{text}</div>
          </div>
        </div>
      </div>
    </>
  );

};

export default Error;
