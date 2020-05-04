import React, { FC, useEffect } from 'react';

interface INavProps {}

const Nav: FC<INavProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
        <div data-uk-grid className="uk-background-default uk-padding uk-margin-remove">
            <div className="uk-width-1-4 uk-text-center">
                <span data-uk-icon="menu"></span>
                전체 카테고리
            </div>
            <div className="uk-width-1-2 uk-text-center">
                <ul className="uk-breadcrumb">
                    <li><a href="">식봄 기획전</a></li>
                    <li><a href="">직배송 업체</a></li>
                    <li><a href="">업종 찾기</a></li>
                    <li><a href="">지역 찾기</a></li>
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