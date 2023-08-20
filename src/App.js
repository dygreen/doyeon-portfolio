import React from 'react';
import Layout from "components/layout";
import Intro from "components/section/Intro";
import Career from "components/section/Career";
import './App.css';
import Project from 'components/section/Project';

const App = () => {
  return (
    <Layout>
      <Intro />
      <Career />
      <Project />
    </Layout>
  );
};

export default App;
