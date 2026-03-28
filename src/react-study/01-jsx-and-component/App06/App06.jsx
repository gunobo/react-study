import React from 'react'
import MenuList from './menuList'

export default function App06() {
    // menus 객체에 성인용과 어린이용 메뉴 배열을 각각 보관합니다.
    const menus = {
        adults : ["맥주", "와인", "위스키"],
        child : ["우유", "주스", "사이다"]
    }
    // user 객체에 사용자의 이름과 나이 정보를 저장합니다.
    const user = {
        name : "홍길동",
        age : 25,
    }
    let title;
    let menuKey;
    // user.age가 19세 초과이면 성인용 메뉴를, 그렇지 않으면 어린이 메뉴를 선택합니다.
    if (user.age > 19) {
        title = "어른용 메뉴"
        menuKey = "adults"
    } else{
        title = "어린이 메뉴"
        menuKey = "child"
    }
  return (
    <div>
        <h1>연습문제</h1>
        {/* MenuList에 user의 age를 고려하여 props를 전달하는 코드를 작성하시오 */}
        {/* <MenuList
            menus = {user.age >= 19 ? menus.adults : menus.child}
        /> */}
        {/* menuKey를 이용하여 menus 객체에서 적절한 배열을 선택하여 전달합니다. */}
        <MenuList title={title} menus={menus[menuKey]} />
    </div>
  )
}
