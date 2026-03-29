# React 입문 스터디

React를 처음부터 학습하며 정리한 프로젝트입니다.
JSX 기초부터 Zustand를 활용한 전역 상태 관리까지 단계별로 실습했습니다.

<br />

## 기술 스택

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5-443E38?style=flat-square)
![Axios](https://img.shields.io/badge/Axios-1-5A29E4?style=flat-square&logo=axios&logoColor=white)
![Emotion](https://img.shields.io/badge/Emotion-11-C865B9?style=flat-square)

<br />

## 학습 내용

| # | 주제 | 내용 |
|---|------|------|
| 1 | JSX & 컴포넌트 | JSX 문법, Props, children props, Modal, NavBar |
| 2 | useState | 상태 관리, 폼, Todo 리스트, 조건부 렌더링 |
| 3 | useEffect | 생명주기, 의존성 배열, cleanup 함수 |
| 4 | useRef | 비렌더링 값 저장, DOM 직접 접근 |
| 5 | Axios | HTTP 통신, 에러 핸들링, async/await |
| 6 | Emotion | CSS-in-JS, 동적 스타일링 |
| 7 | React Router | SPA 라우팅, useParams, useNavigate, useSearchParams |
| 8 | Zustand | 전역 상태 관리, CRUD, Toast 알림 |

<br />

## 블로그 정리

학습 내용을 벨로그에 시리즈로 정리하고 있습니다.

### 1편 — JSX & 컴포넌트

| 편 | 제목 | 링크 |
|---|------|------|
| 2 | JSX 문법 기초 — 변수, 배열, 조건부 렌더링 | [바로가기](https://velog.io/@startea0716/1.-JSX-%EB%AC%B8%EB%B2%95-%EA%B8%B0%EC%B4%88-%EB%B3%80%EC%88%98-%EB%B0%B0%EC%97%B4-%EC%A1%B0%EA%B1%B4%EB%B6%80-%EB%A0%8C%EB%8D%94%EB%A7%81) |
| 3 | Props로 부모→자식 데이터 전달하기 | [바로가기](https://velog.io/@startea0716/Props%EB%A1%9C-%EB%B6%80%EB%AA%A8%EC%9E%90%EC%8B%9D-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0) |
| 4 | children props와 레이아웃 컴포넌트 | [바로가기](https://velog.io/@startea0716/children-props%EC%99%80-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-9zbv16yt) |
| 5 | Modal과 NavBar — 실전 컴포넌트 만들기 | [바로가기](https://velog.io/@startea0716/Modal%EA%B3%BC-NavBar-%EC%8B%A4%EC%A0%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-kueye642) |

### 2편 — useState

| 편 | 제목 | 링크 |
|---|------|------|
| 6 | useState 기본 — 카운터와 렌더링 원리 | [바로가기](https://velog.io/@startea0716/useState-%EA%B8%B0%EB%B3%B8-%EC%B9%B4%EC%9A%B4%ED%84%B0%EC%99%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%9B%90%EB%A6%AC) |
| 7 | 폼 상태 관리 & 함수형 업데이트 | [바로가기](https://velog.io/@startea0716/%ED%8F%BC-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-%ED%95%A8%EC%88%98%ED%98%95-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8) |
| 8 | Todo 리스트 — 배열 상태 다루기 | [바로가기](https://velog.io/@startea0716/Todo-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EC%83%81%ED%83%9C-%EB%8B%A4%EB%A3%A8%EA%B8%B0) |
| 9 | 조건부 렌더링 & 검색 기능 구현 | [바로가기](https://velog.io/@startea0716/%EC%A1%B0%EA%B1%B4%EB%B6%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B2%80%EC%83%89-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84-41uldu6q) |

### 3편 — useEffect

| 편 | 제목 | 링크 |
|---|------|------|
| 10 | useEffect 기본 — 실행 타이밍과 의존성 배열 | [바로가기](https://velog.io/@startea0716/useEffect-%EA%B8%B0%EB%B3%B8-%EC%8B%A4%ED%96%89-%ED%83%80%EC%9D%B4%EB%B0%8D%EA%B3%BC-%EC%9D%98%EC%A1%B4%EC%84%B1-%EB%B0%B0%EC%97%B4-y543qidi) |
| 11 | useEffect 활용 — 검색어 필터, 온도 메시지, 폼 유효성 검사 | [바로가기](https://velog.io/@startea0716/useEffect-%ED%99%9C%EC%9A%A9-%EA%B2%80%EC%83%89%EC%96%B4-%ED%95%84%ED%84%B0-%EC%98%A8%EB%8F%84-%EB%A9%94%EC%8B%9C%EC%A7%80-%ED%8F%BC-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC-5ybqr2ta) |
| 12 | 컴포넌트 마운트/언마운트와 cleanup 함수 | [바로가기](https://velog.io/@startea0716/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%88%EC%9A%B4%ED%8A%B8%EC%96%B8%EB%A7%88%EC%9A%B4%ED%8A%B8%EC%99%80-cleanup-%ED%95%A8%EC%88%98-muw148ss) |

### 4편 — useRef

| 편 | 제목 | 링크 |
|---|------|------|
| 13 | useRef로 렌더링 없는 값 저장하기 | [바로가기](https://velog.io/@startea0716/useRef%EB%A1%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%97%86%EB%8A%94-%EA%B0%92-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0) |
| 14 | useRef로 DOM 직접 다루기 — focus, 키보드 이벤트 | [바로가기](https://velog.io/@startea0716/useRef%EB%A1%9C-DOM-%EC%A7%81%EC%A0%91-%EB%8B%A4%EB%A3%A8%EA%B8%B0-focus-%ED%82%A4%EB%B3%B4%EB%93%9C-%EC%9D%B4%EB%B2%A4%ED%8A%B8) |

### 5편 — Axios

| 편 | 제목 | 링크 |
|---|------|------|
| 15 | Axios 기본 — API 데이터 불러와서 테이블 렌더링 | [바로가기](https://velog.io/@startea0716/Axios-%EA%B8%B0%EB%B3%B8-API-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B6%88%EB%9F%AC%EC%99%80%EC%84%9C-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%A0%8C%EB%8D%94%EB%A7%81) |
| 16 | 에러 핸들링 — try/catch와 에러 메시지 표시 | [바로가기](https://velog.io/@startea0716/%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81-trycatch%EC%99%80-%EC%97%90%EB%9F%AC-%EB%A9%94%EC%8B%9C%EC%A7%80-%ED%91%9C%EC%8B%9C) |
| 17 | async/await로 유저 목록 카드 구현 | [바로가기](https://velog.io/@startea0716/asyncawait%EB%A1%9C-%EC%9C%A0%EC%A0%80-%EB%AA%A9%EB%A1%9D-%EC%B9%B4%EB%93%9C-%EA%B5%AC%ED%98%84) |

### 6편 — Emotion

| 편 | 제목 | 링크 |
|---|------|------|
| 18 | Emotion 기본 — CSS-in-JS 문법 | [바로가기](https://velog.io/@startea0716/Emotion-%EA%B8%B0%EB%B3%B8-CSS-in-JS-%EB%AC%B8%EB%B2%95) |
| 19 | 동적 스타일링 — props 기반 스타일, 애니메이션 | [바로가기](https://velog.io/@startea0716/%EB%8F%99%EC%A0%81-%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81-props-%EA%B8%B0%EB%B0%98-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98) |

### 7편 — React Router

| 편 | 제목 | 링크 |
|---|------|------|
| 20 | React Router 기본 — Route, 중첩 라우팅, 접근 제어 | [바로가기](https://velog.io/@startea0716/React-Router-%EA%B8%B0%EB%B3%B8-Route-%EC%A4%91%EC%B2%A9-%EB%9D%BC%EC%9A%B0%ED%8C%85-%EC%A0%91%EA%B7%BC-%EC%A0%9C%EC%96%B4) |
| 21 | URL 파라미터와 프로그래밍 방식 이동 — useParams, useNavigate | [바로가기](https://velog.io/@startea0716/URL-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%EC%99%80-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EB%B0%A9%EC%8B%9D-%EC%9D%B4%EB%8F%99-useParams-useNavigate) |
| 22 | 쿼리스트링 다루기 — useSearchParams | [바로가기](https://velog.io/@startea0716/%EC%BF%BC%EB%A6%AC%EC%8A%A4%ED%8A%B8%EB%A7%81-%EB%8B%A4%EB%A3%A8%EA%B8%B0-useSearchParams) |

### 8편 — Zustand

| 편 | 제목 | 링크 |
|---|------|------|
| 23 | Zustand 기본 — prop drilling 없이 전역 상태 공유 | [바로가기](https://velog.io/@startea0716/Zustand-%EA%B8%B0%EB%B3%B8-%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC%EC%99%80-%EC%8A%A4%ED%86%A0%EC%96%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0) |
| 24 | 전역 폼 상태 & 다단계 폼 | [바로가기](https://velog.io/@startea0716/Zustand-%ED%99%9C%EC%9A%A9-%EC%A0%84%EC%97%AD-%ED%8F%BC-%EC%83%81%ED%83%9C%EC%99%80-%EB%8B%A4%EB%8B%A8%EA%B3%84-%ED%8F%BC) |
| 25| Zustand로 CRUD 구현하기 + Toast 알림 | [바로가기](https://velog.io/@startea0716/Zustand-%ED%99%9C%EC%9A%A9-CRUD%EC%99%80-Toast-%EC%95%8C%EB%A6%BC) |

<br />

## 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```
