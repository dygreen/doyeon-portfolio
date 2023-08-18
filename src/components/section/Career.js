import React from 'react';
import Section from "components/ui/Section";
import SectionTitle from "components/ui/SectionTitle";
import CareerCard from "components/ui/CareerCard";

const Career = () => {
  return (
    <Section>
      <SectionTitle>경력</SectionTitle>
      <CareerCard
        link={'https://www.mtn.co.kr/'}
        imageSrc={'/images/mtn_logo.png'}
        company={'머니투데이방송'}
        position={'프론트엔드 개발자'}
        period={'2022.08 - 2023.08'}
      />
    </Section>
  );
};

export default Career;