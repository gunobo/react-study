import React, { useState } from 'react'

export default function UseState02() {
    // setter 함수를 호출하면 컴포넌트가 재호출(리렌더링)됩니다.
  // 상태(state)를 생성합니다. 초기값은 0입니다.
  const [count, setCount] = useState(0)
  // +1 버튼 클릭 시 count를 1 증가시킵니다.
  const handlePlusClick = () => {
    setCount(count + 1)
  }
  // -1 버튼 클릭 시 count를 1 감소시킵니다.
  const handleMinusClick = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>카운터</h1>
      <h3>{count}</h3>
      <button onClick={handlePlusClick}>+1</button>
      <button onClick={handleMinusClick}>-1</button>
    </div>
  )
}
