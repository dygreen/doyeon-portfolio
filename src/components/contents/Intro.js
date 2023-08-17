import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Intro = () => {
  return (
    <section>
      <h2 css={introStyle}>
        안녕하세요.<br/><span>꾸준하게 공부하는 프론트엔드 개발자, 박도연</span>입니다.
      </h2>
    </section>
  );
};

const introStyle = css`
  font-size: 2rem;
  font-weight: 300;
  span {
    font-weight: 600;
  }
`;

export default Intro;