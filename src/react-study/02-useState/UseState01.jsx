import React, { useState } from 'react'

// 기존 JavaScript에서는 이벤트 리스너를 사용하여 클릭을 감지하였습니다.
// React에서는 useState 훅과 이벤트 핸들러를 함께 사용합니다.
export default function UseState01() {
    // 리액트는 컴포넌트마다 별도로 데이터를 저장하는 공간이 있습니다.
    // 그 공간에 접근하게 해주는 함수가 useState입니다.
    let myName = "홍길동";
    // useState는 배열을 리턴합니다. [현재 리액트가 저장하고 있는 값, setter 함수]
    // 생성자처럼 초기 데이터를 넣어줄 수 있습니다.
    const [name,setName] = useState()

    // 리액트는 가상 DOM(VDOM)을 가지고 있습니다.
    // 데이터 변경이 감지되었을 때 컴포넌트를 재호출하는 방식으로
    // 화면을 업데이트합니다.
    const handleChangeNameClick = () => {
        console.log("이름변경 버튼 클릭됨!")
        myName = "김길동";
        // 일반 변수의 값은 변경되었으나 리액트가 변경을 감지하지 못합니다.
        // setter 함수를 호출해야 리액트가 변경을 감지합니다.
        setName(myName);
        // 변경을 감지하면 값을 업데이트하여
        // 화면을 다시 렌더링합니다.


        console.log(myName)
    }

  return (
    <div>
        <div>{name}</div>
        {/* on이벤트이름 형태로 이벤트 속성을 지정합니다. */}
        {/* 이벤트 발생 시 호출할 함수를 전달합니다. */}
        <button onClick={handleChangeNameClick}>이름변경</button>
    </div>
  )
}
