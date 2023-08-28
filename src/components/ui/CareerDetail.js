import React from 'react';
import { workData } from 'assets/workData';
import DetailList from 'components/ui/DetailList';
import TechList from 'components/ui/TechList';
import BlogLink from 'components/ui/BlogLink';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {TEXT_LIGHT_COLOR, TEXT_DARK_COLOR, PRIMARY_COLOR} from "styles/COLOR";

const CareerDetail = () => {
  return (
    <ul>
      {
        workData.map(data => (
          <li key={data.id} css={careerDetailStyle}>
            {
              data.pageLink !== null ?
              <a
                href={data.pageLink}
                target='_blank'
                title={`${data.id} 페이지 바로가기`}
                rel="noreferrer"
              >
                <h3>{data.title}</h3>
              </a> :
              <h3>{data.title}</h3>
            }
            <p>{data.period}</p>
            <p>{data.describe}</p>

            <DetailList detail={data.whatDidIDo} />

            <TechList tech={data.tech} />

            <BlogLink blog={data.blog} />
          </li>
        ))
      }
    </ul>
  );
};

const careerDetailStyle = css`
  padding: 4px 16px;
  border-left: 1px solid ${TEXT_LIGHT_COLOR};
  margin-bottom: 60px;
  
  h3 {
    font-weight: 500;
    margin-bottom: 4px;
  }

  a {
    display: inline-block;
    h3 {
      border-bottom: 1px solid ${TEXT_DARK_COLOR};
      : hover {
        color: ${PRIMARY_COLOR};
        border-bottom: 1px solid ${PRIMARY_COLOR};
      }
    }
  }

  > p:first-of-type {
    font-size: 0.9rem;
    font-weight: 100;
    margin-bottom: 8px;
  }

  > p:last-of-type {
    font-size: 0.9rem;
    margin-bottom: 16px;
  }
`;

export default CareerDetail;