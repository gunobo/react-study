import React, { useEffect, useState } from 'react'


// 렌더링 -> JS 객체를 리액트가 해석합니다.
// -> 가상 DOM(VDOM)을 생성하고, useState가 보관하는 상태 업데이트가 완료됩니다.
// -> VDOM을 브라우저의 실제 DOM에 반영합니다.
// 실제 DOM에 반영되는 시점이 "마운트"입니다.
// "언마운트"는 컴포넌트가 화면에서 제거되는 시점입니다.
export default function UseEffect01() {
    console.log("함수호출됨! (렌더링시작)")
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    const handleClick = () => {
        console.log("클릭 이벤트 발생!")
        setCount((prev) => prev + 1);
    }

    // 주의) 실무에서는 의존성 배열 없이 사용하는 것을 권장하지 않습니다.
    // 2번이 먼저 실행됩니다.
    // 이유: 렌더가 끝나고 난 뒤에 useEffect 함수가 호출되기 때문입니다.
    useEffect(() => {
        console.log("누가 먼저 실행될까? 1번");
        // 렌더 이후이므로 실제 DOM 접근도 가능합니다.
        // -> 스크롤바, 이벤트 관련 조작 코드를 여기에 작성할 수 있습니다.


    }) // 의존성 배열이 없으면 렌더가 끝날 때마다 실행됩니다.
    console.log("누가 먼저 실행될까요? 2번");

    // useEffect의 함수는 아래 두 가지 방식으로 사용됩니다.
    // 1. 마운트 시점에 실행될 함수를 매개변수로 받습니다.
    useEffect(() => {
        // "마운트" 시점: 처음으로 컴포넌트가 실제 DOM에 장착되는 순간입니다.
        console.log("처음으로 컴포넌트가 실제 dom에 장착되었습니다.")

        // API 데이터 fetch()를 useEffect 내에서 실행하는 것이 일반적입니다.
    }, []) // 빈 배열을 전달하면 마운트 시에만 한 번 실행됩니다.

    // 2. 의존성 배열에 담긴 값이 변경되면 함수가 실행됩니다.
    // -> 최초 마운트 시에도 실행됩니다.
    // 상태가 모두 업데이트된 이후 실행될 함수를 작성합니다.
    useEffect(() => {
        console.log("count 변경 감지")
        console.log(`실제 dom에 반영된 count=${count}`)

        // count 값에 따라 짝수/홀수 메시지를 설정합니다.
        if (count % 2 == 0) {
            setMessage("짝수!");
        } else {
            setMessage("홀수!");
        }

    }, [count]); // count 값이 변경될 때마다 이 useEffect가 실행됩니다.


    console.log("이제 곧 jsx리턴됩니다! (렌더종료직전)")
  return (
    <div>
        <button onClick={handleClick}>클릭</button>
        <h2>count: {count}</h2>
        <h3>{message}</h3>
    </div>
  )
}
