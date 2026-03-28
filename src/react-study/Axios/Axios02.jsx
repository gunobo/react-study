import { useState } from "react"
import { getSearchProductApi } from "./apis/productApi";

// API 요청 시 쿼리스트링을 조립하여 검색 조건을 전달합니다.
export default function Axios02() {
    // inputVal: 사용자가 입력한 검색어를 관리하는 상태입니다.
    const [inputVal, setInputVal] = useState("");
    // products: 검색 결과 상품 목록을 관리하는 상태입니다.
    const [products, setProducts] = useState([]);
    // errMsg: API 오류 메시지를 관리하는 상태입니다.
    const [errMsg, setErrMsg] = useState("");


    // 검색 버튼 클릭 시 상품 검색 API를 호출하는 함수입니다.
    const handleSearchClick = async () => {
        // 상품 검색 API 호출 함수를 import하여 사용합니다.
        try {
            const response = await getSearchProductApi(inputVal);
            console.log(response.data);
            /*
                데이터의 생명주기가 같은 경우에는
                상태를 합치는 것이 권장됩니다.
                예시:
                {
                    products: [],
                    errMsg: ""
                }
            */
            setProducts(response.data)
            setErrMsg(""); // 정상 응답 시 오류 메시지를 초기화합니다.
        } catch(error) {
            // 백엔드에서 정의한 커스텀 에러들이 이 catch 블록으로 모입니다.
            console.log(error);
            if(error.response) {
                // error.response.data에 백엔드 응답의 에러 바디가 담겨 있습니다.
                // {}
                const resErrMsg = error.response.data;
                setErrMsg(resErrMsg);
                setProducts([]); // 오류 발생 시 상품 목록을 초기화합니다.
            }
        }
    }

  return (
    <div>
        <input
        type="text"
        value={inputVal}
        onChange={(e)=> { setInputVal(e.target.value)}}
        />
        <button onClick={handleSearchClick}>검색</button>
        {/* errMsg가 있을 때만 오류 메시지를 렌더링합니다. */}
        {
            errMsg && (
                <div>
                    {errMsg}
                </div>
            )
        }
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>상품명</th>
                    <th>가격</th>
                </tr>
            </thead>
            <tbody>
                {/* products 배열을 map()으로 순회하여 각 상품을 tr 태그로 렌더링합니다. */}
                {
                    products.map((p) => {
                        return (
                            <tr id={p.id}>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
