import React, { useEffect, useState } from 'react'

export default function UseEffect03() {
    // temperature: 현재 온도를 관리하는 상태입니다. 초기값은 8도입니다.
    const [temperature, setTemperature] = useState(8)
    // msg: 온도에 따른 메시지를 관리하는 상태입니다.
    const [msg, setMsg] = useState("");

    // 온도 조건에 따른 메시지 출력 규칙입니다.
    // 10도 미만 -> "추워요!" 메시지 출력
    // 10 ~ 25도 -> "좋은 날씨!" 메시지 출력
    // 25도 초과 -> "더워요!" 메시지 출력

    // 온도를 1도 올리는 함수입니다.
    const increase = () => {
        setTemperature((prev) => prev + 1)
    }
    // 온도를 1도 내리는 함수입니다.
    const decrease = () => {
        setTemperature((prev) => prev - 1)
    }

    // temperature 값이 변경될 때마다 메시지를 업데이트합니다.
    useEffect(() => {
        if (temperature < 10) {
            setMsg("추워요!😂")
        } else if (temperature < 26) {
            setMsg("좋은 날씨!😊")
        } else {
            setMsg("더워요!😂")
        }
    }, [temperature]); // 의존성 배열에 temperature를 지정합니다.

    return (
        <>
            <h2>에어컨 리모콘</h2>
            <h1>{temperature}도</h1>

            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>

            <h3>{msg}</h3>
        </>
    )
}
