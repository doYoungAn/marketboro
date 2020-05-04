import React, { FC, useEffect } from 'react';

interface IBuyInformationProps {}

const BuyInformation: FC<IBuyInformationProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid>
        <div className="uk-width-1-1">
          <div className="uk-card uk-card-default uk-card-body uk-card-small">
            <h1 className="uk-heading-small uk-heading-divider uk-text-large">반품 / 교환정보</h1>
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">판매자명</div>
              <div className="uk-width-expand">동서산업</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">고객문의 대표번호</div>
              <div className="uk-width-expand">010-7356-9199</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">반품/교환 배송비</div>
              <div className="uk-width-expand">반품 배송비 단순 변심으로 인함 반품시 왕복 배송비 20,000원은 고객님 부담입니다. 교환 배송비 단순 교환, 주문 실수시 10,000원</div>
            </div>


            <h1 className="uk-heading-small uk-heading-divider uk-text-large">상품정보제공고시</h1>
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">포장단위별 용량(중량)</div>
              <div className="uk-width-expand">상품상세 참조</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">포장단위별 수량</div>
              <div className="uk-width-expand">상품상세 참조</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">포장단위별 크기</div>
              <div className="uk-width-expand">상품상세 참조</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">제조연월일(포장일 또는 생산연도)</div>
              <div className="uk-width-expand">상품상세 참조</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">유통기한 또는 품질유지기한</div>
              <div className="uk-width-expand">상품상세 참조</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">생산자</div>
              <div className="uk-width-expand">상품상세 참조</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">원산지</div>
              <div className="uk-width-expand">상품상세 참조</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">관련법상 표시사항</div>
              <div className="uk-width-expand">상품상세 참조</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">상품구성</div>
              <div className="uk-width-expand">상품상세 참조</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">보관방법 또는 취급방법</div>
              <div className="uk-width-expand">상품상세 참조</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">소비자 상담 관련 전화번호</div>
              <div className="uk-width-expand">상품상세 참조</div>
            </div>

            <h1 className="uk-heading-small uk-heading-divider uk-text-large">판매자정보</h1>
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">판매자 상호</div>
              <div className="uk-width-expand">동서산업</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">사업장 소재지</div>
              <div className="uk-width-expand">대전 대덕구 평촌1길 37 (신탄진동, 미주산업(주)) 신탄진동</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">연락처</div>
              <div className="uk-width-expand">010-7356-9199</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">사업장 등록번호</div>
              <div className="uk-width-expand">317-81-16544</div>
            </div>
            <hr className="uk-margin-remove" />
            <div data-uk-grid className="uk-margin-remove-top">
              <div className="uk-width-1-4">통신판매 신고번호</div>
              <div className="uk-width-expand">제2020-대전대덕-0032호</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default BuyInformation;
