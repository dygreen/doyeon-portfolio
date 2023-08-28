import React from 'react';
import Section from 'components/ui/Section';
import SectionTitle from 'components/ui/SectionTitle';
import ProjectDetail from 'components/ui/ProjectDetail';
/** @jsxImportSource @emotion/react */

const Project = () => {
  return (
    <Section>
      <SectionTitle>프로젝트</SectionTitle>
      
      <p css={{marginBottom: '48px'}}>
        : 사이드 프로젝트를 진행하며 개인적으로 적용해보고 싶은 기술 스택을 사용해보고, 협업 과정에서 발생하는 다양한 이슈들에 대처하는 경험을 통해 성장할 수 있었습니다.
      </p>

      <ProjectDetail />
    </Section>
  );
};

export default Project;