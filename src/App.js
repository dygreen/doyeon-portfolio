import React from 'react';
import Layout from "components/layout";
import Intro from "components/section/Intro";
import Career from "components/section/Career";
import './App.css';

const App = () => {
  return (
    <Layout>
      <Intro/>
      <Career/>
    </Layout>
  );
};

export default App;
