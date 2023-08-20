import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PRIMARY_COLOR } from 'styles/COLOR';

const TechList = ({ tech }) => {
  return (
    <ul css={techUlStyle}>
      {
        tech.map((list, idx) => (
          <li key={idx.toString()} css={techLiStyle}>{list}</li>
        ))
      }
    </ul>
  );
};

const techUlStyle = css`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const techLiStyle = css`
  :not(:last-child) {
    margin-right: 6px;
  }

  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 6px;
  padding: 3px 8px;
  background-color: rgba(60, 125, 16, 0.1);
  color: ${PRIMARY_COLOR};
  border-radius: 3px;
`;

export default TechList;