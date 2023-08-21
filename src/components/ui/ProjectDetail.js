import React from 'react';
import { projectData } from 'assets/projectData';
import DetailList from 'components/ui/DetailList';
import TechList from 'components/ui/TechList';
import BlogLink from 'components/ui/BlogLink';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {TEXT_DARK_COLOR, TEXT_LIGHT_COLOR} from "styles/COLOR";
import { Icon } from '@iconify/react';

const ProjectDetail = () => {
  return (
    <ul>
      {
        projectData.map(data => (
          <li
            key={data.id}
            css={data.id === 'nocapnews' ? projectDetailStyle(data.id) : projectDetailStyle()}
          >
            <a
              href={data.pageLink}
              target='_blank'
              title={`${data.id} 페이지 바로가기`}
              rel='noreferrer'
            >
              <img src={data.titleImg} alt={`${data.id} 로고`} />
              <Icon icon="radix-icons:open-in-new-window" />
            </a>

            <p>{data.period}</p>
            <p>[ 리팩토링 ] {data.refactor}</p>
            <p>{data.member}</p>
            <p>: {data.describe}</p>

            <DetailList detail={data.whatDidIDo} />

            <TechList tech={data.tech} />

            <BlogLink blog={data.article} />
          </li>
        ))
      }
    </ul>
  );
};

const projectDetailStyle = (props) => css`
  padding: 4px 16px;
  border-left: 1px solid ${TEXT_LIGHT_COLOR};
  margin-bottom: 48px;  
  
  > a {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: fit-content;
    height: ${props === 'nocapnews' ? '30px' : '20px'};
    margin-bottom: 12px;
    
    img {
      width: inherit;
      height: inherit;
      margin-right: 6px;
    }
    
    svg {
      width: 18px;
      height: 18px;
      color: ${TEXT_DARK_COLOR};
    }
  }

  > p {
    font-size: 0.9rem;
    font-weight: 100;
  }

  > p:nth-of-type(2) {
    margin-bottom: 12px;
    font-weight: 300;
  }

  > p:last-of-type {
    margin-bottom: 12px;
  }
`;

export default ProjectDetail;