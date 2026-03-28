import React, { useEffect } from 'react'

export default function A() {
    console.log("A 렌더링 시작!");
        useEffect(() => {
            console.log("A 마운트");

            // useEffect에 넘겨주는 함수에서 리턴을 정의할 수 있습니다.
            // 이때 함수를 리턴할 수 있습니다.
            // 리턴된 함수는 컴포넌트가 언마운트될 때 실행됩니다. (cleanup 함수)
            return () => {
                console.log("A 언마운트");
            }
        }, []) // 빈 배열을 전달하므로 마운트와 언마운트 시에만 실행됩니다.
        console.log("A 곧 렌더링 종료");
  return (
    <h1>A</h1>
  )
}
