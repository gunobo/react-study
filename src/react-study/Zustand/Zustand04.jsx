import React, { useState } from 'react'
// Zustand 스토어에서 책 목록 관련 상태와 함수를 가져옵니다.
import { useBookList } from './store/bookStore'
import { preinit } from 'react-dom';

export default function Zustand04() {
    // Zustand 전역 상태에서 책 목록과 CRUD 함수를 가져옵니다.
    const {books, addBook, removeBook, updateBook} = useBookList();
    // form: 책 추가 폼의 입력 값을 로컬 상태로 관리합니다.
    const [form, setFrom] = useState({
        title: "",
        author: "",
        price: "",
    });

    // 입력 필드 변경 시 해당 필드의 값을 form 상태에 업데이트합니다.
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFrom ((prev)=> {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    // 추가 버튼 클릭 시 실행될 함수입니다.
    const handleAdd = () => {
        // 필수 필드 중 하나라도 비어 있으면 추가를 중단합니다.
        if (!form.title || !form.author || !form.price) return;
        addBook(form); // Zustand 스토어의 addBook 함수로 전역 상태에 책을 추가합니다.
        setFrom({ title: "", author: "", price: "" }); // 추가 후 폼을 초기화합니다.
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
      <button onClick={handleAdd}>추가</button>
      <ul>
        {/* books 배열을 map()으로 순회하여 각 Book 컴포넌트를 렌더링합니다. */}
        {books.map((book) => (
            <Book
                key={book.id}
                book={book}
                onRemove={removeBook}
                onUpdate={updateBook}
            />
        ))}
      </ul>
    </div>
  )
}

// onRemove, onUpdate는 useBookList 스토어에서 받아온 함수입니다.
// Book: 책 한 권의 정보를 표시하고 수정/삭제 기능을 제공하는 컴포넌트입니다.
function Book({book, onRemove, onUpdate}) {
    const {id, title, author, price} = book;
    // isEditing: 현재 수정 모드인지 여부를 관리하는 로컬 상태입니다.
    const [isEditing, setIsEditing] = useState(false);
    // newPrice: 수정 중인 가격 값을 관리하는 로컬 상태입니다.
    const [newPrice, setNewPrice] = useState(price);

    // 완료 버튼 클릭 시 변경된 가격으로 전역 상태를 업데이트합니다.
    const handleUpdate = () => {
        onUpdate(id, newPrice); // Zustand 스토어의 updateBook 함수를 호출합니다.
        setIsEditing(false); // 수정 완료 후 수정 모드를 종료합니다.
    }

    return (
        <li>
            <strong>{title}</strong> - {author}
            {/* 수정하기 버튼 클릭 시
            1. price를 다시 입력할 수 있는 input이 나타납니다.
            2. 완료 버튼을 클릭하면 변경된 가격이 저장됩니다.
            3. 취소 버튼을 클릭하면 수정 모드를 종료합니다.
            */}

            {/* isEditing 값에 따라 수정 폼 또는 표시 영역을 렌더링합니다. */}
            {isEditing ? (
                <>
                    <input
                        type="number"
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                    />
                    <button onClick={handleUpdate}>완료</button>
                    <button onClick={() => setIsEditing(false)}>취소</button>
                </>
            ) : (
                <>
                    <span>{price}원</span>
                    <button onClick={() => setIsEditing(true)}>수정</button>
                    {/* 삭제 버튼 클릭 시 Zustand 스토어의 removeBook 함수를 호출합니다. */}
                    <button onClick={() => onRemove(id)}>삭제</button>
                </>
            )}
        </li>
    )
}
