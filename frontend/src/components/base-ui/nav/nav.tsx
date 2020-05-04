import React, { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

interface INavProps {}

const Nav: FC<INavProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
        <div data-uk-grid className="uk-background-default uk-padding-small uk-margin-remove">
            <div className="uk-width-1-4 uk-text-center">
                <span data-uk-icon="menu"></span>
                전체 카테고리
            </div>
            <div className="uk-width-1-2 uk-text-center">
                <ul className="uk-breadcrumb">
                    <li>
                        <NavLink to="/plan">식봄 기획전</NavLink>
                    </li>
                    <li>
                        <NavLink to="/direct">직배송 업체</NavLink>
                    </li>
                    <li>
                        <NavLink to="/business">업종찾기</NavLink>
                    </li>
                    <li>
                        <NavLink to="/location">지역 찾기</NavLink>
                    </li>
                </ul>
            </div>
            <div className="uk-width-1-4 uk-text-center">
                로그인/회원가입
            </div>
        </div>
    </>
  );

};

export default Nav;
