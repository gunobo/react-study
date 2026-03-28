// useParams 훅에 대한 실습 파일입니다.

import { BrowserRouter, Route, Routes, useParams, Link } from "react-router-dom"; // 1. Link 추가 임포트

// useParams: URL 경로에서 동적 파라미터 값을 추출하는 훅입니다.
export default function Router02() {

  return (
    <BrowserRouter>
      <Routes>
        {/* :id -> 나중에 useParams()의 key값이 id가 됩니다. */}
        {/* :name -> 나중에 useParams()의 key값이 name이 됩니다. */}
        <Route path="/user/:id/:name" element={<UserDetail />} />
        <Route path="/" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  )
}

// URL에 정보를 담는 경우의 예시입니다.
// localhost:5173/user/3
// -> id가 3번인 사용자를 조회하는 요청입니다.
function UserDetail() {
    // useParams()로 URL 경로에서 id와 name 값을 추출합니다.
    const { id, name } = useParams();
    return (
        <div>
            <h1>사용자 정보</h1>
            <p>사용자 ID: {id}</p>
            <p>사용자 명: {name}</p>
            {/* 목록 페이지로 돌아가는 링크입니다. */}
            <Link to="/">목록으로</Link>
        </div>
    )
}

function UserList() {
  // 사용자 목록 데이터입니다.
  const user = [
    { id: 1, name: '김철수' },
    { id: 2, name: '박철수' },
    { id: 3, name: '이철수' },
  ]
  return (
    <div>
      <h2>구독자목록</h2>
      {user.map((user) => {
        const {id,name} = user;
        return (
          <div key={id}>
            {/* id 정보를 URL에 포함하여 상세 페이지로 이동합니다. */}
            <Link to={`/user/${id}`}>{name}</Link>
          </div>
        )
      })}
    </div>
  )
}
