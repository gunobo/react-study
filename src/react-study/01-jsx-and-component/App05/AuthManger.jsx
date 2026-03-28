import React from 'react'

// AuthManger는 로그인 여부를 확인하는 인증 관리 컴포넌트입니다.
// isLogin이 false이면 로그인 필요 메시지를 렌더링하고, true이면 children을 렌더링합니다.
export default function AuthManger({children, isLogin}) {
    // 로그인되지 않은 경우 접근을 차단하고 안내 메시지를 반환합니다.
    if(!isLogin) {
        return <p>로그인이 필요합니다.</p>
    }
  // 로그인된 경우 children을 감싸서 반환합니다.
  return <div>{children}</div>;


}
