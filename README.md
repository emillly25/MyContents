# 🎬 My Contents

Log your memorable contents any time✨ <br>
Service Link: https://my-content00.herokuapp.com/

## 🔗1. 서비스 소개

- 본인이 인상깊게 본 여러 콘텐츠(드라마, 영화, 책) 에 대해 간단한 감상평을 기록해 두고 장르별로 필터링해서 기록들을 모아 볼 수 있는 앱<br><br>

### 🔗1-1. 개발하게 된 배경<br>

- 너무 많은 콘텐츠를 접하다보니, 진짜 재밌었다고 느꼈던 콘텐츠도 조금만 시간이 지나면 기억이 잘 안날때가 많았다. 혼자만의 추억거리를 만들기 위해 이런 콘텐츠 기록들을 일기처럼 모아두면 어떨까 라는 생각에서 출발하여 이 앱을 만들게 되었다.

<br>

## 🔗2. 서비스 주요 사항

- 풀스택 개발
- 간편 회원가입 및 로그인 기능구현 (jwt 토큰 이용)
- 콘텐츠 생성, 수정, 삭제, 상세조회 CRUD 구현
- 장르별 콘텐츠 필터링
- react-query를 이용한 loading 및 caching
- heroku로 직접 배포

<br>

## 🔗3. 이슈 및 개선사항

1. 최초 json-server를 이용해 서버를 구현했지만, 새로 브라우저가 시작되면 데이터가<br> 저장되지 않는 문제가 발생 <br>
   💡해결: express + mongoDB 로 서버와 데이터베이스 구축

2. api 통신으로 서버 데이터를 받아오는 과정에서 loading 문제 발생 <br>
   💡해결: react-query를 도입하여 loading처리 해결

## 🔗4. 기술스택

- Main Language

  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

- FE

  <img src ="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"/> <img src ="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src ="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white">

- BE

    <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
  <img src="https://img.shields.io/badge/mongoose-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">

## 🔗5. 프로젝트 미리보기

<img src='https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/sehee/%EB%A1%9C%EA%B7%B8%EC%9D%B8.png' width='250px' height='250px'> <img src='https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/sehee/%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85.png' width='250px' height='250px'>
<br>
<img src='https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/sehee/%EB%A9%94%EC%9D%B8%EB%A6%AC%EC%8A%A4%ED%8A%B8.png' width='250px' height='400px'>
<img src='https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/sehee/%EC%9E%A5%EB%A5%B4%ED%95%84%ED%84%B0%EB%A7%81.png' width='250px' height='400px'>
<img src='https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/sehee/create.png' width='250px' height='400px'>
<br>
<img src='https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/sehee/%EB%94%94%ED%85%8C%EC%9D%BC.png' width='250px' height='400px'>
<img src='https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/sehee/%EB%AA%A8%EB%8B%AC.png' width='250px' height='400px'>
