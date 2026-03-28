
// URL에 정보를 담는 두 가지 방법에 대한 설명입니다.
// 리소스에 대한 id, 위치 등의 정보를 담을 때:
// reservation/:id -> "id" key로 value를 URL 경로 파라미터로 전달합니다.
// 검색어, 설정 등의 정보를 담을 때:

import { useState } from "react"
import { BrowserRouter, Route, Routes, useSearchParams } from "react-router-dom";

// 쿼리스트링 방식: reservation?keyword=value -> "keyword" key로 value를 전달합니다.
export default function Router04() {
  return (
    // BrowserRouter로 감싸서 라우터 컨텍스트를 제공합니다.
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SearchPage />} />
        </Routes>
    </BrowserRouter>
  )
}

function SearchPage() {
    // inputval: 사용자가 입력한 검색어를 관리하는 상태입니다.
    const [inputval, setInputval] = useState();
    // useSearchParams: URL의 쿼리스트링을 읽고 변경할 수 있는 훅입니다.
    const [searchparams, setSearchparams] = useSearchParams();
    // 쿼리스트링에서 keyword 값을 읽어옵니다.
    const keyword = searchparams.get("keyword");


    // setSearchParams로 쿼리스트링 변경도 가능합니다.
    const handleSearch = () => {
        // 쿼리스트링 형식: .com?key1=value1&key2=value2
        // 변경 시 JS 객체로 제공해야 합니다.
        setSearchparams({keyword: inputval}); // 쿼리스트링 변경으로 리렌더링이 트리거됩니다.
    }

    // 테스트용 쿼리스트링 변경 함수입니다.
    const handleClick = () => {
        setSearchparams({
            a: "공부많이 된다",
            b: "스트레스 많을거야"
        })
    }

    return (
        <div>
            <h2>검색</h2>
            <input
                type="text"
                value={inputval}
                onChange={(e) => setInputval(e.target.value)}
                placeholder="검색어 입력"
            />
            <button onClick={handleSearch}>검색</button>
            <button onClick={handleClick}>테스트</button>

            {/* keyword가 존재할 때만 검색 결과 영역을 렌더링합니다. */}
            {
                keyword && (
                    <div>
                        <h3>검색결과</h3>
                        <p>{keyword}</p>
                    </div>

                )
            }
        </div>
    )
}
