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
				(주)마켓보로
			</div>
		</div>
    </>
  );

};

export default Footer;
