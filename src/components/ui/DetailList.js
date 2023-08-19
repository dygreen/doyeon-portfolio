import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {PRIMARY_COLOR} from "styles/COLOR";

const DetailList = ({ detail }) => {
  return (
    <ul css={detailUlStyle}>
      {
        detail.map((list, idx) => (
          <li key={idx.toString()} css={detailLiStyle}>{list}</li>
        ))
      }
    </ul>
  );
};

const detailUlStyle = css`
  position: relative;
  margin-bottom: 12px;
  font-size: 0.9rem;
  line-height: 1.4rem;
`;

const detailLiStyle = css`
  ::before {
    content: "▪︎";
    position: absolute;
    left: 0px;
    display: inline-block;
    color: ${PRIMARY_COLOR};
  }

  padding-left: 16px;
`;

export default DetailList;