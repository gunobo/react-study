// 컴포넌트는 함수입니다.
// 함수이므로 매개변수를 받을 수 있습니다.
// 부모 컴포넌트에서 자식 컴포넌트로 넘기는 매개변수를 props라고 합니다.

// 1. props는 부모에서 자식 방향으로만 전달이 가능합니다.
// 2. props는 JS 객체({}) 형태로 데이터를 매개변수에 전달합니다.
// 전달되는 형태 예시: {title: title, menus: menus}

// props는 객체이므로 구조 분해 할당으로 받는 것을 권장합니다.
export default function MenuList({title, menus}) {
  return (
    <div>
        <h2>{title}</h2>
        <ul>
            {/* menus 배열을 map()으로 순회하여 각 항목을 li 태그로 렌더링합니다. */}
            {menus.map((menu, i) => {
                return <li key={i}>{menu}</li>
            })}
        </ul>
    </div>
  )
}
