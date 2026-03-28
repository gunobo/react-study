import React from 'react'

export default function App02() {
    const person = {
        name: "홍길동",
        age: 20
    }
    const fruits = ["사과", "바나나", "포도", "수박"]

    let fruitItems = []
    for (let i = 0; i<fruits.length; i++) {
        const myLi = <li key={i}>{fruits[i]}</li>
        // fruitItems.push(myLi);
        // spread 문법을 사용하여 기존 배열에 새 요소를 추가합니다.
            fruitItems = [...fruitItems, myLi];
    }

    // JSX 내부에서는 if문을 사용할 수 없습니다. 삼항연산자를 사용해주세요.
    // JSX 내부에서는 for문을 사용할 수 없습니다. map(), forEach(), filter() 등의 배열 메서드를 사용해주세요.
  return (
    <div>
        <div>이름:{person.name}</div>
        <div>나이:{person.age > 19 ? person.age : "미성년자"}</div>
        <h2>좋아하는 과일</h2>
        <ul>
            {
                fruits.map((fruit, index) => {
                    return <li key={index}>{fruit}</li>
                })
            }
        </ul>
        <h2>좋아하는 과일ver2</h2>
        <ul>
            {/* 각 태그가 담긴 리스트를 중괄호 안에 선언하면 JSX로 렌더링됩니다. */}
            {fruitItems}
        </ul>
    </div>
  )
}
