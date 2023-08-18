import React from 'react';
/** @jsxImportSource @emotion/react */

const Section = ({ children }) => {
  return (
    <section css={{
      marginBottom: '80px'
    }}>
      { children }
    </section>
  );
};

export default Section;