import { BrowserRouter, Route, Routes, Link, useSearchParams, useNavigate } from 'react-router-dom'
// Zustand 전역 상태에서 토스트 관련 함수를 가져옵니다.
import { useToastStore } from '../../Zustand/store/toastStore'


// Router05: 주문 목록과 주문 상세 페이지로 구성된 라우터 컴포넌트입니다.
export default function Router05() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<OrderList />} />
            <Route path="/order" element={<OrderDetail />} />
        </Routes>
    </BrowserRouter>
  )
}

// OrderList: 주문 목록을 표시하는 컴포넌트입니다.
function OrderList() {
    // Zustand 스토어에서 토스트 메시지를 표시하는 함수를 가져옵니다.
    const {showToast} = useToastStore();
    // 임시 주문 데이터입니다.
    const orders = [
        {product: "노트북", quantity: 1, status:"배송중"},
        {product: "키보드", quantity: 2, status:"배송완료"},
        {product: "마우스", quantity: 3, status:"주문접수"},
    ]
    return (
        <div>
            <h1>주문목록</h1>
            {/* 버튼 클릭 시 Zustand 토스트 스토어를 통해 토스트 메시지를 표시합니다. */}
            <button onClick={() => showToast("라우터공부중!")}>
                토스트테스트
            </button>
            <div>
                {/* orders를 map()으로 순회하여 카드 형식으로 렌더링합니다.
                상품 이름을 Link로 감싸서 상세 페이지로 이동할 수 있게 합니다. */}
                {orders.map((order, index) => (
                    <div key={index}>
                        {/* 쿼리스트링으로 상품 정보를 상세 페이지 URL에 포함합니다. */}
                        <Link to={`/order?product=${order.product}&quantity=${order.quantity}&status=${order.status}`}>
                            {order.product}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

// url: /order
// OrderDetail: URL 쿼리스트링으로 전달받은 주문 정보를 표시하는 컴포넌트입니다.
function OrderDetail() {
    // props가 아니라 URL 쿼리스트링으로 데이터를 전달받아
    // 각 정보를 렌더링합니다.
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // 쿼리스트링에서 각 주문 정보를 추출합니다.
    const product = searchParams.get('product');
    const quantity = searchParams.get('quantity');
    const status = searchParams.get('status');

    return (
        <div>
            <h1>주문 상세 페이지</h1>
            <div>
                <p>상품명: {product}</p>
                <p>주문 수량: {quantity}</p>
                <p>배송 상태: {status}</p>
            </div>
            {/* 버튼 클릭 시 주문 목록 페이지로 이동합니다. */}
            <button onClick={() => navigate("/")}>목록으로</button>
        </div>
    )
}
