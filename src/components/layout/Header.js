import React, {useEffect, useState} from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Icon } from '@iconify/react';
import {PRIMARY_COLOR} from "styles/COLOR";

const Header = () => {
  // 다크 모드
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // prefers-color-scheme 값을 확인 해 시스템의 컬러모드 초기값으로 사용
    window.matchMedia('(prefers-color-scheme: dark)').matches && setDarkMode(true);
  },[])

  useEffect(() => {
    // 다크 모드 스타일링을 위한 클래스 세팅
    darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  },[darkMode])

  return (
    <header css={headerStyle}>
      <a href="/">
        <img src={"/images/logo.svg"} alt={'logo'}/>
      </a>
      <button
        type={'button'}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ?
          <Icon icon="iconamoon:mode-light"/> :
          <Icon icon="iconamoon:mode-dark-light"/>
        }
      </button>
    </header>
  );
};

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 16px;
  
  img {
    width: 40px;
    max-height: 40px;
  }
  
  button {
    svg {
      width: 30px;
      height: 30px;
      color: ${PRIMARY_COLOR};
    }
  }
`;

export default Header;