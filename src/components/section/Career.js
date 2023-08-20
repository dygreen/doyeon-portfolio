import React from 'react';
import Section from "components/ui/Section";
import SectionTitle from "components/ui/SectionTitle";
import CareerCard from 'components/ui/CareerCard';
import CareerDetail from 'components/ui/CareerDetail';
/** @jsxImportSource @emotion/react */

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

      <p css={{marginBottom: '48px'}}>
        : 대한민국 경제와 관련된 다양한 분야의 정보로 케이블 TV, MTN 뉴스, 개인 투자자를 위한 MTN W 등 다수의 뉴미디어 플랫폼에 서비스를 제공하고 있는 머니투데이방송에서 프론트엔드 개발을 담당했습니다.
      </p>

      <CareerDetail />
    </Section>
  );
};

export default Career;