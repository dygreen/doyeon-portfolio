import React from 'react';
import Section from 'components/ui/Section';
import SectionTitle from 'components/ui/SectionTitle';
import ProjectDetail from 'components/ui/ProjectDetail';

const Project = () => {
  return (
    <Section>
      <SectionTitle>프로젝트</SectionTitle>
      
      <ProjectDetail />
    </Section>
  );
};

export default Project;