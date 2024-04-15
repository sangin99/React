import React from 'react';
import './App.css';
import Component from './component/Component';
import Sample from './component/Component';
import SignInContainer1 from './component/example/SignInContainer';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import SignInContainer from './component_manage/example/SignInContainer';
import ConditionalRendering from './component_manage/ConditionalRendering';
import ListRendering from './component_manage/ListRendering';
import EventComponent from './interaction/EventComponent';
import StateComponent from './interaction/StateComponent';
import ForwordingStateComponent from './interaction/ForwordingStateComponent';
import HookComponent1 from './hook/HookComponent1';
import HookComponent2 from './hook/HookComponent2';



// JSX / TSX : 
// JSX (JavaScript XML) / TSX (TypeScript XML)
// XML 의 형태와 유사, DOM 트리를 생성하는 JS/TS 의 확장

//? Component : 
// - UI 를 독립적인 부분으로 나누어서 재사용을 가능하도록 함
// - 각각의 요소별로 개별 상태와 로직을 가지고 있음
// - 사용할 때는 HTML 의 요소와 비슷하게 사용됨
// - 컴포넌트를 정의할 땐 클래스형과 함수형이 존재
// - 클래스형 컴포넌트는 하나의 컴포넌트를 클래스의 인스턴스로 인식
// - 함수형 컴포넌트는 컴포넌트를 코드 기준으로 인식
// - 최근에는, 클래스형 컴포넌트보다 함수형 컴포넌트를 주로 사용

//! 컴포넌트를 선언하는 방법 : 
// 1. class component
// class 로 컴퍼넌트를 작성
// 반드시 첫글자는 대문자로 작성
// react 패키지에 있는 Component 클래스를 상속하여 구현
// render() 함수의 반환값으로 렌더링하고자 하는 요소를 지정
class ClassComponent extends React.Component {
    render() {
        return (
            <h1>클래스형 컴포넌트</h1>
        );
    }
}

// 2. function component
// - function 으로 컴포넌트 작성
// - 반드시 첫글자는 *대문자*로 작성
// - 컴포넌트 함수에 반환값으로 렌더링하고자하는 요소를 지정
function FunctionComponent () {
    return (
        <h1>함수형 컴포넌트</h1>
    );
}

// 클래스형 컴포넌트는 잘 사용되지 않음 _ 대부분 함수형으로 작성
// ! ES7+ React/Redux/React-Native snippets 확장을 설치 후
// ! 단축 명령으로 클래스형 혹은 함수형 컴포넌트를 생성할 수 있음

// ! 클래스형 : rcc 단축 명령으로 생성가능
// 클래스의 이름 = 파일명과 동일하게 작성됨
//? rcc 입력
// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

// ! 함수형 : rfc 단축 명령으로 생성가능
// 함수명 = 파일명과 동일하게 작성됨
//? rfc 입력
// export default function App() {
//   return (
//     <div>App</div>
//   )
// }



function App() {
    return ( 
        <>
            {/* <ClassComponent />
            <FunctionComponent /> */}
            {/* <Component/>
            <Sample /> */}
            {/* <SignInContainer /> */}
            {/* <CurlyBraces /> */}
            {/* <Properties /> */}
            {/* <ConditionalRendering /> */}
            {/* <ListRendering /> */}
            {/* <EventComponent /> */}
            {/* <StateComponent /> */}
            {/* <ForwordingStateComponent /> */}
            {/* <HookComponent1 /> */}
            <HookComponent2 />
        </>
    );
}

export default App;
