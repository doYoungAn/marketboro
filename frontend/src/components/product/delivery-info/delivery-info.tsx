import React, { FC, useEffect } from 'react';

interface IDeliveryInfoProps {
  product: IProduct;
}

const DeliveryInfo: FC<IDeliveryInfoProps> = ({ product }): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid className="uk-padding-small uk-animation-slide-bottom-small">
        <div className="uk-width-1-1">
          <div className="uk-card uk-card-default uk-card-body uk-card-small">
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">배송유형</div>
              <div className="uk-width-expand">{product.delivery.type}</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">배송문의</div>
              <div className="uk-width-expand">{product.delivery.inquiry}</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">주문마감시간</div>
              <div className="uk-width-expand">{product.delivery.orderClose}</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">배송기간</div>
              <div className="uk-width-expand">{product.delivery.period}</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">배송요일</div>
              <div className="uk-width-expand">{product.delivery.day}</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">배송시간</div>
              <div className="uk-width-expand">{product.delivery.time}</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">출고지</div>
              <div className="uk-width-expand">{product.delivery.place}</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">배송정보</div>
              <div className="uk-width-expand">{product.delivery.description}</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">배송지역</div>
              <div className="uk-width-expand">{product.delivery.area}</div>
            </div>

            <div className="uk-section uk-section-muted uk-margin-top uk-section-small">
              <div className="uk-container">
                <h3>주의사항</h3>
                <ul className="uk-list uk-list-bullet">
                  <li>반드시 배송받을 주소와 연락처를 확인해주시기 바랍니다.</li>
                  <li>택배배송의 경우, 부정확한 주소 또는 연락처 미기입으로 인한 반송은 구매자에게 왕복 택배비가 부과될 수 있습니다.</li>
                  <li>직배송은 배송 여건에 따라 택배로 변경 배송될 수 있습니다.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );

};

export default DeliveryInfo;
