import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// Zustand 스토어에서 설문 조사 관련 상태와 함수를 가져옵니다.
import { useSurveyStore } from './store/surveyStore';

// Zustand03: 여러 페이지에 걸친 설문 조사 폼을 구현한 컴포넌트입니다.
// Zustand를 사용하여 페이지 간에 설문 데이터를 전달합니다.
export default function Zustand03() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Step1 />}/>
        <Route path='/step2' element={<Step2 />}/>
      </Routes>
    </BrowserRouter>
  )
}

// Step1: 설문 조사 1단계 컴포넌트입니다. 이름, 나이, 성별을 입력받습니다.
function Step1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const navigator = useNavigate();
  // 스토어의 setSurveyInfo 함수를 사용하여 입력 데이터를 전역 상태에 저장합니다.
  const { setSurveyInfo } = useSurveyStore();

  // 다음 버튼 클릭 시 입력 데이터를 전역 상태에 저장하고 Step2로 이동합니다.
  const handleNext = () => {
    const myUpdateData = {
      name: name,
      age: age,
      gender: gender
    }
    setSurveyInfo(myUpdateData); // Zustand 전역 상태에 Step1 데이터를 저장합니다.
    navigator("/step2"); // Step2 페이지로 이동합니다.
  }

  return (
    <div>
      <div>
        <h2>레스토랑 설문</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='이름'
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder='나이'
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">성별선택</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
        <button onClick={handleNext}>다음</button>
      </div>
    </div>
  )
}

// Step2: 설문 조사 2단계 컴포넌트입니다. 만족도, 추천 의향, 이메일을 입력받습니다.
function Step2() {
  const navigator = useNavigate();
  const [satisfaction, setSatisfaction] = useState("");
  const [recommend, setRecommend] = useState("");
  const [email, setEmail] = useState("");

  // Zustand 스토어에서 setSurveyInfo와 surveyData를 가져옵니다.
  const { setSurveyInfo, surveyData } = useSurveyStore();

  // 제출 버튼 클릭 시 Step2 데이터를 전역 상태에 저장합니다.
  const handleSubmit = () => {
    if(satisfaction && recommend && email) {
      alert("제출완료!")
    }
    const data = {
      "satisfaction": satisfaction,
      "recommend": recommend,
      "email": email
    }
    setSurveyInfo(data) // Zustand 전역 상태에 Step2 데이터를 저장합니다.
  }

  // 점수 선택 옵션 목록입니다. (1 ~ 5점)
  const scores = [
    <option key="default" value="">선택하세요</option>,
    <option key="1" value="1">1</option>,
    <option key="2" value="2">2</option>,
    <option key="3" value="3">3</option>,
    <option key="4" value="4">4</option>,
    <option key="5" value="5">5</option>,
  ]

  return(
    <div>
      <div>
        <h2>만족도 조사</h2>
        <div>
          <label>전체적인 만족도</label>
          <select
            value={satisfaction}
            onChange={(e) => setSatisfaction(e.target.value)}
          >
            {scores}
          </select>
        </div>
        <div>
          <label>추천 의향</label>
          <select
            value={recommend}
            onChange={(e) => setRecommend(e.target.value)}
          >
            {scores}
          </select>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='이메일입력'
          />
        </div>
        <button onClick={handleSubmit}>제출</button>
      </div>
    </div>
  )
}
