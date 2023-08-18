import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {TEXT_LIGHT_COLOR, PRIMARY_COLOR} from "styles/COLOR";

const CareerCard = ({ link, imageSrc, company, position, period }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      title={company} 
      rel="noreferrer" 
      css={cardStyle}
    >
      <div>
        <img src={imageSrc} alt={'mtn logo'}/>
      </div>
      <h3>{company}</h3>
      <p>{position}</p>
      <p>{period}</p>
    </a>
  );
};

const cardStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 306px;
  width: 100%;
  height: 170px;
  padding: 18px;
  border-radius: 4px;
  border: 1px solid ${TEXT_LIGHT_COLOR};
  transition: all .3s;

  div {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }

  img {
    width: fit-content;
    height: 20px;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  &:hover {
    color: ${PRIMARY_COLOR};
    border: 1px solid ${PRIMARY_COLOR};
  }
`;

export default CareerCard;