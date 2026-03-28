import React, { useState } from 'react'

export default function UseState05() {
    // todos: 할 일 목록을 배열로 관리하는 상태입니다.
    const [todos, setTodos] = useState([]);
    // inputVal: 사용자가 입력한 텍스트를 관리하는 상태입니다.
    const [inputVal, setInputVal] = useState("");

    // 정의해놓은 상태들로
    // input에 To-Do를 입력하면,
    // ul 안에 li들로 Todo들이 보이게 만들어주세요.
    const addTodo = () => {
        if (inputVal.trim() === "")
            return  // 빈 값이 추가되는 것을 방지합니다.

        // spread 문법으로 기존 todos 배열에 새 항목을 추가합니다.
        setTodos([...todos, inputVal])
        setInputVal("") // 추가 후 입력창을 초기화합니다.
    }

  return (
    <div>
        <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder='To-DO 입력'
        />
        <button onClick={addTodo}>TO-DO 추가</button>
        <ul>
            {todos.map((todo, index) => (
                // index를 key로 사용하는 것은 권장되지 않습니다.
                // 리액트가 리스트를 렌더링할 때 실제 데이터 기준으로 변경을 감지하는 게 아니라
                // key를 기준으로 변경을 감지하기 때문에 고유한 id 사용을 권장합니다.
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}
