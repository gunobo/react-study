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
| 1-1 | JSX 문법 기초 — 변수, 배열, 조건부 렌더링 | [바로가기]() |
| 1-2 | Props로 부모→자식 데이터 전달하기 | [바로가기]() |
| 1-3 | children props와 레이아웃 컴포넌트 | [바로가기]() |
| 1-4 | Modal과 NavBar — 실전 컴포넌트 만들기 | [바로가기]() |

### 2편 — useState

| 편 | 제목 | 링크 |
|---|------|------|
| 2-1 | useState 기본 — 카운터와 렌더링 원리 | [바로가기]() |
| 2-2 | 폼 상태 관리 & 함수형 업데이트 | [바로가기]() |
| 2-3 | Todo 리스트 — 배열 상태 다루기 | [바로가기]() |
| 2-4 | 조건부 렌더링 & 검색 기능 구현 | [바로가기]() |

### 3편 — useEffect

| 편 | 제목 | 링크 |
|---|------|------|
| 3-1 | useEffect 기본 — 실행 타이밍과 의존성 배열 | [바로가기]() |
| 3-2 | useEffect 활용 — 검색어 필터, 온도 메시지, 폼 유효성 검사 | [바로가기]() |
| 3-3 | 컴포넌트 마운트/언마운트와 cleanup 함수 | [바로가기]() |

### 4편 — useRef

| 편 | 제목 | 링크 |
|---|------|------|
| 4-1 | useRef로 렌더링 없는 값 저장하기 | [바로가기]() |
| 4-2 | useRef로 DOM 직접 다루기 — focus, 키보드 이벤트 | [바로가기]() |

### 5편 — Axios

| 편 | 제목 | 링크 |
|---|------|------|
| 5-1 | Axios 기본 — API 데이터 불러와서 테이블 렌더링 | [바로가기]() |
| 5-2 | 에러 핸들링 — try/catch와 에러 메시지 표시 | [바로가기]() |
| 5-3 | async/await로 유저 목록 카드 구현 | [바로가기]() |

### 6편 — Emotion

| 편 | 제목 | 링크 |
|---|------|------|
| 6-1 | Emotion 기본 — CSS-in-JS 문법 | [바로가기]() |
| 6-2 | 동적 스타일링 — props 기반 스타일, 애니메이션 | [바로가기]() |

### 7편 — React Router

| 편 | 제목 | 링크 |
|---|------|------|
| 7-1 | React Router 기본 — Route, 중첩 라우팅, 접근 제어 | [바로가기]() |
| 7-2 | URL 파라미터와 프로그래밍 방식 이동 — useParams, useNavigate | [바로가기]() |
| 7-3 | 쿼리스트링 다루기 — useSearchParams | [바로가기]() |

### 8편 — Zustand

| 편 | 제목 | 링크 |
|---|------|------|
| 8-1 | Zustand 기본 — prop drilling 없이 전역 상태 공유 | [바로가기]() |
| 8-2 | 전역 폼 상태 & 다단계 폼 | [바로가기]() |
| 8-3 | Zustand로 CRUD 구현하기 + Toast 알림 | [바로가기]() |

<br />

## 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```
