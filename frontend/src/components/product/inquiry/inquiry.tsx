import React, { FC, useEffect } from 'react';

interface IProductInquiryProps {}

const ProductInquiry: FC<IProductInquiryProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <div data-uk-grid className="uk-padding-small">
        <div className="uk-width-1-1">
          <div className="uk-card uk-card-default uk-card-body uk-card-small">
          <h1 className="uk-heading-small uk-heading-divider uk-text-large">상품문의</h1>
          <table className="uk-table uk-table-hover uk-table-divider">
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>답변상태</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>제품 상태는 대체적으로 어떠한가요?</td>
                <td>O</td>
                <td>관리자</td>
                <td>2020-05-01</td>
              </tr>
            </tbody>
        </table>
          </div>
        </div>
      </div>
    </>
  );

};

export default ProductInquiry;
