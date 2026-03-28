// Children props란 컴포넌트 태그 사이에 넣은 내용들을
// 자식 컴포넌트에서 그대로 받는 props입니다.
// Layout 컴포넌트는 공통 레이아웃 구조(header, main)를 제공하며,
// main 영역에 children을 렌더링합니다.
export default function Layout({children}) {
  return (
    <div style={{width: "600px", margin: "0 auto", backgroundColor: "#eee"}}>
        <header style={{borderBottom: "1px solid #ccc"}}>
            <h1>레이아웃 연습</h1>
        </header>
        {/* children props로 전달받은 내용을 main 영역에 렌더링합니다. */}
        <main style={{ padding: "20px"}}>{children}</main>
    </div>
  )
}
