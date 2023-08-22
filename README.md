# PORTFOLIO
> : 안녕하세요, 꾸준하게 공부하는 프론트엔드 개발자 박도연입니다.
>
> [ 2023.08 ]
>
> 주소 : https://doyeon-portfolio.vercel.app/
> 
> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/emotion-c43bad?style=for-the-badge&logo=React&&logoColor=white">

<br/>

## Info
1. Intro
2. Career
3. Project
4. Stack
5. Education

<br/>

## Code Info
* 다크모드 : prefers-color-scheme 값을 확인 해 시스템의 컬러모드를 초기값으로 사용

  ```javascript
  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').matches && setDarkMode(true);
  },[]);
  ```

* 반응형 웹 : `max-width`, `min-height`, `rem` 등의 속성 및 단위 사용