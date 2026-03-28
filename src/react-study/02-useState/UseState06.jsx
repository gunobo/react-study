import React, { useState } from "react";

export default function UseState06() {
    // memos: 메모 객체들의 배열을 관리하는 상태입니다.
    const [memos, setMemos] = useState([]);
    // inputVal: 사용자가 입력한 텍스트를 관리하는 상태입니다.
    const [inputVal, setInputVal] = useState("");
    // done: 메모 추가 시 완료 여부 초기값을 설정하는 상태입니다.
    const [done, setDone] = useState(false);

    // 메모 객체의 구조: [{id: Date.now(), text:"빨래하기", done: true}, ..{}]
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputVal(value);
    };

    const addMemoClick = () => {
        // 함수형 업데이트를 사용하여 이전 상태를 안전하게 참조합니다.
        setMemos((prev) => {
            return [
                ...prev,
                {
                    id: Date.now(), // 고유 id로 Date.now()를 사용합니다.
                    text: inputVal,
                    done: done,
                },
            ];
        });
        setInputVal(""); // 추가 후 입력창을 초기화합니다.
    };

    const handleCheckClick = (e) => {
        // 체크박스가 체크되어 있으면 true, 체크되지 않으면 false가 담겨 있습니다.
        const checkVal = e.target.checked;
        setDone(checkVal);
    };

    // 체크박스는 추가한 메모 수만큼 생기기 때문에
    // 데이터 식별이 필요합니다. -> id를 매개변수로 받아야 합니다.
    const handleToggleDone = (id) => {
        // memo : {id:~, text:~, done:true} 형태입니다.
        const newMemos = memos.map((memo) => {
            if(memo.id === id) {
                return {
                    ...memo,
                    done: !memo.done, // done 값을 반전시킵니다.
                }
            } else {
                return memo;
            }
        })
        setMemos(newMemos);
    };
    // 모든 메모의 done 값을 true로 설정합니다.
    const handleAllCheck = () => {
        const newMemos = memos.map((memo) => ({
            ...memo,
            done: true,
        }));
        setMemos(newMemos);
    };

    // 모든 메모의 done 값을 false로 설정합니다.
    const handleAllUncheck = () => {
        const newMemos = memos.map((memo) => ({
            ...memo,
            done: false,
        }));
        setMemos(newMemos);
    };

    return (
        <div>
            <input type="text" value={inputVal} onChange={handleInputChange} />
            <input type="checkbox" checked={done} onChange={handleCheckClick} />
            <button onClick={addMemoClick}>메모 추가하기</button>
            <button onClick={handleAllUncheck}>모두 체크해제</button>
            <button onClick={handleAllCheck}>모두 체크하기</button>
            <ul>
                {memos.map((memo) => {
                    // {id:20260114..., text:"빨래하기", done:true} 형태로 구조 분해 할당합니다.
                    const { id, text, done } = memo;
                    return (
                        // memos 상태 기준으로 렌더링된 결과이므로
                        // 변경 시 setMemos를 호출해야 합니다.
                        <li key={id}>
                            {text}
                            <input
                                type="checkbox"
                                checked={done}
                                // () => fx() : fx()를 호출하는 화살표 함수입니다.
                                // fx(id): 함수의 호출 결과를 직접 전달합니다.
                                // 이벤트 속성에 함수를 전달할 때 매개변수도 함께 줘야 하는 경우
                                // () => fx(매개변수) 형식으로 작성합니다.
                                onChange={() => handleToggleDone(id)}
                            />
                        </li>
                    );
                })}
            </ul>
            {/* filter()로 done이 true인 메모만 걸러내어 완료 목록을 렌더링합니다. */}
            <ul>
                {memos
                    .filter((memo) => memo.done)
                    .map((memo) => (
                    <li key={memo.id}>{memo.text}</li>
                ))}
            </ul>
        </div>
    );
}
