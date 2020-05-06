import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import _api from '~/services/api.service';
import BaseLayout from '~/components/layout/base';
import BusinessFilter from '~/components/business-filter';
import Vendor from '~/components/vendor';

interface IBusinessPageProps extends RouteComponentProps {}

const BusinessPage: FC<IBusinessPageProps> = (): JSX.Element => {
  
  const [vendors, setVendors] = useState<IVendor[]>([]); 
  const [selectBusinessIds, setSelectBusinessIds] = useState<number[]>([1]);

  useEffect(() => {
    console.log('비지니스 아이디 변경', selectBusinessIds)
    getVendors();
  }, [selectBusinessIds]);

  const getVendors = async () => {
    try {
      const newVendors = await _api.getVendors(selectBusinessIds);
      setVendors(newVendors);
    } catch(e) {

    }
  }

  const onToggleBusiness = (businessId: number) => {
    if (!selectBusinessIds.includes(businessId)) {
      setSelectBusinessIds([...selectBusinessIds, businessId]);
    } else {
      selectBusinessIds.splice(selectBusinessIds.indexOf(businessId), 1);
      setSelectBusinessIds([...selectBusinessIds]);
    }
  }

  return (
    <>
      <BaseLayout>
        <h1 className="uk-text-large uk-padding-small">업종으로 찾기</h1>
        <BusinessFilter selectBusinessIds={selectBusinessIds} onToggleBusiness={onToggleBusiness} />
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

export default BusinessPage;
