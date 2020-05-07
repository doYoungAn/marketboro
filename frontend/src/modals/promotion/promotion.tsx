import React, { FC, useEffect } from 'react';
import { IBaseModalProps } from 'fancy-react-modal';

export interface IPromotionModalProps extends IBaseModalProps<IPromotionModalResult> {}

export interface IPromotionModalResult {}

const PromotionModal: FC<IPromotionModalProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div>
        <div data-uk-grid>
          <div className="uk-width-1-1">
            <img src="https://www.foodspring.co.kr/application/views/desktop/__assets/img/banner/2020_04_28_01//p_event_0430_1.png" />
          </div>
        </div>
      </div>
    </>
  );

};

export default PromotionModal;
