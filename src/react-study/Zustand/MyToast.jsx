/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useEffect } from "react";
// Zustand 스토어에서 토스트 관련 상태와 함수를 가져옵니다.
import { useToastStore } from "./store/toastStore";

// toastStyle: 화면 우측 상단에 고정되는 토스트 메시지 스타일입니다.
const toastStyle = css`
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #777;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    opacity: 0.8;
`;

// MyToast: Zustand 전역 상태를 구독하여 토스트 메시지를 표시하는 컴포넌트입니다.
export default function MyToast() {
    // isVisible: 토스트 표시 여부 전역 상태입니다.
    // hideToast: 토스트를 숨기는 Zustand 액션 함수입니다.
    // message: 표시할 토스트 메시지 내용입니다.
    const { isVisible, hideToast, message } = useToastStore();

    useEffect(()=> {
        // useEffect 전체 코드는 토스트 전역 상태가 true일 때만 실행합니다.
        if (!isVisible) return;

        // 2.5초 후 토스트를 자동으로 숨깁니다.
        const timer = setTimeout(() => {
            // 토스트 전역 상태를 false로 변경하는 함수를 호출합니다.
            hideToast();
        }, 2500)

        // 컴포넌트가 언마운트되거나 isVisible이 변경되면 타이머를 정리합니다. (메모리 누수 방지)
        return () => clearTimeout(timer)
    }, [isVisible, hideToast]) // isVisible 또는 hideToast가 변경될 때 재실행됩니다.

    // 조건문으로 토스트 전역 상태가 false이면 null을 반환하여 컴포넌트를 숨깁니다.
    if (!isVisible) return null;

  return (
    // 토스트 스타일을 적용하고 message를 표시합니다.
    <div css={toastStyle}>{message}</div>
  )
}
