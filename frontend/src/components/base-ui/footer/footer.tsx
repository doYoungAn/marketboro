import React, { FC, useEffect } from 'react';

interface IFooterProps {}

const Footer: FC<IFooterProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
		<div data-uk-grid>
			<div data-uk-grid className="uk-width-1-1 uk-margin-top">
				<div className="uk-width-expand">
					<button className="uk-button uk-button-default uk-margin-right">이용약관</button>
					<button className="uk-button uk-button-default uk-margin-right">개인정보취급방침</button>
					<button className="uk-button uk-button-default uk-margin-right">사업자정보확인</button>
				</div>
				<div className="uk-width-1-3">
					<button className="uk-button uk-button-default uk-margin-right">
						<span data-uk-icon="star"></span>
						App Store
					</button>
					<button className="uk-button uk-button-default">
						<span data-uk-icon="star"></span>
						Google Play
					</button>
				</div>
			</div>
			<div data-uk-grid className="uk-width-1-1 uk-margin-top uk-margin-bottom">
				<div className="uk-width-1-1">
					(주)마켓보로 | 대표 임시성
				</div>
				<div className="uk-width-1-1 uk-margin-remove uk-text-small">
					경기도 성남시 분당구 판교로 323, 5층 | 개인정보보호책임자 : 오진영 이사(info@foodspring.co.kr)
				</div>
				<div className="uk-width-1-1 uk-margin-remove uk-text-small">
					사업자등록번호 : 479-86-00423 | 통신판매업신고 : 제2018-성남분당-0313호
				</div>
				<div className="uk-width-1-1 uk-margin-remove uk-text-small">
					(주)마켓보로는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 따라서 (주)마켓보로는 상품 거래정보 및 거래에 대하여 책임을 지지 않습니다.
				</div>
				<div className="uk-width-1-1 uk-margin-remove uk-text-small">
					Copyright©marketboro Co., Ltd. All Rights Reserved.
				</div>
			</div>
		</div>
    </>
  );

};

export default Footer;
