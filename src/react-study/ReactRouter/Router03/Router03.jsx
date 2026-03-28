import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import * as s from './style'

// 예약 목록 데이터입니다. 실제 서비스에서는 API로 받아옵니다.
const reservations = [
    { id: 1, name: '홍길동', room: '101호' , date: "2026-01-25"},
    { id: 2, name: '김길동', room: '201호' , date: "2026-01-26"},
    { id: 3, name: '이길동', room: '301호' , date: "2026-01-27"},
    { id: 4, name: '최길동', room: '401호' , date: "2026-01-28"},
]


// Router03: 예약 목록과 상세 페이지로 구성된 라우터 컴포넌트입니다.
export default function Router03() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ReservationList />} />
            {/* :id -> 동적 파라미터로 예약 ID를 URL에서 추출합니다. */}
            <Route path='/detail/:id' element={<ReservationDetail />} />
        </Routes>
    </BrowserRouter>
  )
}
// 도전! ReservationList 컴포넌트에서
// ReservationCard를 map으로 뿌려주세요.
// 해당 카드를 클릭하면 Detail로 이동하게 만들어주세요.
// URL에 reservation의 id가 포함되어야 합니다.


// ReservationDetail: URL의 id 파라미터로 예약 상세 정보를 표시하는 컴포넌트입니다.
function ReservationDetail() {
    // URL에서 id 파라미터를 추출합니다.
    const { id } = useParams();
    // id로 해당 예약 데이터를 찾습니다. URL 파라미터는 문자열이므로 parseInt로 변환합니다.
    const reservation = reservations.find(r => r.id === parseInt(id));

    return (
        <div>
            <h1>예약 상세정보</h1>
            {/* reservation이 존재하면 상세 정보를, 없으면 안내 메시지를 렌더링합니다. */}
            {reservation ? (
                <div>
                    <p><strong>이름:</strong> {reservation.name}</p>
                    <p><strong>객실:</strong> {reservation.room}</p>
                    <p><strong>날짜:</strong> {reservation.date}</p>
                </div>
            ) : (
                <p>예약 정보를 찾을 수 없습니다.</p>
            )}
        </div>
    )
}

// ReservationCard: 예약 한 건의 정보를 카드 형태로 표시하는 컴포넌트입니다.
// reservation 객체와 onClick 이벤트 핸들러를 props로 받습니다.
function ReservationCard({reservation, onClick}) {
    const {id, name, room, date} = reservation;
    return (
        // s.card 스타일이 적용된 카드입니다. 클릭 시 onClick 함수가 호출됩니다.
        <div css={s.card} onClick={onClick}>
            <h3>{name}님의 예약</h3>
            <p>예약번호: {id}</p>
            <p>객실: {room}</p>
            <p>날짜: {date}</p>
        </div>
    )
}

// ReservationList: 예약 목록을 카드 형태로 나열하는 컴포넌트입니다.
function ReservationList() {
    // navigate: 프로그래밍 방식으로 페이지를 이동하는 함수입니다.
    const navigate = useNavigate();

    return (
        <div css={s.container}>
            <h1>예약목록</h1>
            <div css={s.cardList}>
                {/* reservations 배열을 map()으로 순회하여 각 ReservationCard를 렌더링합니다. */}
                {reservations.map((r) => {
                    return <ReservationCard
                                key={r.id}
                                reservation={r}
                                // 카드 클릭 시 해당 예약의 상세 페이지로 이동합니다.
                                onClick={() => navigate(`/detail/${r.id}`)}
                           />
                })}
            </div>
        </div>
    )
}
