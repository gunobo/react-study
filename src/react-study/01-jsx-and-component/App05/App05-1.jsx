import React from 'react'
import Layout from './Layout'
import AuthManger from './AuthManger';

// Layout 태그 사이에 들어간 내용은
// 전부 children이라는 이름의 props로 자식 컴포넌트에 전달됩니다.
// children이라는 이름은 React에서 미리 정해둔 예약된 props 이름입니다.
// 주로 레이아웃 CSS나 권한 관리를 담당하는 바깥 레이어 컴포넌트를 만들 때 사용합니다.
export default function App05() {
    // isLogin이 false이므로 AuthManger에서 로그인 필요 메시지가 표시됩니다.
    const isLogin = false;

  return (
    // Layout(children : {<h2></h2><p></p>}) 형태로 children props가 전달됩니다.
    <AuthManger isLogin={isLogin}>
    <Layout>
        <h2>메인페이지</h2>
        <p>레이아웃이 적용될까요?</p>
    </Layout>
    </AuthManger>
  )
}
