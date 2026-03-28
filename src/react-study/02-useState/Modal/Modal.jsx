import { useState } from "react";

// 모달 배경(오버레이) 스타일 객체입니다. 화면 전체를 반투명하게 덮습니다.
const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

// 모달 박스 스타일 객체입니다. 흰 배경의 둥근 박스 형태입니다.
const modalStyle = {
    backgroundColor: "white",
    width: "420px",
    height: "360px",
    padding: "20px",
    borderRadius: "8px"
};

// Modal 컴포넌트입니다. open, title, content, onClose props를 받습니다.
export default function Modal({open, title, content, onClose}) {
    // open이 false이면 null을 반환하여 모달을 숨깁니다.
    if (!open) return null
  return (
    <div style={overlayStyle}>
        <div style={modalStyle}>
            <h2>{title}</h2>
            <p>{content}</p>
            {/* 닫기 버튼 클릭 시 onClose 함수를 호출하여 모달을 닫습니다. */}
            <button onClick={onClose}>닫기</button>
        </div>
    </div>
  )
}
