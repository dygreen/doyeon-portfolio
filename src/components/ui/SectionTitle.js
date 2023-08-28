import React from 'react';
/** @jsxImportSource @emotion/react */

const SectionTitle = ({ children }) => {
  return (
    <h2 css={{
      fontSize: '2rem',
      fontWeight: '600',
      padding: '32px 0'
    }}>
      { children }
    </h2>
  );
};

export default SectionTitle;