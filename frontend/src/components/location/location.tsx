import React, { FC, useEffect } from 'react';

interface ILocationProps {
  onToggleArea: () => void;
}

const Location: FC<ILocationProps> = ({ onToggleArea }): JSX.Element => {
  
  useEffect(() => {
    onToggleArea();
  }, []);

  return (
    <>
      <div data-uk-grid className="uk-background-default">
        <div className="uk-width-1-1 uk-text-center uk-padding uk-text-large uk-flex uk-flex-center uk-flex-middle uk-inline">
          <span data-uk-icon="location"></span>
          경기도 부천시
          <button className="uk-button uk-button-default uk-position-center-right">다른지역</button>
        </div>
      </div>
      <hr className="uk-margin-remove"></hr>
    </>
  );

};

export default Location;
