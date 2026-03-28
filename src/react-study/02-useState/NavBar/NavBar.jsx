import React, { useState } from 'react'
import NavItem from './NavItem'

// 네비게이션 메뉴 항목 데이터를 배열로 정의합니다.
const NAV_ITEMS = [
    {id:1,label:'홍'},
    {id:2,label:'게시판'},
    {id:3,label:'마이페이지'},
    {id:4,label:'로그아웃'},
]

export default function NavBar() {
    // 선택되어 활성화된 항목을 관리합니다.
    // 선택된 항목을 식별할 수 있어야 합니다.
    // map() 등으로 렌더링되는 자식 컴포넌트들에게 상태를 전달해줘야 합니다.
    const [activeId, setActiveId] = useState(0)

  return (
    <nav>
        <ul style={{listStyle: "none"}}>
            {NAV_ITEMS.map((item) => {
                return (
                    <NavItem
                        key = {item.id}
                        id = {item.id}
                        label = {item.label}
                        // 여러 개의 NavItem 컴포넌트에 동일한 setter 함수를 넘겨줍니다.
                        onClick={setActiveId}
                        // 현재 item의 id가 activeId와 같으면 활성화 상태로 표시합니다.
                        isActive={item.id === activeId}
                    />)
            })}
        </ul>
    </nav>
  )
}
