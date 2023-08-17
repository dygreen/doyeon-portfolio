import React from 'react';
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main css={mainStyle}>
        <article>
          { children }
        </article>
      </main>
      <Footer/>
    </>
  );
};

const mainStyle = css`
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 72px 16px 0px;
`;

export default Layout;