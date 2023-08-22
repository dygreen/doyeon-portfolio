import React from 'react';
import {stackData} from "assets/stackData";
import DetailList from "components/ui/DetailList";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const StackDetail = () => {
  return (
    <>
      {
        stackData.map(data => (
          <div key={data.id} css={stackStyle}>
            <h3>{data.title}</h3>

            <DetailList detail={data.canDo} />
          </div>
        ))
      }
    </>
  );
};

const stackStyle = css`
  margin-bottom: 40px;
  
  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 12px;
  }
`;

export default StackDetail;