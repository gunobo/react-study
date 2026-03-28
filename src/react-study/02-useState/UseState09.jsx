import React, { useState } from 'react'

export default function UseState09() {
    // author: 검색할 작성자 이름을 관리하는 상태입니다.
    const [author, setAuthor] = useState("");
    // comment: 검색된 댓글 객체를 관리하는 상태입니다. 초기값은 null입니다.
    const [comment, setComment] = useState(null);

    // 임시 댓글 데이터 배열입니다.
    const comments = [
        {author: "홍길동", title:"배송 빨라요"},
        {author: "김길동", title:"배송 느려요"},
        {author: "이길동", title:"아자스"},
        {author: "박길동", title:"포장 꼼꼼해요"},
        {author: "최길동", title:"생각보다 크기가 작아요"},
    ]
    // 입력된 작성자 이름으로 댓글을 검색하는 함수입니다.
    const handleSearch = () => {
        // find()로 author와 일치하는 첫 번째 댓글을 찾습니다.
        const result = comments.find(
            (item) => item.author === author
        );
        // 결과가 없으면 null을 설정합니다.
        setComment(result || null);
    };
  return (
    <div>
        <h1>리뷰 검색(작성자)</h1>
        <input
            type="text"
            value={author}
            placeholder='작성자 이름을 입력하세요'
            onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
        {/* 검색 결과가 있으면 title을 보여줍니다. */}
        {/* 결과가 없으면 <h2>"해당 작성자의 글을 찾을 수 없습니다"</h2>를 보여줍니다. */}
        {comment ? (
                <h2>{comment.title}</h2>
                ) : (
                // author가 빈 문자열이 아닐 때만 안내 메시지를 렌더링합니다.
                author !== "" && <h2>해당 작성자의 글을 찾을 수 없습니다</h2>
            )
        }
    </div>
  )
}
