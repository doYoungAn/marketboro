import React, { FC, useEffect } from 'react';

interface IDeliveryInformationProps {}

const DeliveryInformation: FC<IDeliveryInformationProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid>
        <div className="uk-width-1-1">
          <div className="uk-card uk-card-default uk-card-body uk-card-small">
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">배송유형</div>
              <div className="uk-width-expand">직배송</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">배송문의</div>
              <div className="uk-width-expand">10,000원 (100,000원 이상 구매시)</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">주문마감시간</div>
              <div className="uk-width-expand">오후 5:00 까지</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">배송기간</div>
              <div className="uk-width-expand">평균 1일 소요</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">배송요일</div>
              <div className="uk-width-expand">월,화,수,목,금,토</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">배송시간</div>
              <div className="uk-width-expand">오전 2:00 ~ 오후 4:00까지</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">출고지</div>
              <div className="uk-width-expand">경기 남양주시 진전읍 금강로928번길 17 (내곡리) 동서산업</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">배송정보</div>
              <div className="uk-width-expand">배송지역이나 재고 유무에 따라 배송시간이 늦어 질 수 있습니다.</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">배송지역</div>
              <div className="uk-width-expand">서울시 (전체) , 경기도 (고양시 일산동구,고양시 일산서구,광주시,구리시,군포시,김포시,남양주시,부천시,성남시 분당구,성남시 수정구,성남시 중원구,수원시 영통구,수원시 장안구,수원시 팔달구,시흥시,안양시 동안구,안양시 만안구,의왕시,의정부시,하남시) , 인천시 (계양구,남동구,동구,미추홀구,부평구,서구,연수구,옹진군,중구)</div>
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

export default DeliveryInformation;
