import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
// 1. src/assets에 저장된 이미지 -> 빌드 시 번들에 포함됩니다.
import batmanImg from '../../assets/batman.webp';
// 2. public/assets에 저장된 이미지 -> 정적 이미지로 제공됩니다.
// "/"로 시작하는 경로로 접근할 수 있습니다.

// cardStyle: isActive 값에 따라 카드의 크기와 배경색이 동적으로 변경됩니다.
const cardStyle = (isActive) => css`
  position: relative;
  width: ${isActive ? "220px" : "120px"};
  height: ${isActive ? "330px" : "180px"};
  padding: 10px;
  box-sizing: border-box;
  background-color: ${isActive ? "#ddd" : "#eee"};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
`;

// imageStyle: 카드 이미지가 카드 영역을 꽉 채우도록 설정하는 스타일입니다.
const imageStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// contentStyle: 카드 하단에 텍스트 정보를 반투명 배경으로 표시하는 스타일입니다.
const contentStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  color: white;
  background: rgba(0, 0, 0, 0.6);
`;


// 화살표 함수형으로 만드는 컴포넌트입니다.
// movie, isActive, onClick props를 받아 영화 카드를 렌더링합니다.
const MovieCard = ({movie, isActive, onClick}) => {
  const {title, year, description, imgUrl} = movie;

  return (
    // 전달받은 isActive props에 따라 다른 CSS가 적용됩니다.
    <div onClick={onClick} css={cardStyle(isActive)}>
      <img src={imgUrl} alt={title} css={imageStyle}/>
      <div css={contentStyle}>
        <h4>{title}</h4>
        <small>{year}</small>
        {/* isActive가 true일 때만 영화 설명을 렌더링합니다. */}
        {isActive && <p>{description}</p>}
      </div>
    </div>
  );
}

// 렌더링할 영화 데이터 목록입니다.
const MOVIES = [
  {
    id: 1,
    title: "인셉션",
    year: 2010,
    description: "꿈 속에서 꿈꾸는 범죄스릴러",
    imgUrl: "https://i.namu.wiki/i/ujkt6TPVoeYxq3q9h2yE_MckhgdJ6rOcdgnkCcs1ivWzB5hlnPBCEzatFDMApkNfWlxuCTQYH3d2SMj632Fzsg.webp"
  },
  {
    id: 2,
    title: "인터스텔라",
    year: 2014,
    description: "인류생존과 시공간 표현한 SF 영화",
    imgUrl: "https://i.namu.wiki/i/yd6wnRIWEVMFY3wNjB-WKc0_nXstbPdiq87sfkbe3wJ8y2ZAhoZAfpebxEgc9bU1xIQh2OmD7Oi12CkFDhWbag.webp"
  },
  {
    id: 3,
    title: "배트맨: 다크나이트",
    year: 2008,
    description: "히스레저의 조커가 멋지다",
    imgUrl: batmanImg
  },
]


// layout: 영화 카드들을 가로로 중앙 정렬하여 나열하는 레이아웃 스타일입니다.
const layout = css`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export default function Emotion02() {
  // activeId: 현재 활성화(선택)된 영화의 id를 관리하는 상태입니다. 초기값은 null입니다.
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    // setInterval(함수, ms): ms마다 첫 번째 매개변수로 전달받은 함수를 실행합니다.
    const timer = setInterval(() => { // 1. senInterval -> setInterval 오타 수정
      setActiveId((prev) => {
        if (prev === null) {
          // 아무것도 선택되어 있지 않으면 null 상태입니다.
          // 0번째 movie(JS 객체)의 id값으로 설정합니다.
          return MOVIES[0].id;
        }

        // 어떤 movie가 선택되었는지 식별합니다.
        // movie의 id로 MOVIES 배열에서 몇 번째 idx에 있는지 찾습니다.
        // find() -> 조건에 맞는 객체를 리턴하고, findIndex() -> 인덱스를 리턴합니다.
        const currentIndx = MOVIES.findIndex((m) => prev === m.id); // 2. find -> findIndex로 변경

        // 마지막 항목이면 처음으로, 아니면 다음 항목으로 이동합니다.
        const nextIdx = currentIndx === MOVIES.length - 1 ? 0 : currentIndx + 1;
        return MOVIES[nextIdx].id;
      })
    }, 2000);

    // setInterval, setTimeout 등 브라우저 API를 useEffect에서 사용한 경우
    // 컴포넌트가 언마운트될 때 반드시 해제해줘야 메모리 누수를 방지할 수 있습니다.
    return () => clearInterval(timer); // 3. clearInterval 추가 (메모리 누수 방지)
  }, []) // 빈 배열을 전달하여 마운트 시 1회만 타이머를 등록합니다.

  return (
    <div css={layout}>
      {/* map()으로 MOVIES 배열을 순회하여 MovieCard 컴포넌트들을 렌더링합니다. */}
      {MOVIES.map((m) => {
        return <MovieCard
        movie={m}
        key={m.id}
        // 같은 카드를 한 번 더 누르면 null로 설정하여 선택을 해제합니다.
        onClick={() => setActiveId(activeId === m.id ? null : m.id)}
        // 현재 카드의 id가 activeId와 같으면 활성화 상태로 표시합니다.
        isActive={activeId === m.id}
        />
      })}
    </div>
  )
}
