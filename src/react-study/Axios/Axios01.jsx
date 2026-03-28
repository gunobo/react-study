// axios 라이브러리에 대한 설명입니다.
/*
    - fetch() 함수와의 차이점입니다.
    1. 400번 또는 500번 에러를 자동으로 에러로 처리합니다.
       기존 fetch()에서는 에러를 직접 throw해줘야 했습니다.
       -> axios는 200번대가 아니면 알아서 에러를 던져줍니다.
    2. 인터셉트(intercept) 기능을 제공합니다.
       -> 모든 요청 및 응답에 필터 레이어를 추가할 수 있습니다.

    - fetch()와의 공통점입니다.
    Promise 기반으로 동작합니다.

    설치 명령어: npm install axios
*/

import axios from "axios";
import { useEffect, useState } from "react"

/*
API 응답 데이터 구조 예시입니다.
[
    {
        id:1,
        name:"키보드"
        price:50000
    },
    {
        id:2,
        name:"마우스"
        price:30000
    }
]
*/
export default function Axios01() {
    // 1. API로 받아온 데이터를 저장할 상태입니다.
    const [product,setProduct] = useState([]);

    // 2. 데이터를 다시 불러올지 결정하는 상태입니다. 값이 변경되면 useEffect가 재실행됩니다.
    const [refetch, setRefetch] = useState(false);


    // 데이터를 요청하는 시점은 컴포넌트가 처음 렌더링될 때, 즉 최초 마운트될 때입니다.
    useEffect(()=>{
        // API 호출은 첫 렌더링 1회 및 refetch 상태 변경 시 실행됩니다.
        // GET 요청: axios.get(컨트롤러 주소) 형식으로 호출합니다.
        // axios.get()은 Promise를 반환합니다.
        axios
        .get("http://localhost:8080/product/all")
        .then((response) => {
            // response.data에 컨트롤러가 body에 담아준 데이터가 존재합니다.
            console.log(response.data)
            setProduct()
        })
    },[refetch])
    // refetch 상태가 변할 때마다 useEffect가 재실행됩니다.

  return (
    <div>
        {/* 버튼 클릭 시 refetch 상태를 토글하여 데이터를 재요청합니다. */}
        <button onClick={(prev) => setRefetch(!prev)}>재요청</button>
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>상품명</th>
                <th>가격</th>
            </tr>
            </thead>
            <tbody>
                {
                    // product 배열을 map()으로 순회하여 각 상품을 tr 태그로 렌더링합니다.
                    product.map((p) => {
                        const {id,name,price} = p;
                        return (
                            <tr id={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
