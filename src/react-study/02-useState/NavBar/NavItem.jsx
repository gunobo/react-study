import React from 'react'
// CSS in JS 방식의 스타일링을 사용합니다.
// 대표적인 라이브러리로 Emotion과 styled-components가 있습니다.

// NavItem 컴포넌트는 네비게이션 메뉴의 각 항목을 렌더링합니다.
// id, label, isActive, onClick props를 받습니다.
export default function NavItem({id, label, isActive, onClick}) {
  return (
    <li
        // 클릭 시 부모로부터 받은 onClick 함수에 id를 전달하여 활성화 상태를 변경합니다.
        onClick={() => onClick(id)}
        // isActive 값에 따라 폰트 굵기를 다르게 적용합니다.
        style={{cursor: "pointer", fontWeight: isActive ? "700" : "200"}}
    >
        {label}
    </li>
  )
}
