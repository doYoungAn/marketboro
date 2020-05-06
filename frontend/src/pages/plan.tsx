import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import _api from '~/services/api.service';
import BaseLayout from '~/components/layout/base';

interface IPlanPageProps extends RouteComponentProps {}

const PlanPage: FC<IPlanPageProps> = (): JSX.Element => {
  
  useEffect(() => {
    (async () => {
      try {
        const newPlans = await _api.getPlans();
        console.log(newPlans);
      } catch(e) {

      }
    })();
  }, []);

  return (
    <>
      <BaseLayout>
        <h1 className="uk-text-large uk-padding-small">식봄 기획전</h1>
        <div data-uk-grid className="uk-padding-small">
          <div className="uk-width-1-2">
            <img style={{ width: '100%', height: 200 }} src="https://content.foodspring.co.kr/admin/images/97_035046804997_0350468049.png" alt=""/>
          </div>
          <div className="uk-width-1-2">
            <img style={{ width: '100%', height: 200 }} src="https://content.foodspring.co.kr/admin/images/97_035046804997_0350468049.png" alt=""/>
          </div>
          <div className="uk-width-1-2">
            <img style={{ width: '100%', height: 200 }} src="https://content.foodspring.co.kr/admin/images/97_035046804997_0350468049.png" alt=""/>
          </div>
          <div className="uk-width-1-2">
            <img style={{ width: '100%', height: 200 }} src="https://content.foodspring.co.kr/admin/images/97_035046804997_0350468049.png" alt=""/>
          </div>
        </div>
      </BaseLayout>
    </>
  );

};

export default PlanPage;
