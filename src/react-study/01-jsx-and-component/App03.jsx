import React from 'react'

// 컴포넌트의 이름은 반드시 첫 글자가 대문자여야 합니다. (클래스 명명 규칙과 동일합니다.)
// 파일 이름(.jsx)과 컴포넌트 이름이 동일해야 합니다.
export default function App03() {
    const age = 20;
    const forAdults = ["맥주", "와인", "위스키"]
    const forChildren = ["우유", "당근주스", "사이다"]

    // age가 19보다 크면 성인으로 판별합니다.
    const isAdult = age > 19;

    return (
        <div>
            <h1>메뉴</h1>
            <h2>
                {/* 삼항연산자를 활용하여 isAdult 값에 따라 다른 텍스트를 렌더링합니다. */}
                {isAdult ? "성인용 메뉴" : "어린이 메뉴"}
            </h2>
            <ul>
                {/* isAdult 값에 따라 적절한 메뉴 배열을 선택한 뒤 map()으로 렌더링합니다. */}
                {(isAdult ? forAdults : forChildren).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
