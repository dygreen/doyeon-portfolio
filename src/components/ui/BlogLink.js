import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {PRIMARY_COLOR} from "styles/COLOR";

const BlogLink = ({ blog }) => {
  return (
    <div css={blogStyle}>
      {
        blog.length === 1 ?
        <p>관련된 블로그 글이에요</p> :
        <p>관련된 글이에요</p>
      }
      <ul>
        {
          blog.map(data => (
            <li>
              <a
                href={data.link}
                target="_blank"
                title={data.title}
                rel="noreferrer"
              >
                {data.title}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const blogStyle = css`
  font-size: 0.9rem;
  
  p {
    font-weight: 400;
    margin-bottom: 4px;
  }

  ul {
    position: relative;
  }
  
  li {
    ::before {
      content: "▪︎";
      position: absolute;
      left: 0px;
      display: inline-block;
      color: ${PRIMARY_COLOR};
    }
  
    padding-left: 16px;

    a {
      font-weight: 100;
      font-style: italic;
      text-decoration: underline;
      line-height: 1.5rem;

      :hover {
        font-weight: 400;
      }
    }

  }
`;

export default BlogLink;