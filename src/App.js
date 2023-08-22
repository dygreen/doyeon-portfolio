import React from 'react';
import Layout from "components/layout";
import Intro from "components/section/Intro";
import Career from "components/section/Career";
import './App.css';
import Project from 'components/section/Project';
import Stack from "components/section/Stack";
import Education from "components/section/Education";

const App = () => {
  return (
    <Layout>
      <Intro />
      <Career />
      <Project />
      <Stack />
      <Education />
    </Layout>
  );
};

export default App;
