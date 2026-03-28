import { useEffect, useRef, useState } from "react"

export default function UseRef01() {
  const [value, setValue] = useState("");
  // 초기값을 생성자처럼 사용할 수 있습니다. 예: useRef("")
  const prevValueRef = useRef("");

  // 이전 값을 기억해야 하는 상황에서의 저장소 선택 기준입니다.
  // 일반 변수 -> 렌더링될 때 초기화되어 버립니다.
  // useState의 상태 변수 -> 값이 변하면 리렌더링이 발생합니다.
  // useRef -> 렌더링과 무관하게 값을 저장하는 변수를 제공하는 훅입니다.

  useEffect(() => {
    // useRef 변수에 저장된 값이 업데이트되긴 하지만,
    // 렌더링과는 무관하므로 화면이 다시 그려지지 않습니다.

    // useRef에 저장한 값은 .current 프로퍼티에 있습니다.
    console.log(prevValueRef.current);
    prevValueRef.current = value; // 현재 값을 ref에 저장하여 다음 렌더링에서 이전 값으로 사용합니다.
    console.log(prevValueRef.current);
  }, [value]) // value가 변경될 때마다 이전 값을 업데이트합니다.


  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <p>현재: {value}</p>
      {/* prevValueRef.current는 렌더링 이전에 저장된 값을 보여줍니다. */}
      <p>이전: {prevValueRef.current}</p>
    </div>
  )
}
