import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import _api from '~/services/api.service';
import BaseLayout from '~/components/layout/base';
import Vendor from '~/components/vendor';

interface ILocationPageProps extends RouteComponentProps {}

const LocationPage: FC<ILocationPageProps> = (): JSX.Element => {
  
  const [vendors, setVendors] = useState<IVendor[]>([]); 

  useEffect(() => {
    (async () => {
      try {
        const newVendors = await _api.getVendors([]);
        setVendors(newVendors);
      } catch(e) {

      }
    })();
  }, []);

  return (
    <>
      <BaseLayout>
        <h1 className="uk-text-large uk-padding-small">지역으로 찾기</h1>
        <div data-uk-grid className="uk-padding-small">
          {vendors.map((vendor, index) => (
            <div key={index} className="uk-width-1-2">
              <Vendor vendor={vendor} />
            </div>
          ))}
        </div>
      </BaseLayout>
    </>
  );

};

export default LocationPage;
