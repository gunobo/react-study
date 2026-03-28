import { useEffect, useState } from "react"
import { getUsers } from "./apis/studyApi"

export default function Axios03() {
    // 작성한 API 함수를 import하여 응답 데이터를 아래 return에서 렌더링해주세요.
    // users: 서버에서 받아온 사용자 목록을 관리하는 상태입니다.
    const [users, setUsers] = useState([]);
    // fetchUsers: 사용자 목록을 비동기로 가져오는 함수입니다.
    const fetchUsers = async () => {
            try {
                const data = await getUsers();
                setUsers(data); // 성공 시 사용자 목록 상태를 업데이트합니다.
            } catch (error) {
                console.error("데이터를 불러오는데 실패했습니다:", error);
            }
    };
    // 컴포넌트가 최초 마운트될 때 사용자 목록을 불러옵니다.
    useEffect(() => {
        fetchUsers();
    }, []); // 빈 배열을 전달하여 마운트 시 1회만 실행합니다.

  return (
    <div>
        <h2>사용자 목록</h2>
        {/* 아래의 div를 카드 컴포넌트라고 생각하고
          서버에서 받아온 데이터를 map()으로 렌더링해주세요.
        */}
        {/* users 배열을 map()으로 순회하여 각 사용자 정보를 카드 형태로 렌더링합니다. */}
        {
            users.map((user) => (
            <div key={user.id}>
                <h3>유저이름: {user.username}</h3>
                <p>이름: {user.name}</p>
                <p>이메일: {user.email}</p>
            </div>
            ))
        }
    </div>
  )
}
