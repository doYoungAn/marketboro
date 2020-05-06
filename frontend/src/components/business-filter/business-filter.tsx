import React, { FC, useEffect, useState } from 'react';
import _api from '~/services/api.service';

interface IBusinessFilterProps {
  selectBusinessIds: number[];
  onToggleBusiness: (businessId: number) => void;
}

const BusinessFilter: FC<IBusinessFilterProps> = ({ selectBusinessIds, onToggleBusiness }): JSX.Element => {

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
            <button className={`uk-button uk-button-${selectBusinessIds.includes(business.id) ? 'primary' : 'default'} uk-width-1-1`} onClick={() => {onToggleBusiness(business.id)}}>
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
