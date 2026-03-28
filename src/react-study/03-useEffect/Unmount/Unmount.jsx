import { useState } from "react"
import A from "./A";
import B from "./B";
/*
- 렌더링(계산)이 끝난 이후의 컴포넌트 생명주기(Lifecycle)입니다.

1. 실제 DOM에 컴포넌트가 필요해짐 -> 마운트 -> useEffect들 실행 -> 마운트 완료
2. 의존성 배열에 있는 상태 변화 -> 업데이트 -> 해당 상태를 구독하는 useEffect들 실행
3. 실제 DOM에 컴포넌트가 더 이상 필요 없음 -> useEffect의 return 함수들 실행 -> 언마운트
(1 -> 2 -> 3) -> (1 -> 2 -> 3) 순서로 컴포넌트의 생명주기가 반복됩니다.
*/
export default function Unmount() {
    // showA: A 컴포넌트를 표시할지 여부를 관리하는 상태입니다.
    const [showA, setShowA] = useState(true);

    // showA 상태를 반전시켜 A와 B 컴포넌트를 전환합니다.
    const toggle = () => {
        setShowA((prev) => !prev);
    }
  return (
    // <></> 는 Fragment 문법으로, 불필요한 DOM 노드 없이 여러 요소를 감쌀 수 있습니다.
    <>
        <button onClick={toggle}>컴포넌트 전환</button>
        {/* showA 값에 따라 A 또는 B 컴포넌트를 조건부 렌더링합니다. */}
        {showA ? <A /> : <B />}
    </>
  );
}
