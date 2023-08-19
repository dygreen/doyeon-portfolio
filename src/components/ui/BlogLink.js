import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {PRIMARY_COLOR} from "styles/COLOR";

const BlogLink = ({ blog }) => {
  return (
    <div css={blogStyle}>
      <p>관련된 블로그 글이에요</p>
      <ul>
        <li>
          <a href={blog.link} target="_blank" title={blog.title} rel="noreferrer">{blog.title}</a>
        </li>
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
    }
  }
`;

export default BlogLink;