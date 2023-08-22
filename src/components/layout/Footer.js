import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <div>
        <p>©2023 doyeon</p>
        <p>본 사이트는 포트폴리오 용도로 제작하였으며 상업적인 용도로 사용하지 않음을 밝힙니다.</p>
      </div>
    </footer>
  );
};

const footerStyle = css`
  width: 100%;
  margin-bottom: 24px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
    min-height: 80px;
    margin: 0 auto;
    padding: 0 15px;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`;

export default Footer;