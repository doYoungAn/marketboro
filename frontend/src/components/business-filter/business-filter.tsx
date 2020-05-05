import React, { FC, useEffect, useState } from 'react';
import _api from '~/services/api.service';

interface IBusinessFilterProps {}

const BusinessFilter: FC<IBusinessFilterProps> = (): JSX.Element => {

  const [businesses, setBusinesses] = useState<IBusiness[]>([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      console.log('isin?')
      const newBusinesses: IBusiness[] = await _api.getBusinesses();
      console.log(newBusinesses)
      setBusinesses(newBusinesses);
    } catch(e) {
      console.log('ee', e)
    }
  }

  return (
    <>
      <div data-uk-grid className="uk-child-width-1-5 uk-grid-small uk-padding-small">
        {businesses.map((business, index) => (
          <div key={index}>
            <button className="uk-button uk-button-default uk-width-1-1">
              <span data-uk-icon="bolt"></span>
              {business.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );

};

export default BusinessFilter;
