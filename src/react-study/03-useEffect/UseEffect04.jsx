import React, { useEffect, useState } from 'react'


export default function () {
    // formVal: 이메일과 비밀번호를 객체로 함께 관리하는 상태입니다.
    const [formVal, setFormVal] = useState({
        email: "",
        password: ""
    });

    // errorMsg: 각 필드의 유효성 검사 오류 메시지를 객체로 관리합니다.
    // 예시: {"email": "@를 넣어주세요", "password": "8자 이상"}
    const [errorMsg, setErrorMsg] = useState({})
    // isDisabled: 가입하기 버튼의 비활성화 여부를 관리합니다.
    const [isDisabled, setIsDisabled] = useState(false);

    // 이벤트 객체로 현재 입력 중인 input을 특정하여
    // setFormVal에 JS 객체를 업데이트합니다.
    const inputChangeHanlder = (e) => {
        const {name, value} = e.target;
        setFormVal((prev) => {
            return {
                ...prev,
                [name]: value // 중복된 key이면 새 값으로 업데이트합니다.
            }
        });
    }

    // formVal 값이 변경될 때마다 유효성 검사를 수행합니다.
    useEffect(() => {
        // 초기에는 버튼을 비활성화 상태로 설정합니다.
        setIsDisabled(() => true);

        const newErrorMsg = {}
        // 1. 이메일에 @가 있는지 검사합니다.
        // -> 이메일 형식이 아닌 경우 에러 메시지를 설정합니다.
        if(formVal.email.length > 0 && !formVal.email.includes("@")) {
            newErrorMsg.email = "이메일 형식에 맞게 입력";
        }
        // 2. 비밀번호의 길이가 8 미만인지 검사합니다.
        // -> 8자 미만인 경우 에러 메시지를 설정합니다.
        if(formVal.password.length > 0 && formVal.password.length < 8) {
            newErrorMsg.password = "비밀번호는 8자 이상";
        }
        setErrorMsg(newErrorMsg);

        // newErrorMsg가 빈 {} 라면 유효성 검사를 통과한 것입니다.
        // -> 버튼을 활성화합니다.
        // Object.keys()는 객체의 key들만 배열로 반환합니다.
        const keys = Object.keys(newErrorMsg)
        if (formVal.email &&
            formVal.password &&
            keys.length === 0
        ) {
            setIsDisabled(false); // 모든 조건 통과 시 버튼을 활성화합니다.
        }

    }, [formVal]); // formVal이 변경될 때마다 유효성 검사를 다시 실행합니다.


  return (
    <div>
        <div>
            <input
                type="email"
                name='email'
                placeholder='이메일'
                value={formVal.email}
                onChange={inputChangeHanlder}
            />
            {/* 이메일 오류 메시지가 있을 때만 렌더링합니다. */}
            {errorMsg.email && <p>{errorMsg.email}</p>}
        </div>
        <div>
            <input
                type="password"
                name='password'
                placeholder='비밀번호'
                value={formVal.password}
                onChange={inputChangeHanlder}
            />
            {/* 비밀번호 오류 메시지가 있을 때만 렌더링합니다. */}
            {errorMsg.password && <p>{errorMsg.password}</p>}
        </div>
        {/* 유효성 검사를 통과하지 못한 경우 버튼을 비활성화합니다. */}
        <button
            disabled={isDisabled}
            onClick={() => alert("가입성공!")}
        >가입하기</button>
    </div>
  )
}
