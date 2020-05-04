import React, { FC, useEffect } from 'react';

interface IBusinessFilterProps {}

const BusinessFilter: FC<IBusinessFilterProps> = (): JSX.Element => {
  
  const businesses: string[] = [
    '한식',
    '중식',
    '일식',
    '수산물',
    '분식',
    '닭/오리',
    '양식',
    '패스트푸드',
    '제빵',
    '주점',
    '퓨전요리',
    '커피/음료',
    '음식배달',
    '뷔페',
    '기타',
  ];

  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid className="uk-child-width-1-5 uk-padding-small">
        {businesses.map((business, index) => (
          <div key={index}>
            <button className="uk-button uk-button-default uk-width-1-1">
              <span data-uk-icon="bolt"></span>
              {business}
            </button>
          </div>
        ))}
      </div>
    </>
  );

};

export default BusinessFilter;
