// JSX는 JavaScript의 확장 문법입니다.
// HTML 태그처럼 보이지만, 실제로는 JavaScript 코드로 변환됩니다.

// 컴포넌트는 JSX를 리턴하는 함수입니다.
function App01() {
    console.log("App01 호출되었습니다.")
    const title = "React 수업 시작!"
    const content = "jsx가 뭔지 알아봅시다!"
    const name = "리액트"
    const myTag = <h1>{name}</h1>

    // JSX의 규칙
    // 1. return되는 것은 반드시 하나의 태그여야 합니다.
    // 2. 모든 태그는 반드시 닫혀야 합니다.
    // 3. 태그 사이 혹은 태그 안에 JS 코드를 삽입할 경우 {} 중괄호를 이용합니다.
    return (
        // JSX는 JavaScript 코드로 변환됩니다.
        // 이 문법을 JSX라고 합니다.
        // return되는 것은 실제 HTML이 아닙니다. React가 해석하는 가상 DOM입니다.
        <div>
            {myTag}
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

// export: 외부에서 접근할 수 있도록 내보냅니다.
// default: 해당 파일에서 대표로 내보낼 값 하나를 지정합니다.
export default App01
