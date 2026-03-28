import React, { useState } from 'react'

// 조건부 렌더링 - UI 상태나 권한 상태에 따라 다르게 화면을 표시합니다.
export default function UseState07() {
    // 로그인 상태를 관리하는 상태입니다. 초기값은 false(미로그인)입니다.
    const [isLogin, setIsLogin] = useState(false);
    // 액세스 토큰 상태를 관리합니다. 초기값은 null입니다.
    const [accessToekn, setAccessToken] = useState(null);

    // 로그인/로그아웃 상태를 토글하는 함수입니다.
    const toggleLogin = () => {
        setIsLogin((prev) => !prev);
    }

    const getTokenClick = () => {
        setAccessToken("토큰이에요!");
    }
    // JS의 모든 값은 boolean 값으로 평가될 수 있습니다. (truthy/falsy)
    // A가 truthy이면 B가 평가됩니다.
    // A && B 패턴에서 A 값이 truthy일 때만 B(컴포넌트)가 렌더링됩니다.
  return (
    // 삼항 연산자: 조건에 따라 두 가지 값 중 하나를 렌더링합니다.
    // && 연산자: 왼쪽 값이 truthy일 때만 오른쪽 값을 렌더링합니다.
    <div>
        <button onClick={toggleLogin}>{isLogin ? "로그아웃" : "로그인"}</button>
        <h2>{isLogin ? "어서오세요" : "로그인이 필요합니다"}</h2>
        <button onClick={getTokenClick}>토큰 가져오기</button>
        {/* accessToekn이 truthy일 때만 토큰 갱신 성공 메시지를 렌더링합니다. */}
        {accessToekn && <p>토큰 갱신 성공!</p>}
    </div>
  )
}
