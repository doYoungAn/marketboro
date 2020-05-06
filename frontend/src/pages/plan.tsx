import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import _api from '~/services/api.service';
import BaseLayout from '~/components/layout/base';

interface IPlanPageProps extends RouteComponentProps {}

const PlanPage: FC<IPlanPageProps> = (): JSX.Element => {
  
  const [plans, setPlans] = useState<IPlan[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const newPlans = await _api.getPlans();
        console.log(newPlans);
        setPlans(newPlans);
      } catch(e) {

      }
    })();
  }, []);

  return (
    <>
      <BaseLayout>
        <h1 className="uk-text-large uk-padding-small">식봄 기획전</h1>
        <div data-uk-grid className="uk-padding-small">
          {plans.map((plan, index) => (
            <div key={index} className="uk-width-1-2">
              <img className="uk-border-rounded" style={{ width: '100%', height: 200 }} src={plan.thumbnail} alt=""/>
            </div>  
          ))}
        </div>
      </BaseLayout>
    </>
  );

};

export default PlanPage;
