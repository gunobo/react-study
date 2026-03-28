// default export로 내보낸 모듈은 import할 때 원하는 이름으로 자유롭게 지정할 수 있습니다.
import Modal from "./react-study/02-useState/Modal/Modal"
import ModalContainer from "./react-study/02-useState/Modal/ModalContainer"
import NavBar from "./react-study/02-useState/NavBar/NavBar"
// Study 컴포넌트는 학습용 컴포넌트를 한곳에서 관리하는 라우터 역할을 합니다.
import Study from "./react-study/study"
// MyToast는 Zustand 전역 상태를 사용하는 토스트 알림 컴포넌트입니다.
// 어느 컴포넌트에서든 토스트를 띄울 수 있도록 최상단에 배치합니다.
import MyToast from "./react-study/Zustand/MyToast"

function App() {
    return (
      <>
        <MyToast />
        <Study />
      </>
  )
}

export default App
