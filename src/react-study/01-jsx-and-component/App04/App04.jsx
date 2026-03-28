import MenuList from "./menuList";

export default function App04() {
    const age = 20;
    const forAdults = ["맥주", "와인", "위스키"];
    const forChildren = ["우유", "당근주스", "사이다"];

    // age가 19세 초과이면 성인, 그렇지 않으면 어린이로 판별합니다.
    const isAdult = age > 19;
    const menuTitle = isAdult ? "성인용 메뉴" : "어린이 메뉴";
    let menus = [];
    if (isAdult) {
        menus = forAdults;
    } else {
        menus = forChildren;
    }

  return (
    <div>
        <h1>메뉴</h1>
        {/* App04가 MenuList의 부모 컴포넌트가 됩니다. */}
        {
        // 자식 컴포넌트에 데이터를 전달합니다.
        // key-value 형식으로 전달하면 객체로 포장되어 전달됩니다.
        /*
            전달되는 props 객체의 구조는 아래와 같습니다.
            {
                title: "성인용메뉴",
                menus: ["맥주", "와인"...]
            }
        */
        }
        {/* title과 menus props를 MenuList 자식 컴포넌트로 전달합니다. */}
        <MenuList title={menuTitle} menus={menus} />
    </div>
  )
}
