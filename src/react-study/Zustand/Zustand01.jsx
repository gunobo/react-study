// npm install zustand 명령으로 설치합니다.
// 원리 -> JavaScript의 클로저 개념을 활용합니다.
// 전역 상태 관리 라이브러리 비교입니다.
// Redux(학습 난이도 높음), Zustand(간단하고 직관적), Recoil(지원 종료), Jotai(중간 난이도)
// -> useState와는 분리된 전역 상태 저장소를 제공합니다.

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"
// Zustand 스토어에서 모달 관련 상태와 함수를 가져옵니다.
import { useModalStore } from "./store/modalStore"
// Zustand 스토어에서 토스트 관련 상태와 함수를 가져옵니다.
import { useToastStore } from "./store/toastStore";

export default function Zustand01() {
  // 모달 버튼이 동작하도록 완성해주세요.
  // openModal: 모달을 여는 Zustand 액션 함수입니다.
  const { openModal } = useModalStore();
  // showToast: 토스트 메시지를 표시하는 Zustand 액션 함수입니다.
  const { showToast } = useToastStore();

  return (
    <div>
      <h1>메인페이지</h1>
      {/* 버튼 클릭 시 Zustand 스토어의 openModal 함수를 호출합니다. */}
      <button onClick={openModal}>모달열기</button>
      {/* 버튼을 누르면 MyToast 컴포넌트가 보이게 됩니다. */}
      <button onClick={() => showToast("토스트 메시지 호출")}>토스트 띄우기</button>
      <Container1 />
    </div>
  )
}

// Container1: Container2를 호출하는 중간 컨테이너 컴포넌트입니다.
function Container1() {
  return (
    <div>
      C1이 C2호출
      <Container2 />
    </div>
  )
}

// Container2: Container3를 호출하는 중간 컨테이너 컴포넌트입니다.
function Container2() {
  return (
    <div>
      C2가 C3호출
      <Container3 />
    </div>
  )
}

// Container3: Zustand 전역 상태를 직접 구독하여 모달을 렌더링하는 컴포넌트입니다.
function Container3() {
  // isModalOpen -> 모달 표시 여부를 나타내는 전역 상태입니다.
  // closeModal -> isModalOpen 상태를 false로 변경하는 Zustand 액션 함수입니다.
  const { isModalOpen, closeModal } = useModalStore();
  // isModalOpen이 false이면 null을 반환하여 모달을 숨깁니다.
  if (!isModalOpen) return null;

  return (
    <div>
      <div css={modalOverlay}>
        <div css={modalContent}>
          <h2>MODAL</h2>
          <p>MODAL TEXT</p>
          {/* 닫기 버튼 클릭 시 closeModal 함수를 호출하여 모달을 닫습니다. */}
          <button onClick={closeModal}>닫기</button>
        </div>
      </div>
    </div>
  )
}

// modalOverlay: 화면 전체를 덮는 반투명 배경 스타일입니다.
const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;
// modalContent: 모달 박스의 크기와 배경을 설정하는 스타일입니다.
const modalContent = css`
  width: 60vw;
  height: 50vh;
  background-color: white;
  padding: 20px;
  border-radius: 8px;

  /* &: CSS가 적용된 자기 자신을 참조합니다. */
  & > button {
    cursor: pointer;
  }
`;
