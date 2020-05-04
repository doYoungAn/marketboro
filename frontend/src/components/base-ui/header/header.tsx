import React, { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

interface IHeaderProps {}

const Header: FC<IHeaderProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
			<div data-uk-grid className="uk-background-default uk-padding uk-flex uk-flex-middle">
				<div className="uk-width-1-4 uk-text-center">
					<h1 className="uk-heading-small">
						<NavLink to="/main">식봄</NavLink>
					</h1>
				</div>
				<div className="uk-width-1-2">
					<form action="">
						<div className="uk-inline uk-width-1-1">
							<span className="uk-form-icon uk-form-icon-flip" data-uk-icon="search"></span>
							<input className="uk-input" placeholder="빠른 직배송에 최저가 식자재를 검색해 봄!" />
						</div>
					</form>
				</div>
				<div className="uk-width-1-4">
					<div data-uk-grid className="uk-text-center uk-height-1-1">
						<div className="uk-width-1-3 uk-flex uk-flex-center uk-flex-middle">
							<span data-uk-icon="user"></span>
						</div>
						<div className="uk-width-1-3 uk-flex uk-flex-center uk-flex-middle">
							<span data-uk-icon="comments"></span>
						</div>
						<div className="uk-width-1-3 uk-flex uk-flex-center uk-flex-middle">
							<span data-uk-icon="cart"></span>
						</div>
					</div>
				</div>
			</div>
			<hr className="uk-margin-remove" />
    </>
  );

};

export default Header;
