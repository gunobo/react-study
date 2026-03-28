// React Router에 대한 설명입니다.
// 설치: npm install react-router-dom
// 기존 방식: URL을 바꾸면 브라우저가 GET 요청을 보내 페이지 전체를 다시 불러왔습니다.

import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom"; // 1. Link 추가 임포트

// 라우터 라이브러리를 사용하면: URL을 바꾸면 해당 경로에 매핑된 컴포넌트를 호출합니다.
export default function Router01() {
    // 라우팅 설정만을 담당하는 컴포넌트입니다.
  return (

    /*
    <BrowserRouter>: 리액트 라우터의 최상위 컴포넌트입니다.
     - 이 컴포넌트 내부에서만 URL 라우팅(Link, Route)이 가능합니다.
     - URL이 변경될 때 브라우저의 기본 동작(페이지 새로고침)을 막고
       리액트 방식(컴포넌트 교체)으로 작동하게 해줍니다.

       Routes: 여러 Route들을 그룹화하는 컨테이너입니다.
       -> if-else if 문과 같이 위에서부터 순서대로 경로를 매칭합니다.
       Route: URL 경로와 컴포넌트를 매핑합니다.
       - path: URL 경로를 지정합니다.
       - element: 해당 경로에서 렌더링할 컴포넌트를 지정합니다.
    */

    // 도전! profile 및 contact가 현재 상위 라우터에 있는데
    // UserRouter라는 하위 라우터를 만들어서 처리하게 해주세요.
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/user/*" element={<UserRouter/>} />
            {/* path="/경로/*" 로 지정하면 하위 경로 처리를 하위 라우터에게 위임합니다. */}
            <Route path="/shop/*" element={<ShopRouter/>} />
            {/* path="/*" -> 정의되지 않은 모든 경로를 처리합니다. (else에 해당합니다.) */}
            <Route path="/*" element={<h1>404 NOT Found</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

// UserRouter 또는 AuthRouter: 사용자 관련 경로를 처리하는 하위 라우터입니다.
function UserRouter() {
    const accessToken = "토큰입니다";
    // 권한 검사를 위해 토큰을 확인합니다.
    // 1. accessToken이 있으면 -> 하위 경로 접근을 허용합니다.
    // 2. accessToken이 없으면 -> 로그인 페이지로 이동합니다.
    if (!accessToken) {
        return <h1>로그인페이지로 이동</h1>
    }

    // 3. accessToken이 만료된 경우 -> 토큰 재요청 로직을 수행합니다.

    return (
        <Routes>
            <Route path="profile" element={<ProfilePage/>} />
            <Route path="contact" element={<Contactpage/>} />
        </Routes>
    )
}

// ShopRouter: 쇼핑 관련 경로를 처리하는 하위 라우터입니다.
function ShopRouter() {
    // 하위 라우터에서 /shop/* 경로로 들어온 요청을 처리합니다.
    // 여기서 path는 products 또는 cart이며, "/shop/products"나 "/shop/cart"가 아닙니다.
    // 상위 라우터에서 이미 /shop까지 처리하였기 때문입니다.
    return (
        <div>
            <h1>쇼핑 영역입니다</h1>
            <Routes>
                <Route path="products" element={<Productpage/>} />
                <Route path="cart" element={<CartPage/>} />
            </Routes>
        </div>
    )
}

function MainPage() {
    // <a> 태그 -> 페이지 전체가 새로고침됩니다. 상태가 초기화됩니다.
    // 상태를 초기화해야 하는 경우에 사용합니다. (예: 로그인 후 메인 페이지 이동)
    // <Link> 컴포넌트 -> 컴포넌트 교체만 일어납니다. 상태가 유지됩니다.
    return (
        <div>
            <h1>메인페이지</h1>
            <nav>
                {/* 하위 라우터 경로에 맞춰 Link 경로를 수정합니다. */}
                <a href="/user/profile">프로필</a>
                <a href="/user/contact">연락처</a>
                <Link to="/user/profile">프로필</Link>
                <Link to="/user/contact">연락처</Link>
            </nav>
        </div>
    )
}

function ProfilePage() {
    // useNavigate: 리액트 라우터에서 제공하는 프로그래밍 방식의 페이지 이동 훅입니다.
    // 리턴된 것은 이동을 수행하는 함수입니다.
    const navigate = useNavigate();

    const handleSaveProfile = () => {
        alert("프로필 저장이 완료되었습니다!");

        // 저장 완료 후 메인 페이지로 자동 이동합니다.
        navigate("/"); // 컴포넌트만 교체하여 페이지 새로고침 없이 이동합니다.
    }

    const handleCancle = () => {
        /*
         라우터 대상들은 BrowserRouter에 감싸져 있습니다.
         BrowserRouter는 함수 호출 순서를 상태로 가지고 있습니다.
         -> 방문 기록을 상태로 관리합니다.

         navigate(-1) -> 바로 직전 페이지(뒤로 가기)로 이동합니다.
         navigate(-2) -> 2단계 이전 페이지로 이동합니다.
         */
        navigate(-1);
    }
    return (
        <div>
            <h1>프로필 페이지</h1>
            <div>
                <button onClick={handleSaveProfile}>저장하고 메인으로</button>
                <button onClick={handleCancle}>취소(뒤로가기)</button>
            </div>
        </div>
    )
}

function Contactpage() {
    // 전송 버튼을 누르면
    // confirm으로 전송 여부를 확인합니다.
    // true이면 전송완료!(alert) 후 메인으로 이동합니다.
    // 메인으로 이동할 때 라우팅을 사용합니다.
    const navigate = useNavigate();

    const handleSend = () => {
        const isConfirm = confirm("전송하시겠습니까?");
        if (isConfirm) {
            alert("전송완료!");
            navigate("/"); // 전송 완료 후 메인 페이지로 이동합니다.
        }
    };

    return (
        <div>
            <h1>연락처 페이지</h1>
            <button onClick={handleSend}>전송</button>
            <div onClick={() => navigate("/")}>메인으로</div>
        </div>
    )
}

function Productpage() {
    return (
        <div>
            <h1>상품목록</h1>
            <p>입고예정</p>
            {/* Link 컴포넌트를 사용하여 장바구니 페이지로 이동합니다. */}
            <Link to="/shop/cart">장바구니로 이동</Link>
        </div>
    )
}

function CartPage() {
    return (
        <div>
            <h1>장바구니</h1>
            <p>상품 확인하세요</p>
            {/* Link 컴포넌트를 사용하여 상품 목록 페이지로 이동합니다. */}
            <Link to="/shop/products">상품목록으로 이동</Link>
        </div>
    )
}
