import { useEffect, useState } from "react";

export default function UseEffect02() {
    // 상태가 바뀐 이후에 계산되어야 하는 값들을 useEffect로 처리합니다.
    // 예시: 검색어 입력 -> 검색어 추천 목록 업데이트
    const [inputVal, setInpuVal] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    // 검색어 키워드 목록입니다.
    const keywords = [
        "리액트", "자바스크립트", "리액트네이티브",
        "자바", "스프링", "파이썬",
        "스프링부트", "흑백요리사", "최강록", "최강희"
    ];

    // setInputVal 호출 후 -> 상태 업데이트가 완료된 이후에
    // 검색어 추천 목록을 별도로 계산합니다.
    useEffect(() => {
        // 최초 실행 시에도 함수가 호출되므로
        // inputVal이 빈 문자열("")이면 모든 단어에 매칭되는 것을 방지합니다.
        if (inputVal === "") {
            return;
        }

        // inputVal이 포함된 문자열을 keywords에서
        // 골라내어 suggestions 상태를 업데이트합니다.
        let newSuggestions = []
        for(let keyword in keywords) {
            if(keyword.includes(inputVal)) {
                newSuggestions = [...newSuggestions, keyword];
            }
        }

        // filter(): 해당 함수의 리턴값이 true인 요소들만 남겨 새 배열을 반환합니다.
        newSuggestions = keywords.filter((keyword) => {
            return keyword.includes(inputVal);
        });
        console.log("테스트")
        setSuggestions(newSuggestions);

    }, [inputVal]); // inputVal이 변경될 때마다 추천 목록을 다시 계산합니다.

  return (
    <div>
        <h2>검색</h2>
        <input
            type="text"
            value={inputVal}
            onChange={(e) => setInpuVal(e.target.value)}
            placeholder="검색어 입력"
        />
        <ul>
            {/* suggestions 배열의 각 항목을 li 태그로 렌더링합니다. */}
            {/* suggestions 배열을 li 태그들로 변환합니다. */}
            {suggestions.map((keyword, i) => {
                return <li key={i}>
                    <button>
                        {keyword}
                    </button>
                </li>
            })}
        </ul>
    </div>
  )
}
