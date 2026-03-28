import React, { useState } from 'react'

export default function UseState08() {
    // todos: 할 일 목록을 배열로 관리하는 상태입니다.
    const[todos, setTodos] = useState([])
    // inputVal: 사용자가 입력한 텍스트를 관리하는 상태입니다.
    const[inputVal, setInputVal] = useState("")

    const addTodo = () => {
        // 빈 값이 추가되는 것을 방지합니다.
        if (inputVal.trim() === "")
            return

        // spread 문법으로 기존 todos 배열에 새 항목을 추가합니다.
        setTodos([...todos, inputVal])
        setInputVal("") // 추가 후 입력창을 초기화합니다.
    }
    const handleInputChange = (e) => {
        setInputVal(e.target.value)
    }

  return (
    <div>
        <input
            type="text"
            value={inputVal}
            onChange={handleInputChange}
            placeholder='할 일 입력'
        />
        <button onClick={addTodo}>할 일 추가</button>
        {/* 추가된 항목이 없다면 <p>"할 일이 없습니다."</p>를 렌더링합니다. */}
        {/* 요소가 하나 이상이라면 <ul><li></li></ul>을 렌더링합니다. */}
        {todos.length === 0 ? (
            <p>할 일이 없습니다.</p>
        ) : (
            <ul>
                {todos.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
        )}
    </div>
  )
}
