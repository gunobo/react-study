import React, { useState } from 'react'
import Modal from './Modal'

// ModalContainer는 모달의 열림/닫힘 상태를 관리하는 부모 컴포넌트입니다.
export default function ModalContainer() {
    // open: 모달의 표시 여부를 관리하는 상태입니다. 초기값은 false(닫힘)입니다.
    const [open, setOpen] = useState(false)
    // 표시할 게시물 정보를 객체로 선언합니다.
    const post = {
        title: "첫번째 게시물",
        content: "첫번째 게시물을 클릭하셨습니다."
    }
  return (
    <div>
        {/* 버튼 클릭 시 open 상태를 true로 변경하여 모달을 엽니다. */}
        <button onClick={() => setOpen(true)}>모달열기</button>
        {/* Modal 컴포넌트에 open, title, content, onClose props를 전달합니다. */}
        <Modal
            open={open}
            title={post.title}
            content={post.content}
            onClose={() => setOpen(false)}
        />
    </div>
  )
}
