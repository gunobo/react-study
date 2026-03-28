import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// React 앱의 진입점(entry point)입니다.
// index.html의 <div id="root"> 요소를 찾아 App 컴포넌트를 렌더링합니다.
createRoot(document.getElementById('root')).render(<App />)


// GitHub에 올릴 때 node_modules는 자동으로 제외됩니다.
// 다른 PC에서 실행할 때는 아래 순서를 따라주세요.
// 1. git clone으로 프로젝트를 내려받습니다.
// 2. 터미널에서 npm install을 입력하여 node_modules를 생성합니다.
// 3. npm run dev로 실행합니다.