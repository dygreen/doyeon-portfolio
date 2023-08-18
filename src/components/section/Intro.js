import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Icon } from '@iconify/react';
import Section from "components/ui/Section";
import {PRIMARY_COLOR} from "styles/COLOR";

const Intro = () => {
  return (
    <Section>
      <h2 css={introStyle}>
       안녕하세요.<br/><span>꾸준하게 공부하는 프론트엔드 개발자, 박도연</span>입니다.
      </h2>

      <p css={{ lineHeight: '1.5', marginBottom: '24px' }}>
        시각적으로 결과물을 접할 수 있다는 점에서 웹 프론트엔드 개발에 흥미를 가지고 꾸준히 공부하며 성장하고 있습니다. 문서로 정리하는 것을 좋아하여, 프로젝트를 진행하며 겪은 오류 해결 과정 및 기능 구현 과정 등을 블로그에 기록하며 공유하고 있습니다.
        <br/>
        <br/>
        편리한 사용성을 고려한 코드와 성능면에서 효율적인 코드로 사용자 뿐 만 아니라 동료들에게도 도움이 될 수 있는 개발자가 되는 것이 목표입니다.
      </p>

      <div css={iconBoxStyle}>
        <a href="https://github.com/dygreen" target="_blank" title={'깃허브 바로가기'} rel="noreferrer">
          <Icon icon="mdi:github" />
        </a>
        <a href="https://dygreen.tistory.com/" target="_blank" title={'티스토리 블로그 바로가기'} rel="noreferrer">
          <Icon icon="simple-icons:tistory" />
        </a>
        <a href="https://dygreen.notion.site/dygreen/9bb9bb6e91e74387b4985de6d8b74c8d" target="_blank" title={'노션 바로가기'} rel="noreferrer">
          <Icon icon="ri:notion-fill" />
        </a>
        <a href="mailto:dygreen0319@gmail.com" title={'메일 보내기'}>
          <Icon icon="mdi:gmail" />
        </a>
      </div>
    </Section>
  );
};

const introStyle = css`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 32px;
  span {
    font-weight: 600;
  }
`;

const iconBoxStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  a {
    width: 32px;
    height: 32px;
  }
  
  a:not(:last-child) {
    margin-right: 16px;
  }
  
  a:nth-child(2) {
    width: 24px;
    height: 24px;
  }
  
  svg {
    width: 100%;
    height: 100%;
    transition: all .3s;

    &:hover {
      color: ${PRIMARY_COLOR};
    }
  }
`;

export default Intro;