export const workData = [
  {
    id: 'main_mobile',
    title: '메인 페이지(모바일) 개발',
    pageLink: 'https://m.mtn.co.kr/',
    period: '2023.05 - 2023.08',
    describe: 'Vue로 구현된 메인 페이지를 React로 전환',
    whatDidIDo: [
      '프로젝트 구조 잡기부터 build까지 작업',
      '검색 기능(URL query string) 개발',
      '[리팩토링] 무한 스크롤 기능(React Query) 개발'
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'React Query', 'Redux Toolkit'],
    blog: [
      {
        title: '신입 프론트엔드 개발자의 입사 9개월 회고',
        link: 'https://dygreen.tistory.com/entry/%EC%8B%A0%EC%9E%85-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98-%EC%9E%85%EC%82%AC-9%EA%B0%9C%EC%9B%94-%ED%9A%8C%EA%B3%A0'
      }
    ]
  },
  {
    id: 'cms',
    title: '관리자 페이지(CMS) 개발',
    pageLink: null,
    period: '2022.11 - 2023.04',
    describe: '게시글, 배너, 연간 매출 현황 관리 등 내부 관리자들을 위한 페이지(CMS) 개발',
    whatDidIDo: [
      '기존 Vue 소스 → React로 전환',
      '전역 상태 관리를 위해 프로젝트 내 Redux Toolkit 세팅',
      '게시판 관리, 배너 관리, 통계 관리 기능 등 개발',
      '회원가입 기능 개발',
      '비밀번호 찾기(+ SMS 인증) 및 변경 기능 개발'
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'React bootstrap', 'SASS'],
    blog: [
      {
        title: '신입 프론트엔드 개발자의 입사 6개월 회고',
        link: 'https://dygreen.tistory.com/entry/%EC%8B%A0%EC%9E%85-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98-%EC%9E%85%EC%82%AC-6%EA%B0%9C%EC%9B%94-%ED%9A%8C%EA%B3%A0'
      }
    ]
  },
  {
    id: 'account',
    title: '통합로그인 페이지 개발',
    pageLink: 'https://account.mtn.co.kr/',
    period: '2022.09 - 2022.11',
    describe: '총 3개 운영 페이지의 유저들을 하나의 테이블에서 관리하기 위해 통합로그인 페이지 개발',
    whatDidIDo: [
      '통합회원 전환 과정 설계 및 기능 개발',
      '회원 정보 수정 기능 개발',
      '휴면계정 해제 기능 개발',
      '테스트 시나리오 참고해 배포 전 검수 진행',
      '프로젝트 관련 세미나 진행 (React 프로젝트 구조 및 라이프사이클 관련)',
      '[리팩토링] 편리한 유효성 검사를 위해 Formik(+ Yup) 세팅 및 Next.js로 전환'
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'SCSS'],
    blog: [
      {
        title: '신입 프론트엔드 개발자의 입사 3개월 회고',
        link: 'https://dygreen.tistory.com/entry/%EC%8B%A0%EC%9E%85-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98-%EC%88%98%EC%8A%B5%EA%B8%B0%EA%B0%84-3%EA%B0%9C%EC%9B%94-%ED%9A%8C%EA%B3%A0'
      }
    ]
  },
];
