import { Router } from "react-router-dom";
import UseRef01 from "./04-useRef/UseRef01";
import UseRef02 from "./04-useRef/UseRef02";
import Emotion01 from "./Emotion/Emotion01";
import Emotion02 from "./Emotion/Emotion02";
import Router01 from "./ReactRouter/Router01/Router01";
import Router02 from "./ReactRouter/Router02/Router02";
import Router03 from "./ReactRouter/Router03/Router03";
import Router04 from "./ReactRouter/Router04/Router04";
import Router05 from "./ReactRouter/Router05/Router05";
import Zustand01 from "./Zustand/Zustand01";
import MyToast from "./Zustand/MyToast";
import Zustand02 from "./Zustand/Zustand02";
import Zustand03 from "./Zustand/Zustand03";
import Zustand04 from "./Zustand/Zustand04";
import Axios01 from "./Axios/Axios01";
import Axios02 from "./Axios/Axios02";
import Axios03 from "./Axios/Axios03";

// Study: 각 챕터별 학습 컴포넌트를 번호로 선택하여 렌더링하는 컨테이너 컴포넌트입니다.
// stateStudy 객체에서 숫자 키로 원하는 컴포넌트를 선택합니다.
export default function Study() {
    const stateStudy = {
        1: <UseRef01 />,
        2: <UseRef02 />,
        3: <Emotion01 />,
        4: <Emotion02 />,
        5: <Router01 />,
        6: <Router02 />,
        7: <Router03 />,
        8: <Router04 />,
        9: <Router05 />,
        10: <Zustand01 />,
        11: <Zustand02 />,
        12: <Zustand03 />,
        13: <Zustand04 />,
        14: <Axios01 />,
        15: <Axios02 />,
        16: <Axios03 />,
    };

    // 현재 학습할 챕터의 번호를 변경하여 해당 컴포넌트를 렌더링합니다.
    return stateStudy[16];
}
