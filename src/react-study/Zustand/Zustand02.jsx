import React, { useState } from 'react'
// Zustand 스토어에서 책 정보 관련 상태와 함수를 가져옵니다.
import { useCurrentBook } from './store/bookStore';

export default function Zustand02() {
  // form: 입력 폼의 값을 로컬 상태로 관리합니다.
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: 0
  });
  // setNewBook: 입력한 책 정보를 Zustand 전역 상태에 저장하는 함수입니다.
  const { setNewBook } = useCurrentBook();

  // 입력 필드 변경 시 해당 필드의 값을 form 상태에 업데이트합니다.
  const handleChange = (e) => {
    let {name, value} = e.target;
    setForm((prev) => {
      // price 필드는 숫자로 변환하여 저장합니다.
      if (name === "price") {
        value = parseInt(value);
      }
      return {
        ...prev,
        [name]: value
      }
    })
  }
  // 입력 완료 버튼 클릭 시 Zustand 전역 상태에 책 정보를 저장하고, 폼을 초기화합니다.
  const handleSubmit = () => {
    setNewBook({...form}); // 현재 form 값을 전역 상태에 저장합니다.

    // 저장 후 폼을 초기값으로 초기화합니다.
    setForm({
      title: "",
      author: "",
      price: 0
    });
  }

  return (
    <div>
      <h2>책 정보 입력</h2>
      <input
        type="text"
        name='title'
        placeholder='책제목'
        onChange={handleChange}
        value={form.title}
      />
      <input
        type="text"
        name='author'
        placeholder='저자'
        onChange={handleChange}
        value={form.author}
      />
      <input
        type="number"
        name='price'
        placeholder='가격'
        onChange={handleChange}
        value={form.price}
      />
      <button onClick={handleSubmit}>입력완료</button>
      {/* ShowBook 컴포넌트에서 Zustand 전역 상태의 책 정보를 표시합니다. */}
      <ShowBook />
    </div>
  )
}

// ShowBook: Zustand 전역 상태에서 현재 저장된 책 정보를 가져와 표시하는 컴포넌트입니다.
function ShowBook() {
  const { book } = useCurrentBook();
  const { title, author, price } = book;
  return (
    <div>
      <h3>현재 저장된 책 정보</h3>
      <p>제목: {title}</p>
      <p>저자: {author}</p>
      <p>가격: {price}원</p>
    </div>
  )
}
