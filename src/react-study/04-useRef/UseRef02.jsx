/*
  리액트에서는 실제 DOM 조작을 사용하지 않는 것을 권장합니다.
  (가상 DOM과 실제 DOM을 비교하는 reconciliation 매커니즘 때문입니다.)
  그러나 브라우저의 기능을 써야만 가능한 경우가 존재합니다.
  -> 대표적으로: focus(), click() 등의 DOM 메서드 직접 호출이 필요한 경우입니다.
*/

import { useRef, useState } from "react"

export default function UseRef02() {
  const [value, setValue] = useState("");

  // DOM 객체에 직접 접근할 때 useRef를 사용합니다. 초기값은 null로 설정합니다.
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);

  const handleKeyDown = (e) => {
    // 실제 DOM 객체는 ref의 current 프로퍼티에 있습니다.
    const div1 = div1Ref.current;
    const div2 = div2Ref.current;
    const div3 = div3Ref.current;

    const key = e.key;
    // Enter 키가 아니면 아무 동작도 하지 않습니다.
    if (key !== "Enter") {
      return;
    }

    // 입력값에 따라 해당 div에 포커스를 이동합니다.
    if (value === "1") {
      div1.focus();
    } else if (value === "2") {
      div2.focus();
    } else if (value === "3") {
      div3.focus();
    }

  }

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const handleKeyDown2 = (e) => {
    // DOM 객체를 가져오는 방법은 두 가지입니다.
    // 1. 이벤트 객체(e.target)로 가져오기
    // 2. Ref의 current 프로퍼티로 가져오기

    if(e.key !== "Enter") {
      return;
    }

    // 현재 포커스된 input에 따라 다음 input으로 포커스를 이동합니다.
    const target = e.target;
    if (target === input1Ref.current) {
      input2Ref.current.focus();
    } else if (target === input2Ref.current) {
      input3Ref.current.focus();
    }

  }

  // 이벤트 핸들러에 다음 포커스 대상 ref를 매개변수로 추가하였습니다.
  const handleKeyDown3 = (e, nextRef) => {
    // Enter 키이고 nextRef가 존재할 때만 다음 input으로 포커스를 이동합니다.
    if(e.key === "Enter" && nextRef) {
      nextRef.current.focus();
    }
  }



  return (
    <>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="1 ~ 3 입력"
        />

        {/* JSX 태그에 ref 속성을 부여하면
        실제 DOM 객체가 useRef 변수의 current에 대입됩니다.
        div 태그는 원래 포커스 대상이 아니므로 tabIndex를 설정해야 합니다.
        */}
        <div ref={div1Ref} tabIndex={0}>1번</div>
        <div ref={div2Ref} tabIndex={0}>2번</div>
        <div ref={div3Ref} tabIndex={0}>3번</div>
      </div>
      <div>
        {/* 1번 input에서 Enter 키 입력 시 -> 2번 input으로 포커스 이동 */}
        {/* 2번 input에서 Enter 키 입력 시 -> 3번 input으로 포커스 이동 */}
        <input
          type="text"
          placeholder="1번"
          onKeyDown={(e) => handleKeyDown3(e, input2Ref)}
          ref={input1Ref}
        />
        <input
          type="text"
          placeholder="2번"
          onKeyDown={(e) => handleKeyDown3(e, input3Ref)}
          ref={input2Ref}
        />
        <input
          type="text"
          placeholder="3번"
          ref={input3Ref}
        />
      </div>
    </>
  )
}
