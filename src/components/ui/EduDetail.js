import React from 'react';
import {eduData} from "assets/eduData";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const EduDetail = () => {
  return (
    <>
      {
        eduData.map(data => (
          <div key={data.id} css={eduDetailStyle}>
            <h3>{data.title}</h3>
            <p>{data.period}</p>
            {data.describe && <p>{data.describe}</p>}
          </div>
        ))
      }
    </>
  );
};

const eduDetailStyle = css`
  margin-bottom: 48px;
  
  h3 {
    font-weight: 500;
  }

  p:first-of-type {
    font-size: 0.9rem;
    font-weight: 100;
    margin-bottom: 8px;
  }

  p:last-of-type {
    font-size: 0.9rem;
    margin-bottom: 16px;
  }
`;

export default EduDetail;