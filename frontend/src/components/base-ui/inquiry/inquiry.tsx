import React, { FC, useEffect } from 'react';

interface IInquiryProps {}

const Inquiry: FC<IInquiryProps> = (): JSX.Element => {
  
  useEffect(() => {

  }, []);

  return (
    <>
        <div data-uk-grid className="uk-padding-small uk-background-default uk-column-1-2">
            <div className="uk-width-1-2">
                <div data-uk-grid>
                    <div className="uk-width-1-2">
                        <dl className="uk-description-list">
                            <dt>고객센터 (평일 9시 ~ 18시)</dt>
                            <dd>031-698-3453</dd>
                            <dd>이메일 info@foodspring.co.kr</dd>
                        </dl>
                    </div>
                    <div className="uk-width-1-4">
                        <div className="uk-card uk-card-default uk-card-small uk-card-body uk-text-center">
                            <span data-uk-icon="comment"></span>
                            <div className="uk-text-small">1:1문의</div>
                        </div>
                    </div>
                    <div className="uk-width-1-4">
                        <div className="uk-card uk-card-default uk-card-small uk-card-body uk-text-center">
                            <span data-uk-icon="commenting"></span>
                            <div className="uk-text-small">자주하는 질문</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-width-1-2">
                <div data-uk-grid>
                    <div className="uk-width-expand">
                        <dl className="uk-description-list">
                            <dt>판매자 입점 문의</dt>
                            <dd>031-698-3454</dd>
                            <dd>이메일 info@foodspring.co.kr</dd>
                        </dl>
                    </div>
                    <div className="uk-width-1-3">
                        <div className="uk-card uk-card-default uk-card-small uk-card-body uk-text-center">
                            <span data-uk-icon="link"></span>
                            <div className="uk-text-small">판매자 입점 문의</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );

};

export default Inquiry;
