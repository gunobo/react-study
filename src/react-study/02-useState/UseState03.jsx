import React, { useState } from "react";

export default function UseState03() {
    // formData 상태를 객체로 관리합니다. 이름과 전공 정보를 함께 보관합니다.
    const [formData, setFormData] = useState({
        name: "",
        major: "",
    });
    const [name, setName] = useState("");
    const [major, setMajor] = useState("");

    // onClick, onChange와 같은 이벤트 속성에
    // 등록된 함수는 첫 번째 매개변수에
    // 리액트가 자동으로 이벤트 객체를 넣어줍니다.
    const handleNameChange = (event) => {
        const target = event.target;
        const value = target.value;
        setName(value);
    };

    const handleMajorChange = (e) => {
        const value = e.target.value;
        setMajor(value);
    };

    const handleInputChange = (e) => {
        // input 태그의 name 속성을 활용하여 어떤 input인지 식별합니다.
        const { name, value } = e.target;
        // name === "name" -> 이름 Input을 의미합니다.
        // name === "major" -> 전공 Input을 의미합니다.
        // -> 두 개의 input 중 어떤 input인지 식별하여 상태를 업데이트합니다.
        // setFormData()에 JS 객체를 업데이트합니다.

        const newFormData = {
            ...formData, // 기존값을 spread 문법으로 복사합니다.
            [name]: value, // 변경된 값만 해당 키에 업데이트합니다.
        };
        setFormData(newFormData);
    };

    return (
        <div>
            <input
                type="text"
                // value에 formData.name을 연결하였으므로
                // 입력할 때마다 setter로 name을 업데이트해줘야 합니다.
                value={formData.name}
                name="name"
                placeholder="이름입력"
                onChange={handleInputChange}
            />
            <input
                type="text"
                value={formData.major}
                name="major"
                onChange={handleInputChange}
                placeholder="전공입력"
            />

            <p>이름:{formData.name}</p>
            <p>전공:{formData.major}</p>
        </div>
    );
}
