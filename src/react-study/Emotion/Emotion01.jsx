/*
참고) AI가 선호하는 CSS 라이브러리 - Tailwind CSS
CSS in JS 라이브러리 - React 환경에서 자주 사용됩니다.
"styled-component" vs "Emotion" 중 선택하여 사용합니다.
1. 라이브러리 설치 -> npm install @emotion/react
2. 확장 프로그램 설치 -> vscode-styled-components
*/

// 1. JSX 태그에 css 속성을 부여하기 위해 아래 pragma 주석을 반드시 선언합니다.
/** @jsxImportSource @emotion/react */

// 2. css 객체를 편리하게 만들기 위해 css 태그 템플릿 리터럴을 사용합니다.
// css``; 형식으로 css 객체를 생성합니다.
import { css } from "@emotion/react"
// box1: 100x100 크기의 검은 배경 박스 스타일입니다.
const box1 = css`
  width: 100px;
  height: 100px;
  background-color: #222;
  color: white;
`;

// css 객체를 반환하는 함수로도 선언할 수 있습니다. (동적 스타일 적용 시 유용합니다.)
const box2 = () => css`
  width: 100px;
  height: 100px;
`;

// 별도 styles 파일에서 공통 스타일을 가져옵니다.
import * as s from "./styles";

export default function Emotion01() {
  return (
    // s.layout 스타일이 적용된 컨테이너 div입니다.
    <div css={s.layout}>
      {/* css 객체를 직접 적용한 박스입니다. */}
      <div css={box1}>박스1</div>
      {/* css 객체를 반환하는 함수를 호출하여 스타일을 적용합니다. */}
      <div css={box2()}>박스2</div>
      {/* 외부 styles 파일에서 가져온 스타일을 적용합니다. */}
      <div css={s.box3}>박스3</div>
    </div>
  )
}
