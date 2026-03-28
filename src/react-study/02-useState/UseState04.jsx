import React from 'react'
import { useState } from 'react';

export default function UseState04() {
    const [count, setCount] = useState(0)
    const increse = () => {
        setCount(count + 1);
        setCount(count + 1);
        // count가 2씩 증가할까요?
        // -> 두 번 호출해도 setter들은 리액트가 batch(일괄) 처리합니다.
        // 그 시점의 count 참조값은 둘 다 0으로 동일하므로 1씩만 증가합니다.

        // 함수형 업데이트 방식
        // setter에 함수를 매개변수로 전달할 수 있습니다.
        // 리액트가 첫 번째 매개변수에 이전 값(prev)을 넣어줍니다.
        // 이전 값을 참조해야 하는 경우에는 반드시 함수형 업데이트를 사용해주세요.
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }
    const decrease = () => {
        // 값이 하나만 바뀌는 단순한 경우에는
        // 함수형 업데이트를 사용하지 않아도 괜찮습니다.
        // 하지만 코드가 복잡해질 가능성을 고려하여
        // 함수형 업데이트를 쓰는 습관이 더 권장됩니다.
        setCount(count - 1);
    }

    return (
    <div>
        <h1>{count}</h1>
        <button onClick={increse}>+1</button>
        <button onClick={decrease}>-1</button>
    </div>
  )
}
